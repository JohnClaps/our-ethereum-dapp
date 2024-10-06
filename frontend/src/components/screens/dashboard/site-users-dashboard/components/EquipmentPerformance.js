// import React from 'react';
// import { Table, Container } from 'react-bootstrap';

// function EquipmentPerformance() {
//   return (
//     <Container>
//       <h2>Monitor Equipment Performance</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Equipment</th>
//             <th>Status</th>
//             <th>Efficiency</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Excavator #1</td>
//             <td>Operational</td>
//             <td>95%</td>
//           </tr>
//           <tr>
//             <td>Drill #2</td>
//             <td>Needs Maintenance</td>
//             <td>75%</td>
//           </tr>
//         </tbody>
//       </Table>
//     </Container>
//   );
// }

// export default EquipmentPerformance;

import React, { useState } from 'react';
import { Table, Container, Nav, Card, Row, Col, Button, Form } from 'react-bootstrap';

const EquipmentPerformance = () => {
  const [activeTab, setActiveTab] = useState('monitor');
  const [equipmentPerformance] = useState([
    { equipment: 'Excavator #1', status: 'Operational', efficiency: '95%' },
    { equipment: 'Drill #2', status: 'Needs Maintenance', efficiency: '75%' }
  ]);

  // Tab content for Monitoring Equipment Performance
  const renderMonitoring = () => (
    <Card>
      <Card.Header>Monitor Equipment Performance</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Equipment</th>
              <th>Status</th>
              <th>Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {equipmentPerformance.map((data, index) => (
              <tr key={index}>
                <td>{data.equipment}</td>
                <td>{data.status}</td>
                <td>{data.efficiency}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  // Tab content for Historical Performance Data
  const renderHistoricalData = () => (
    <Card>
      <Card.Header>Historical Performance Data</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Equipment</th>
              <th>Date</th>
              <th>Efficiency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Excavator #1</td>
              <td>2023-09-25</td>
              <td>94%</td>
            </tr>
            <tr>
              <td>Drill #2</td>
              <td>2023-09-25</td>
              <td>76%</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  // Tab content for Scheduling Maintenance
  const renderMaintenance = () => (
    <Card>
      <Card.Header>Schedule Maintenance</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="equipmentID">
            <Form.Label>Equipment</Form.Label>
            <Form.Control as="select">
              <option>Select equipment</option>
              <option>Excavator #1</option>
              <option>Drill #2</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="maintenanceDate" className="mt-3">
            <Form.Label>Maintenance Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Button variant="primary" className="mt-3">Schedule</Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Tab content for Reports
  const renderReports = () => (
    <Card>
      <Card.Header>Generate Reports</Card.Header>
      <Card.Body>
        <Button variant="success" className="mt-2">Generate Efficiency Report</Button>
        <Button variant="warning" className="mt-2 ms-2">Generate Maintenance Report</Button>
      </Card.Body>
    </Card>
  );

  // Tab content for Settings
  const renderSettings = () => (
    <Card>
      <Card.Header>Settings</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="efficiencyThreshold">
            <Form.Label>Efficiency Alert Threshold</Form.Label>
            <Form.Control type="number" placeholder="Enter efficiency threshold (%)" />
          </Form.Group>
          <Form.Group controlId="notificationSettings" className="mt-3">
            <Form.Label>Notification Settings</Form.Label>
            <Form.Control as="select">
              <option>Select notification preference</option>
              <option>Email</option>
              <option>SMS</option>
              <option>App Notification</option>
            </Form.Control>
          </Form.Group>
          <Button variant="success" className="mt-3">Save Settings</Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'monitor':
        return renderMonitoring();
      case 'history':
        return renderHistoricalData();
      case 'maintenance':
        return renderMaintenance();
      case 'reports':
        return renderReports();
      case 'settings':
        return renderSettings();
      default:
        return renderMonitoring();
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {/* Navigation bar */}
          <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="monitor">Monitor Performance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="history">Historical Data</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="maintenance">Schedule Maintenance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reports">Reports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="settings">Settings</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {/* Render content based on active tab */}
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default EquipmentPerformance;
