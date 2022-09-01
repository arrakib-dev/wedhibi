const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: { type: String, required: true },
    companyId: { type: Schema.Types.ObjectId, ref: 'Story', required:true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    profilePicture: String,
})

module.exports = mongoose.model('Member', memberSchema)

