// server/routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser  = new User({ username, password });
        await newUser .save();
        res.status(201).send('User  registered successfully');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
});

module.exports = router;