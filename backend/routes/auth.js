const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const mongoose = require('mongoose');

// Inscription
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ msg: 'Email and password are required' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const user = new User({ email, password });
        await user.save();

        res.status(201).json({ msg: 'User registered successfully', userId: user._id });
    } catch (err) {
        console.error('Error during registration:', err.message);
        res.status(500).json({ msg: 'Server error' });
    }
});

// Connexion
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ msg: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            token,
            userId: user._id,
            msg: 'Login successful',
        });
    } catch (err) {
        console.error('Error during login:', err.message);
        res.status(500).json({ msg: 'Server error' });
    }
});

// Mise à jour du profil
router.put('/profile/:id', async (req, res) => {
    const { firstName, lastName, dateOfBirth, address, sport, description } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ msg: 'Invalid user ID' });
        }

        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.dateOfBirth = dateOfBirth || user.dateOfBirth;
        user.address = address || user.address;
        user.sport = sport || user.sport;
        user.description = description || user.description;

        await user.save();
        res.status(200).json({ msg: 'Profile updated successfully', user });
    } catch (err) {
        console.error('Error updating profile:', err.message);
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
