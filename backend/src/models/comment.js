const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment: String,
    post_id: {
        ref: "post",
        type: mongoose.Schema.Types.ObjectId
    },
    user_id: {
        ref: "user",
        type: mongoose.Schema.Types.ObjectId
    }
});

const CommentModel = mongoose.model('comment', CommentSchema)
module.exports = CommentModel;