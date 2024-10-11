// // const express = require('express');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');
// // const { Wallet } = require('ethers');
// // const port = 4000;
// // const { Pool } = require('pg');

// // const app = express();
// // app.use(cors());
// // app.use(bodyParser.json());

// // // PostgreSQL connection pool
// // const pool = new Pool({
// //   user: 'postgres',
// //   database: 'off_chain_db',
// //   host: 'localhost',
// //   password: 'new_pass1234',
// //   port: 5432,
// // });

// // // API route to handle form submissions
// // app.post('/submit', async (req, res) => {
// //   const { username, walletId, email, phoneNumber, password,role } = req.body;

// //   // Basic validation
// //   if (!username || !walletId || !email || !phoneNumber || !password) {
// //     return res.status(400).send('All fields are required');
// //   }

// //   try {
// //     const query = 'INSERT INTO users(username, wallet_id, email, phone_number, password,role) VALUES($1, $2, $3, $4, $5,"admin")';
    
// //     // Insert data into the database
// //     await pool.query(query, [username, walletId, email, phoneNumber, password,role]);
// //     res.status(200).send('Data inserted successfully');
    
// //   } catch (err) {
// //     // Log the error message for debugging purposes
// //     console.error('Database error:', err.message); // Change here to log only the error message

// //     // Handle specific PostgreSQL errors
// //     if (err.code === '23505') { // Unique violation error
// //       return res.status(409).send('User with this username or email already exists');
// //     }

// //     // General error handling
// //     res.status(500).send('Server error');
// //   }
// // });

// // // Start server
// // app.listen(4000, () => {
// //   console.log('Server running on port',port);
// // });


// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const { Wallet } = require('ethers');
// const port = 4000;
// const { Pool } = require('pg');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL connection pool
// const pool = new Pool({
//   user: 'postgres',
//   database: 'off_chain_db',
//   host: 'localhost',
//   password: 'new_pass1234',
// app.post('/submit', async (req, res) => {
//   port: 5432,
// });
// // API route to handle form submissions
//   const { username, walletId, email, phoneNumber, password,role } = req.body;

//   // Basic validation
//   if (!username || !walletId || !email || !phoneNumber || !password) {
//     return res.status(400).send('All fields are required');
//   }

//   try {
//     // Set the role to 'admin' by default
//     const query = 'INSERT INTO users(username, wallet_id, email, phone_number, password, role) VALUES($1, $2, $3, $4, $5, $6)';

//     // Insert data into the database with the 'admin' role
//     await pool.query(query, [username, walletId, email, phoneNumber, password, 'admin']);
//     res.status(200).send('Data inserted successfully');
    
//   } catch (err) {
//     // Log the error message for debugging purposes
//     console.error('Database error:', err.message); // Change here to log only the error message

//     // Handle specific PostgreSQL errors
//     if (err.code === '23505') { // Unique violation error
//       return res.status(409).send('User with this username or email already exists');
// app.listen(4000, () => {
//     }

//     // General error handling
//     res.status(500).send('Server error');
//   }
// });

// // Start server
//   console.log('Server running on port', port);
// });

const express = require('express');
// const bcrypt = require('bcryptjs');  // Remove bcrypt since it's no longer needed
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
app.post('/register', async (req, res) => {
  const { username, password, role } = req.body; // password is stored directly
  const client = await pool.connect();
  try {
    const result = await client.query(
      'INSERT INTO users_3 (username, password, role) VALUES ($1, $2, $3) RETURNING *',
      [username, password, role] // Store plain-text password directly
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error registering user:', error);  // Debug information
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
    const result = await client.query('SELECT * FROM users_3 WHERE username = $1', [username]);
    if (result.rows.length === 0) return res.status(400).send('User not found');
    const user = result.rows[0];

    // Plain-text password comparison
    if (password !== user.password) return res.status(400).send('Incorrect password');
    
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);  // Debug information
    res.status(400).send('Error logging in');
  } finally {
    client.release();
  }
});

// Middleware to check token and role
const authenticate = (roles) => (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token required');
  
  jwt.verify(token.split(' ')[1], JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send('Invalid token');
    if (!roles.includes(decoded.role)) return res.status(403).send('Access denied');
    
    req.user = decoded;
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

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
