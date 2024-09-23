import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { FaTools, FaWrench, FaHammer, FaCog, FaCheckCircle } from 'react-icons/fa';
import "./styles/MaintenanceScreen.css";

const MaintenanceScreen = () => {
  const maintenanceTasks = [
    { id: 1, title: 'Routine Checks', description: 'Perform routine system checks and diagnostics.', icon: <FaTools size={24} /> },
    { id: 2, title: 'Software Updates', description: 'Apply software updates and patches to ensure system security.', icon: <FaWrench size={24} /> },
    { id: 3, title: 'Hardware Inspection', description: 'Inspect and maintain hardware components for optimal performance.', icon: <FaHammer size={24} /> },
    { id: 4, title: 'Configuration Management', description: 'Manage and update system configurations as needed.', icon: <FaCog size={24} /> },
    { id: 5, title: 'System Health Check', description: 'Run health checks and ensure all systems are operating correctly.', icon: <FaCheckCircle size={24} /> },
  ];

  return (
    <div className="maintenance-screen">
      <Container fluid>
        <Card>
        <h3 className="text-center mb-4">System Maintenance Tasks</h3>
        </Card>
        <br></br>
         <Row>
          {maintenanceTasks.map(task => (
            <Col md={4} key={task.id}>
              <Card className="mb-4 shadow-sm maintenance-card">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    {task.icon}
                    <Card.Title className="ms-3">{task.title}</Card.Title>
                  </div>
                    <Card.Text>
                    {task.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MaintenanceScreen;
