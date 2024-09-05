// import React from 'react';
// import { Container, ListGroup, Button } from 'react-bootstrap';
// // import { Ionicons } from '@expo/vector-icons';

// const MaintenanceScreen = ({ onOptionSelect }) => {
//   return (
//     <Container className="pt-4">
//       {/* Header */}
//       <h2 className="text-success mb-4">Maintenance</h2>

//       {/* Maintenance Options */}
//       <ListGroup variant="flush">
//         <OptionButton
//           iconName="calendar-outline"
//           label="Scheduled Tasks"
//           onPress={() => onOptionSelect('Scheduled Tasks')}
//         />
//         <OptionButton
//           iconName="cog-outline"
//           label="Equipment Check"
//           onPress={() => onOptionSelect('Equipment Check')}
//         />
//         <OptionButton
//           iconName="document-text-outline"
//           label="Maintenance Logs"
//           onPress={() => onOptionSelect('Maintenance Logs')}
//         />
//         <OptionButton
//           iconName="bar-chart-outline"
//           label="Reports"
//           onPress={() => onOptionSelect('Reports')}
//         />
//         <OptionButton
//           iconName="alert-circle-outline"
//           label="Alerts"
//           onPress={() => onOptionSelect('Alerts')}
//         />
//       </ListGroup>

//       {/* Contact Support Button */}
//       <Button
//         variant="primary"
//         className="mt-4 d-flex align-items-center"
//         onClick={() => onOptionSelect('Contact Support')}
//       >
//         {/* <Ionicons name="help-circle-outline" size={24} color="white" /> */}
//         <span className="ms-2">Contact Support</span>
//       </Button>
//     </Container>
//   );
// };

// // Reusable OptionButton Component
// const OptionButton = ({ iconName, label, onPress }) => (
//   <ListGroup.Item action onClick={onPress} className="d-flex align-items-center">
//     {/* <Ionicons name={iconName} size={24} color="#004D40" /> */}
//     <span className="ms-3">{label}</span>
//   </ListGroup.Item>
// );

// export default MaintenanceScreen;


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
        <h3 className="text-center mb-4">System Maintenance Tasks</h3>
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
