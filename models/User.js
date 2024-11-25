const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        minlength: [2, 'First name must be at least 2 characters long']
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        minlength: [2, 'Last name must be at least 2 characters long']
    },
    height: {
        type: Number,
        required: [true, 'Height is required'],
        min: [30, 'Height must be at least 30 cm']
    },
    weight: {
        type: Number,
        required: [true, 'Weight is required'],
        min: [1, 'Weight must be a positive number']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [0, 'Age must be a positive number']
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
    // confirmPassword: {
    //     type: String,
    //     validate: {
    //         validator: function (value) {
    //             return value === this.password;
    //         },
    //         message: 'Passwords do not match'
    //     },
    //     required: [true, 'Please confirm your password']
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// // Middleware for hashing password before saving (optional)
// UserSchema.pre('save', async function (next) {
//     // Add password hashing logic here if needed
//     next();
// });

module.exports = mongoose.model('User', UserSchema);
