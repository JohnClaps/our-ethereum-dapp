import React from 'react';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';
import {  FaUser, FaLock, FaBell, FaLanguage } from 'react-icons/fa';
import './styles/SettingsScreen.css';

const SettingsScreen = () => {
  return (
    <div className="settings-page">
      <card>
        <h3 className="text-center mb-4">System Settings</h3>
      </card>
      <br></br>
      <Container fluid>
        <Row>
          <Col md={6}>
            <Card className="shadow-sm mb-4 settings-card">
              <Card.Body>
                <Card.Title className="text-primary">
                  <FaUser size={24} className="me-2" />
                  Account Settings
                </Card.Title>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                  </Form.Group>
                  <Button variant="primary" type="submit">Save Changes</Button>
                </Form>
                    <Form.Control type="password" placeholder="Password" />
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card className="shadow-sm mb-4 settings-card">
              <Card.Body>
                <Card.Title className="text-primary">
                  <FaLock size={24} className="me-2" />
                  Security Settings
                </Card.Title>
                <Form>
                  <Form.Group controlId="formTwoFactorAuth">
                    <Form.Check type="checkbox" label="Enable Two-Factor Authentication" />
                  </Form.Group>
                  <Form.Group controlId="formChangePassword">
                    <Form.Label>Change Password</Form.Label>
                    <Form.Control type="password" placeholder="New Password" />
                    <Form.Control type="password" placeholder="Confirm Password" className="mt-2" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Update Security</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <Card className="shadow-sm mb-4 settings-card">
              <Card.Body>
                <Card.Title className="text-primary">
                  <FaBell size={24} className="me-2" />
                  Notification Settings
                </Card.Title>
                <Form>
                  <Form.Group controlId="formEmailNotifications">
                    <Form.Check type="checkbox" label="Email Notifications" />
                  </Form.Group>
                  <Form.Group controlId="formSmsNotifications">
                    <Form.Check type="checkbox" label="SMS Notifications" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Save Notifications</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card className="shadow-sm mb-4 settings-card">
              <Card.Body>
                <Card.Title className="text-primary">
                  <FaLanguage size={24} className="me-2" />
                  Language Settings
                </Card.Title>
                <Form>
                  <Form.Group controlId="formLanguageSelect">
                    <Form.Label>Select Language</Form.Label>
                    <Form.Control as="select">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      {/* Add more languages as needed */}
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary" type="submit">Save Language</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SettingsScreen;
