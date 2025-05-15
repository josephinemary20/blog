const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    user_id: {
        ref: "user",
        type: mongoose.Schema.Types.ObjectId
    }
});

const PostModel = mongoose.model('post', PostSchema)
module.exports = PostModel;