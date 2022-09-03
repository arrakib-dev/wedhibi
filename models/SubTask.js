const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const subTaskSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    company: { type: Schema.Types.ObjectId, ref: 'Story', required:true },
    project: { type: Schema.Types.ObjectId, ref: 'Project', required:true },
    task: { type: Schema.Types.ObjectId, ref: 'Task', required:true },
    assignee: { type: Schema.Types.ObjectId, ref: 'Member'},
    collaborators: [{ type: Schema.Types.ObjectId, ref: 'Member' }],
    startDate: Date,
    finishDate: Date,
    completed: Boolean,
    priority: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = mongoose.model('SubTask', subTaskSchema)

