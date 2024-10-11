const express = require('express');
// const bcrypt = require('bcryptjs');  // bcrypt removed since not using password hashing
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'off_chain_db',
  password: 'new_pass1234',
  port: 5432,
});

// JWT secret key
const JWT_SECRET = '08081626faa9bf88afe99f2766fe6b85d0aa30d4263a051ceb323be63777cd16';

// Register a user (no password hashing)
app.post('/submit', async (req, res) => {
  const { username, email, phone_number, password } = req.body; // role is 'admin' by default
  const role = 'admin'; // Set the role to 'admin' by default

  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO users_4 (username,email, phone_number, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [username,email, phone_number, password, role] // Store plain-text password directly
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error registering user:', error); // Debug information
    res.status(400).send('Error registering user');
  } finally {
    client.release();
  }
});

// Login (no bcrypt, plain-text password comparison)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users_4 WHERE username = $1', [username]); // Check 'users_4' table
    if (result.rows.length === 0) return res.status(400).send('User not found');
    const user = result.rows[0];

    // Plain-text password comparison
    if (password !== user.password) return res.status(400).send('Incorrect password');
    
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error); // Debug information
    res.status(400).send('Error logging in');
  } finally {
    client.release();
  }
});

// Middleware to check token and role
const authenticate = (roles) => (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token required');

  // Assuming Bearer token format, splitting it
  const tokenPart = token.split(' ')[1];
  jwt.verify(tokenPart, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send('Invalid token');
    if (!roles.includes(decoded.role)) return res.status(403).send('Access denied');
    
    req.user = decoded; // Add user info to request
    next();
  });
};

// Protected routes
app.get('/admin', authenticate(['admin']), (req, res) => {
  res.send('Welcome Admin');
});

app.get('/user', authenticate(['user', 'admin']), (req, res) => {
  res.send('Welcome User');
});

app.get('/verifier', authenticate(['verifier', 'admin']), (req, res) => {
  res.send('Welcome Verifier');
});

// Start the server
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
