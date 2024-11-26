const { use } = require('i18next');
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: [true, 'Username is required'],
        unique: true
    }, 
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware for hashing password before saving
UserSchema.pre('save', async function (next) {
    // Add password hashing logic here, e.g., using bcrypt
    next();
});

module.exports = mongoose.model('User', UserSchema);
