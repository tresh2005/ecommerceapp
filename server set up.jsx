// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect('mongodb://localhost:27017/blinkit', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(5000, () => {
            console.log('Server is running on port 5000');
        });
    })
    .catch(err => console.error('Database connection error:', err));