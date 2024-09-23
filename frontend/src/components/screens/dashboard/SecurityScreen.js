import React from 'react';
import { Card, Row, Col, Container, Table, Button } from 'react-bootstrap';
import { FaShieldAlt, FaHistory, FaExclamationTriangle } from 'react-icons/fa';
import './styles/SecurityScreen.css';

const SecurityScreen = () => {
  return (
    <div className="security-screen">
      <Container fluid>
        <h3 className="text-center mb-4">Security Management</h3>
        
        {/* Security Settings */}
        <Row className="mb-4">
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaShieldAlt size={24} className="me-2" />
                  Security Settings
                </Card.Title>
                <Button variant="primary" className="me-2">Change Password</Button>
                <Button variant="secondary">Two-Factor Authentication</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Audit Logs */}
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaHistory size={24} className="me-2" />
                  Audit Logs
                </Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Event ID</th>
                      <th>Date</th>
                      <th>User</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Replace with dynamic data */}
                    <tr>
                      <td>1</td>
                      <td>2024-09-01</td>
                      <td>admin</td>
                      <td>Logged in</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2024-09-02</td>
                      <td>user1</td>
                      <td>Changed password</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Security Alerts */}
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-danger mb-4">
                  <FaExclamationTriangle size={24} className="me-2" />
                  Recent Security Alerts
                </Card.Title>
                <ul>
                  <li>Failed login attempt from IP 192.168.1.1</li>
                  <li>Unusual activity detected on account admin</li>
                  <li>Two-Factor Authentication enabled for user1</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecurityScreen;
