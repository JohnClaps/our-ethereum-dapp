import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(''); // Added OTP state
  const [isOtpSent, setIsOtpSent] = useState(false); // To track if OTP is sent
  const [error, setError] = useState('');
  const [temporaryToken, setTemporaryToken] = useState(''); // Temporarily store token after login
  const navigate = useNavigate();

  // Handle login and OTP sending
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // First step: user logs in with username and password
      const response = await axios.post('http://localhost:4000/login', { username, password });
      
      // If login successful, store the temporary token and indicate OTP is sent
      const { message } = response.data;
      setTemporaryToken(response.data.token); // Store token temporarily
      setIsOtpSent(true); // OTP has been sent
      setError(''); // Clear any previous errors
      console.log(message); // Log OTP sent message (simulate SMS sending)
    } catch (err) {
      setError('Login failed. Please check your username and password.');
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      // Second step: Verify the OTP
      const response = await axios.post('http://localhost:4000/verify-otp', {
        username,
        otp,
      });
      
      const { token } = response.data; // Get the final token after OTP verification
      localStorage.setItem('token', token); // Store token in localStorage

      // Decode JWT to get user role
      const userRole = JSON.parse(atob(token.split('.')[1])).role;

      // Redirect based on role
      if (userRole === 'admin') navigate('/admin');
      else if (userRole === 'user') navigate('/user');
      else if (userRole === 'verifier') navigate('/verifier');
    } catch (err) {
      setError('OTP verification failed.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={4}>
          <div className="p-4 border rounded">
            <h1 className="text-center mb-4">Signin</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {!isOtpSent ? (
              // First step: Login form (username and password)
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Signin
                </Button>
              </Form>
            ) : (
              // Second step: OTP verification form
              <Form onSubmit={handleVerifyOtp}>
                <Form.Group controlId="formOtp" className="mb-3">
                  <Form.Label>Enter OTP sent to your phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Verify OTP
                </Button>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
