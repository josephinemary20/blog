const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin']
    }
});
UserSchema.pre('save', async function (next) {
    let user = this;
    let alreadyUserExist = await UserModel.findOne({ username: user?.username })
    if (alreadyUserExist) throw new Error("Username already exist");
    next()
})

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;