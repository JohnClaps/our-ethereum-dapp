import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios"; // Import Axios
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    walletId: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/submit', formData); // Use Axios to make the POST request

      if (response.status === 200) {
        alert("Account created successfully");
        setFormData({
          username: "",
          walletId: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: ""
        }); // Reset form after successful submission
      }
    } catch (error) {
      console.error("Failed to register successfully:", error);
      // Check if the error has a response from the server
      if (error.response) {
        alert(`Failed to create an account: ${error.response.data.message || 'Unknown error'}`);
      } else {
        alert("An error occurred while creating your account. Please try again.");
      }
    }
  };

  return (
    <Container>
      <h3>Create an Account</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formWalletId">
          <Form.Label>Wallet ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your wallet ID"
            name="walletId"
            value={formData.walletId}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

