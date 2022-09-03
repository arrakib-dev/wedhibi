const SubTask = require('../models/SubTask')

// create new SubTask
exports.create = (req, res)=>{

    const name = req.body.name
    const company = req.body.companyId
    const project = req.body.projectId
    const task = req.body.taskId
    const description = req.body.description ? req.body.description : ''

    const newSubTask = new SubTask({
        name: name,
        company: company,
        project: project,
        task: task,
        description: description
    })

    newSubTask.save()
        .then( result => {
            res.json(result)
        })
        .catch( error => {
            res.status(500).json({message: error})
        })

}

// read a SubTask
exports.read = async (req, res)=>{
    const id = req.body.id

    const SubTask = await SubTask.findById( id )
        .populate('company')
        .populate('project')
        .populate('task')
        .populate('comments')
        .lean()
        .exec();

    if(SubTask !== null){
        res.json(SubTask)
    } else {
        res.status(500).json("could not found the requested SubTask")
    }
}

// update a SubTask
exports.update = async (req, res)=>{
    const updatedParams = req.body.updatedParams // object :  {updatedParamKey : updatedParamValue}
    const id = req.body.id

    let SubTask
    for (const [key, value] of Object.entries(updatedParams)) {
        if(key !== "company" || key !== "project" || key !== "task"){
            SubTask = await SubTask.findByIdAndUpdate(id, updatedParams, {
                new: true,
            }).lean()
        }
    }
    if(Object.keys(SubTask).length === 0 && SubTask.constructor === Object){
        res.json(SubTask)
    } else {
        res.status(500).json("could not update the requested SubTask")
    }

}

// delete a SubTask
exports.delete = async (req, res)=>{
    const id = req.body.id
    const SubTask = await SubTask.findByIdAndDelete(id);

    if (SubTask !== null){
        res.json("success")
    } else {
        res.status(500).json("could not delete the requested SubTask")
    }

}
