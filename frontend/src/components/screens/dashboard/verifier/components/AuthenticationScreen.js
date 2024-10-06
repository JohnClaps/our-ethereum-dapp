import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert, Spinner, Nav } from 'react-bootstrap';

const AuthenticationScreen = () => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState('authentication'); // State to manage active tab

  const handleLogin = () => {
    if (!userID || !password) {
      setError('Please fill in both fields.');
      return;
    }
    setError('');
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      if (userID === 'admin' && password === '12345') {
        console.log('User authenticated');
        // Proceed to dashboard or next step
      } else {
        setError('Invalid User ID or Password');
      }
    }, 1500);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'authentication':
        return (
          <Card>
            <Card.Header>Verify User Identity</Card.Header>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
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

                <Form.Group controlId="formRememberMe">
                  <Form.Check
                    type="checkbox"
                    label="Remember Me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleLogin} disabled={isLoading}>
                  {isLoading ? <Spinner animation="border" size="sm" /> : 'Authenticate'}
                </Button>
              </Form>

              <div className="mt-3">
                <a href="#">Forgot Password?</a>
              </div>
            </Card.Body>
          </Card>
        );
      case 'profile':
        return (
          <Card>
            <Card.Header>User Profile</Card.Header>
            <Card.Body>
              <p>Here, users can update their profile information such as email, phone number, and more.</p>
              {/* Add Profile Management form here */}
            </Card.Body>
          </Card>
        );
      case '2fa':
        return (
          <Card>
            <Card.Header>Two-Factor Authentication (2FA)</Card.Header>
            <Card.Body>
              <p>Enable or disable two-factor authentication for added security.</p>
              <Form.Check 
                type="switch"
                id="2fa-switch"
                label="Enable 2FA"
              />
              {/* Add more 2FA options here */}
            </Card.Body>
          </Card>
        );
      case 'security':
        return (
          <Card>
            <Card.Header>Security Settings</Card.Header>
            <Card.Body>
              <p>Manage security settings, including password changes and activity logs.</p>
              {/* Add security settings options here */}
            </Card.Body>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="8">
          {/* Horizontal Navigation Bar */}
          <Nav variant="tabs" activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
            <Nav.Item>
              <Nav.Link eventKey="authentication">User Authentication</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="profile">User Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2fa">2FA</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="security">Security</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Render Content Based on Active Tab */}
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default AuthenticationScreen;
