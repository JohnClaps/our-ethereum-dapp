const express = require('express');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');
const cors = require('cors');
const speakeasy = require('speakeasy');  // Speakeasy for OTP
require('dotenv').config();
const userRoutes = require('./apis/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: '',
  password: '',
  port: 5432,
});

// JWT secret key
const JWT_SECRET = '';

// Helper function to generate a new secret for OTP
const generateSecret = () => speakeasy.generateSecret({ length: 20 }).base32;

// Register a user (with an OTP secret)
app.post('/submit', async (req, res) => {
  const { username, email, phone_number, password } = req.body;
  const role = 'admin'; // Set the role to 'admin' by default
  const otp_secret = generateSecret();  // Generate OTP secret for the user

  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO users_4 (username, email, phone_number, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [username, email, phone_number, password, role]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(400).send('Error registering user');
  } finally {
    client.release();
  }
});

// Login route with OTP generation logic using Speakeasy
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const client = await pool.connect();

  try {
    // Step 1: Validate username and password
    const result = await client.query('SELECT * FROM users_4 WHERE username = $1', [username]);
    if (result.rows.length === 0) return res.status(400).send('User not found');

    const user = result.rows[0];

    if (password !== user.password) return res.status(400).send('Incorrect password');

    // Step 2: Generate a time-based OTP using Speakeasy and user's secret
    const otp = speakeasy.totp({
      secret: user.otp_secret,  // User-specific secret
      encoding: 'base32'
    });

    // Here you can send the OTP to the user's phone via SMS or email
    console.log(`Generated OTP for ${username}: ${otp}`);  // Debugging, remove in production

    res.status(200).send('OTP sent to your phone');
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(400).send('Error logging in');
  } finally {
    client.release();
  }
});

// OTP verification and final login step
app.post('/verify-otp', async (req, res) => {
  const { username, otp } = req.body;

  const client = await pool.connect();
  try {
    // Step 1: Fetch the user and their OTP secret
    const result = await client.query('SELECT * FROM users_4 WHERE username = $1', [username]);
    if (result.rows.length === 0) return res.status(400).send('User not found');

    const user = result.rows[0];

    // Step 2: Verify OTP using Speakeasy
    const verified = speakeasy.totp.verify({
      secret: user.otp_secret,  // User-specific secret
      encoding: 'base32',
      token: otp,               // OTP entered by the user
      window: 1                 // Time window for token validity
    });

    if (!verified) return res.status(400).send('Invalid OTP');

    // Step 3: OTP is valid, generate the JWT token
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(400).send('Error verifying OTP');
  } finally {
    client.release();
  }
});

//user management route
app.use('/api', userRoutes); // All user routes will be prefixed with /api
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
