const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserInfo = require('./models/User'); // Import User model
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: 'http://192.168.1.71:5000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
})); // Enable CORS

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/fitness-tracker')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('MongoDB connection error:', error));


// Signup Route
app.post('/api/SignUp', async (req, res) => {
    console.log(req.body);
    const { firstname, lastname, height, weight, age, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({
            error: 'Server error',
            message: 'Passwords do not match'
        });
    }

    try {
        // Check if user already exists
        let user = await UserInfo.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create new user
        user = new UserInfo({ firstname, lastname, height, weight, age, email, password });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        //Generate JWT token
        const payload = { userId: user.id };
        const token = jwt.sign(payload, 'yourSecretKey', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (err) {
        console.error("Server error:", err.message);
        res.status(500).json({error: 'Server error', message: err.message});
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body; // Get email and password from the request
    console.log(req.body);

    try {
        // Find user by email, case-insensitive
        const user = await UserInfo.findOne({ email: new RegExp(`^${email}$`, 'i') });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Compare the plaintext password with the hashed password from the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate a JWT token upon successful login
        const payload = { userId: user.id };
        const token = jwt.sign(payload, 'yourSecretKey', { expiresIn: '1h' });

        res.status(200).json({ success: true, token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
