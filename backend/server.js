const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Wallet } = require('ethers');
const port = 4000;
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  database: 'off_chain_db',
  host: 'localhost',
  password: 'new_pass1234',
  port: 5432,
});

// API route to handle form submissions
app.post('/submit', async (req, res) => {
  const { username, walletId, email, phoneNumber, password } = req.body;

  // Basic validation
  if (!username || !walletId || !email || !phoneNumber || !password) {
    return res.status(400).send('All fields are required');
  }

  try {
    const query = 'INSERT INTO users(username, wallet_id, email, phone_number, password) VALUES($1, $2, $3, $4, $5)';
    
    // Insert data into the database
    await pool.query(query, [username, walletId, email, phoneNumber, password]);
    res.status(200).send('Data inserted successfully');
    
  } catch (err) {
    // Log the error message for debugging purposes
    console.error('Database error:', err.message); // Change here to log only the error message

    // Handle specific PostgreSQL errors
    if (err.code === '23505') { // Unique violation error
      return res.status(409).send('User with this username or email already exists');
    }

    // General error handling
    res.status(500).send('Server error');
  }
});

// Start server
app.listen(4000, () => {
  console.log('Server running on port',port);
});
