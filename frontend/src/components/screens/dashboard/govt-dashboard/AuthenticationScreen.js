import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const AuthenticationScreen = () => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add logic for authentication
    console.log('User authenticated');
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Card>
            <Card.Header>Verify User Identity</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formUserID">
                  <Form.Label>User ID</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter user ID" 
                    value={userID} 
                    onChange={(e) => setUserID(e.target.value)} 
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleLogin}>
                  Authenticate
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthenticationScreen;
