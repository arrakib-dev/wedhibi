const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    createdOn: { type: Date, required: true},
    commentText: { type: String, required: true},
    workspace: { type: Schema.Types.ObjectId, ref: 'Workspace', required:true },
    field: { type: Schema.Types.ObjectId, required:true },
    deleted:Boolean
})

module.exports = mongoose.model('Comment', commentSchema)

