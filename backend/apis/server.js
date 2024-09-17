const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bbmtms-db',
  password: '1234@johnclaps',
  port: 5432,
});

app.use(express.json());

app.post('/submit', async (req, res) => {
  const { ipfsHash, username, metamaskId, phoneNumber, licenseNumber } = req.body;

  try {
    await pool.query(
      'INSERT INTO users (ipfs_hash, username, metamask_id, phone_number, license_number) VALUES ($1, $2, $3, $4, $5)',
      [ipfsHash, username, metamaskId, phoneNumber, licenseNumber]
    );
    res.status(200).send('Registration successful');
  } catch (error) {
    console.error('Error creating an account:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
