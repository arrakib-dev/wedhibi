const Task = require('../models/Task')

// create new task
exports.create = (req, res)=>{

    const name = req.body.name
    const companyId = req.body.companyId
    const projectId = req.body.projectId
    const description = req.body.description ? req.body.description : ''

    const newTask = new Task({
        name: name,
        company: companyId,
        project: projectId,
        description: description
    })

    newTask.save()
    .then( result => {
        res.json(result)
    })
    .catch( error => {
        res.status(500).json({message: error})
    })

}

// read a task
exports.read = async (req, res)=>{
    const id = req.body.id

    const task = await Task.findById( id )
        .populate('company')
        .populate('project')
        .populate('subTasks')
        .populate('comments')
        .lean()
        .exec();

    if(task !== null){
        res.json(task)
    } else {
        res.status(500).json("could not found the requested task")
    }
}

// update a task
exports.update = async (req, res)=>{
    const updatedParams = req.body.updatedParams // object :  {updatedParamKey : updatedParamValue}
    const id = req.body.id

    let task
    for (const [key, value] of Object.entries(updatedParams)) {
        if(key !== "company" || key !== "project"){
            task = await Task.findByIdAndUpdate(id, updatedParams, {
                new: true,
            }).lean()
        }
    }
    if(Object.keys(task).length === 0 && task.constructor === Object){
        res.json(task)
    } else {
        res.status(500).json("could not update the requested task")
    }

}

// delete a task
exports.delete = async (req, res)=>{
    const id = req.body.id
    const task = await Task.findByIdAndDelete(id);

    if (task !== null){
        res.json("success")
    } else {
        res.status(500).json("could not delete the requested task")
    }

}
