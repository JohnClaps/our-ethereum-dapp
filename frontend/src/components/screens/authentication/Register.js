import React, { useState } from 'react';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

// Component for the registration screen
const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (!name || !email || !address) {
      setError('All fields are required.');
      return;
    }

    // Perform registration logic (e.g., send data to backend API)
    try {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, address }),
      });

      if (response.ok) {
        setSuccess('Registration successful!');
        // Clear form fields
        setName('');
        setEmail('');
        setAddress('');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">User Registration</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Wallet Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your wallet address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
