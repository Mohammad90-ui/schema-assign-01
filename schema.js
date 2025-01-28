const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: Number,
    },
});

const userSchema = new mongoose.schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
    },
    profile: {
        type: profileSchema,
        required: true,
    },
    lastLogin: {
        type: Date,
        default: Date.now(),
    },

});
const User = mongoose.model('User', userSchema);
module.exports = User;
