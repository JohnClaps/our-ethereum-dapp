import React from 'react';
import { Card, ListGroup, Col } from 'react-bootstrap';
import { FaBell, FaChartBar, FaUser, FaCog } from 'react-icons/fa';

const RightPane = () => {
  return (
    <Col xs={2} className="bg-secondary text-white p-3 vh-100">
      <h2>Right Pane</h2>
      <Card className="mb-3 bg-dark text-white">
        <Card.Body>
          <Card.Title>Notifications</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-dark text-white">
              <FaBell size={20} className="me-2" />
              New user registered
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white">
              <FaBell size={20} className="me-2" />
              System update available
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Card className="mb-3 bg-dark text-white">
        <Card.Body>
          <Card.Title>Statistics</Card.Title>
          <div className="d-flex justify-content-between">
            <div>
              <FaChartBar size={24} />
              <p>System Uptime</p>
              <p>99.99%</p>
            </div>
            <div>
              <FaChartBar size={24} />
              <p>Users Online</p>
              <p>123</p>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card className="mb-3 bg-dark text-white">
        <Card.Body>
          <Card.Title>Quick Links</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-dark text-white">
              <FaUser size={20} className="me-2" />
              User Management
            </ListGroup.Item>
            <ListGroup.Item className="bg-dark text-white">
              <FaCog size={20} className="me-2" />
              Settings
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RightPane;
