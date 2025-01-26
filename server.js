const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

// Mock database (use a real database like MongoDB or MySQL in production)
const users = [];

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Signup Route
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to "database"
    users.push({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
});

// Sign-in Route
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ email: user.email }, 'secretkey', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
