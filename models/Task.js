const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    companyId: { type: Schema.Types.ObjectId, ref: 'Story', required:true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required:true },
    assignee: { type: Schema.Types.ObjectId, ref: 'Member'},
    collaborators: [{ type: Schema.Types.ObjectId, ref: 'Member' }],
    startDate: Date,
    finishDate: Date,
    completed: Boolean,
    subTasks:[{ type: Schema.Types.ObjectId, ref: 'SubTask' }],
    priority: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = mongoose.model('Task', taskSchema)

