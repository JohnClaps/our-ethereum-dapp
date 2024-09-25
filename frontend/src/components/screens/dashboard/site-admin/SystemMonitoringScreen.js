import React from 'react';
import { Card, Row, Col, Container, Table, ProgressBar } from 'react-bootstrap';
import { FaHeartbeat, FaServer, FaBell} from 'react-icons/fa';
// import './SystemMonitoringScreen.css'; // Assuming you have a CSS file for custom styles

const SystemMonitoringScreen = () => {
  return (
    <div className="system-monitoring-screen">
      <Container fluid>
        <h3 className="text-center mb-4">System Monitoring</h3>

        {/* System Metrics */}
        <Row className="mb-4">
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaHeartbeat size={24} className="me-2" />
                  System Health
                </Card.Title>
                <ProgressBar now={80} label="CPU Usage 80%" variant="success" className="mb-3" />
                <ProgressBar now={60} label="Memory Usage 60%" variant="info" className="mb-3" />
                <ProgressBar now={70} label="Disk Usage 70%" variant="warning" />
              </Card.Body>
            </Card>
          </Col>

          {/* Server Status */}
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaServer size={24} className="me-2" />
                  Server Status
                </Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Server ID</th>
                      <th>Status</th>
                      <th>Uptime</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Replace with dynamic data */}
                    <tr>
                      <td>1</td>
                      <td>Online</td>
                      <td>99.9%</td>
                      <td>Restart</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Recent Alerts */}
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-danger mb-4">
                  <FaBell size={24} className="me-2" />
                  Recent Alerts
                </Card.Title>
                <ul>
                  <li>High CPU usage detected on server 1</li>
                  <li>Disk space running low on server 2</li>
                  <li>Memory usage exceeded threshold on server 3</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SystemMonitoringScreen;
