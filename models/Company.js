const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const companySchema = new Schema({
    email: { type: String, required: true, unique:true},
    password: { type: String, required: true},
    name: { type: String, required: true},
    description: String,
})

module.exports = mongoose.model('Company', companySchema)

