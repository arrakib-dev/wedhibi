const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    creator: { type: Schema.Types.ObjectId, ref: 'Member', required: true},
    commentDateTime: { type: Date, required: true},
    commentText: { type: String, required: true},
    company: { type: Schema.Types.ObjectId, ref: 'Company', required:true },
    space: {
        id: { type: Schema.Types.ObjectId, required:true },
        spaceType: { type: String, required: true}
    },
})

module.exports = mongoose.model('Comment', commentSchema)

