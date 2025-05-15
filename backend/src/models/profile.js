const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    address: String,
    image: String,
    user_id: {
        ref: "user",
        type: mongoose.Schema.Types.ObjectId
    }
});

ProfileSchema.pre('save', async function (next) {
    let userExist = await ProfileModel.findOne({ user_id: this.user_id })
    if (userExist) throw new Error('Profile already exist for the user');
    next();
})

const ProfileModel = mongoose.model('profile', ProfileSchema);
module.exports = ProfileModel