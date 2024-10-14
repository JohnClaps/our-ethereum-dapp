// routes/userRoutes.js
const express = require('express');
const router = express.Router();
// Access the database pool from the main app
const db = require('../server') // Adjust the path to where your server file is located

// Fetch all users
router.get('/manage_users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM manage_users');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Add a new user
router.post('/manage_users', async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO manage_users (name, email, role) VALUES ($1, $2, $3) RETURNING *',
      [name, email, role]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Update an existing user
router.put('/manage_users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  try {
    const result = await db.query(
      'UPDATE manage_users SET name = $1, email = $2, role = $3 WHERE id = $4 RETURNING *',
      [name, email, role, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Delete (archive) a user
router.delete('/manage_users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM manage_users WHERE id = $1', [id]);
    res.status(204).send(); // No content to return
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
