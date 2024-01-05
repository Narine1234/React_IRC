const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

const users = []; // In-memory array to store user data

app.use(express.json());

// Register route
app.post('/api/register', async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      userType,
      fundraisingFor,
      raisedFundsFor,
      idProof,
      idProofImage,
    } = req.body;

    // Check if the email is already registered
    if (users.find((user) => user.email === email)) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash the password before saving it to the in-memory array
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      fullName,
      email,
      password: hashedPassword,
      userType,
      fundraisingFor,
      raisedFundsFor,
      idProof,
      idProofImage,
    };

    users.push(newUser);

    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find((user) => user.email === email);

    if (!user) {
      return res.status(401).json({ error: 'Invalid Email or Password' });
    }

    // Compare the provided password with the hashed password in the in-memory array
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid Email or Password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.email }, 'secret_key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
