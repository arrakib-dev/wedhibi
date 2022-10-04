const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique:true},
    password: { type: String, required: true},
    name: String,
    profilePicture: String,
    designation: String,
    role:  { type: String, required: true},
    workspace: { type: Schema.Types.ObjectId, ref: 'Workspace' }
})

module.exports = mongoose.model('User', userSchema)

