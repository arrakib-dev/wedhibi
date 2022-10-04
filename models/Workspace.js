const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const workspaceSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdOn: Date,
})

module.exports = mongoose.model('Workspace', workspaceSchema)

