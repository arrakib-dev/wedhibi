const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    workspace: { type: Schema.Types.ObjectId, ref: 'Workspace', required:true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User'},
    createdOn: Date,
    leader: { type: Schema.Types.ObjectId, ref: 'User'},
    collaborators: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    startDate: Date,
    finishDate: Date,
    completed: Boolean,
    completedOn:Date,

})

module.exports = mongoose.model('Project', projectSchema)

