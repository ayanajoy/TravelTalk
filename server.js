const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const users = []; // Mock database

// Signup Route
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully.' });
});

// Sign-in Route
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password.' });
    }

    const token = jwt.sign({ email: user.email }, 'secretkey', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
