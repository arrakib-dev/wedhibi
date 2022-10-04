const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    workspace: { type: Schema.Types.ObjectId, ref: 'Workspace', required:true },
    project: { type: Schema.Types.ObjectId, ref: 'Project', required:true },
    assignee: { type: Schema.Types.ObjectId, ref: 'User'},
    collaborators: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User'},
    createdOn:Date,
    startDate: Date,
    finishDate: Date,
    completed: Boolean,
    completedOn: Date,
    priority: String,
})

module.exports = mongoose.model('Task', taskSchema)

