const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        default: '',
    },
    lastName: {
        type: String,
        default: '',
    },
    dateOfBirth: {
        type: Date,
        default: null,
    },
    address: {
        type: String,
        default: '',
    },
    sport: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    },
});

// Avant de sauvegarder, hacher le mot de passe
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        console.error('Error hashing password:', err.message);
        next(err);
    }
});

module.exports = mongoose.model('User', UserSchema);
