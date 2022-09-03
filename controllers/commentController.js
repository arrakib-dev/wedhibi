const Comment = require('../models/Comment')

// create new SubTask
exports.create = (req, res)=>{

    const creator = req.body.creator
    const commentDateTime = req.body.commentDateTime
    const commentText = req.body.commentText
    const spaceId = req.body.spaceId
    const company = req.body.company
    const spaceType = req.body.spaceType
    const space = {
        id: spaceId,
        spaceType: spaceType
    }

    const newComment = new Comment({
        creator: creator,
        commentDateTime: commentDateTime,
        commentText: commentText,
        space: space,
        company: company
    })

    newComment.save()
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

    const comment = await Comment.findById( id )
        .populate('company')
        .populate('creator')
        .populate('space.id')
        .lean()
        .exec();

    if(comment !== null){
        res.json(comment)
    } else {
        res.status(500).json("could not found the requested SubTask")
    }
}

// update a SubTask
exports.update = async (req, res)=>{
    const updatedParams = req.body.updatedParams // object :  {updatedParamKey : updatedParamValue}
    const id = req.body.id

    let comment
    for (const [key, value] of Object.entries(updatedParams)) {
        if(key === 'commentText' ){
            comment = await Comment.findByIdAndUpdate(id, updatedParams, {
                new: true,
            }).lean()
        }
    }
    if(Object.keys(comment).length === 0 && comment.constructor === Object){
        res.json(comment)
    } else {
        res.status(500).json("could not update the requested SubTask")
    }

}

// delete a SubTask
exports.delete = async (req, res)=>{
    const id = req.body.id
    const comment = await Comment.findByIdAndDelete(id);

    if (Comment !== null){
        res.json("success")
    } else {
        res.status(500).json("could not delete the requested SubTask")
    }

}
