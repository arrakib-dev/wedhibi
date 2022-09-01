const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    creator: { type: Schema.Types.ObjectId, ref: 'Member', required: true},
    text:  { type: String, required: true },
    spaceId: { type: Schema.Types.ObjectId, required:true },
    createDate: Date,
})

module.exports = mongoose.model('Comment', commentSchema)

