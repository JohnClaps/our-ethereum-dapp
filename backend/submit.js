const http = require('http');
const { Client } = require('pg');
const url = require('url');

const client = new Client({
  host: 'localhost',
  user: 'postgres', // replace with your PostgreSQL user
  password: 'db-pswd24@mw', // replace with your PostgreSQL password
  database: 'postgres', // replace with your PostgreSQL database
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error('Failed to connect to PostgreSQL', err.stack);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    // Collect the data sent by the client
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const formData = JSON.parse(body); // Parse the incoming JSON data

      const { username, metamaskId, phoneNumber, licenseNumber } = formData;

      // SQL query to insert data into PostgreSQL
      const query = `
        INSERT INTO users (username, metamask_id, phone_number, license_number)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;
      const values = [username, metamaskId, phoneNumber, licenseNumber];

      try {
        const result = await client.query(query, values);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Data inserted successfully', user: result.rows[0] }));
      } catch (err) {
        console.error(err.stack);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to insert data' }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
