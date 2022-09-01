const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    companyId: { type: Schema.Types.ObjectId, ref: 'Story', required:true },
    leader: { type: Schema.Types.ObjectId, ref: 'Member'},
    collaborators: [{ type: Schema.Types.ObjectId, ref: 'Member' }],
    startDate: Date,
    finishDate: Date,
    completed: Boolean,
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
    priority: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = mongoose.model('Project', projectSchema)

