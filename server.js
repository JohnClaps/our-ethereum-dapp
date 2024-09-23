const { Client } = require('pg');
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "db-pswd24@mw",
  database: "postgres"
});

client.connect();

const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateStep()) {
    try {
      // Insert form data into PostgreSQL database
      const query = 'INSERT INTO users (username, metamask_id, phone_number, license_number) VALUES ($1, $2, $3, $4)';
      const values = [
        formData.username,
        formData.metamaskId,
        formData.phoneNumber,
        formData.licenseNumber
      ];

      const res = await client.query(query, values);
      console.log("Data inserted successfully", res);

      // Assuming this is your response handler logic
      console.log("Account created successfully");
    } catch (error) {
      console.error("Failed to insert data into the database:", error);
    }
  }
};

// Close the connection after handling requests
client.end();

// const express = require('express');
// const cors = require('cors');
// const { Client } = require('pg');
// const bodyParser = require('body-parser');

// // const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // PostgreSQL Client Setup
// const client = new Client({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "db-pswd24@mw",
//   database: "postgres"
// });

// client.connect();

// // POST Route to handle form submission
// app.post('/submit', async (req, res) => {
//   const { username, metamaskId, phoneNumber, licenseNumber } = req.body;

//   const query = 'INSERT INTO users (username, metamask_id, phone_number, license_number) VALUES ($1, $2, $3, $4)';
//   const values = [username, metamaskId, phoneNumber, licenseNumber];

//   try {
//     await client.query(query, values);
//     res.status(200).send("Data inserted successfully");
//   } catch (error) {
//     console.error("Failed to insert data into the database:", error);
//     res.status(500).send("Error inserting data");
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
