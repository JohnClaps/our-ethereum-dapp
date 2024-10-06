import React, { useState } from 'react';
import { Form, Button, Container, Nav, Table, Card, ListGroup } from 'react-bootstrap';

const ScheduleMaintenance = () => {
  const [activeTab, setActiveTab] = useState('scheduleMaintenance');
  const [maintenanceRecords, setMaintenanceRecords] = useState([]);
  const [maintenanceData, setMaintenanceData] = useState({
    equipmentID: '',
    maintenanceDate: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMaintenance = {
      equipmentID: maintenanceData.equipmentID,
      date: maintenanceData.maintenanceDate,
      status: 'Scheduled',
    };
    setMaintenanceRecords([...maintenanceRecords, newMaintenance]);
    setMaintenanceData({ equipmentID: '', maintenanceDate: '' });
  };

  // Render the schedule maintenance form
  const renderScheduleMaintenanceForm = () => (
    <Card>
      <Card.Header>Schedule Equipment Maintenance</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="equipmentID">
            <Form.Label>Equipment ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter equipment ID"
              value={maintenanceData.equipmentID}
              onChange={(e) => setMaintenanceData({ ...maintenanceData, equipmentID: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group controlId="maintenanceDate">
            <Form.Label>Maintenance Date</Form.Label>
            <Form.Control
              type="date"
              value={maintenanceData.maintenanceDate}
              onChange={(e) => setMaintenanceData({ ...maintenanceData, maintenanceDate: e.target.value })}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Schedule Maintenance
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Render maintenance history
  const renderMaintenanceHistory = () => (
    <Card>
      <Card.Header>Maintenance History</Card.Header>
      <Card.Body>
        {maintenanceRecords.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Equipment ID</th>
                <th>Maintenance Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.equipmentID}</td>
                  <td>{record.date}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <ListGroup>
            <ListGroup.Item>No maintenance records found.</ListGroup.Item>
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );

  // Render upcoming maintenance (dummy data)
  const renderUpcomingMaintenance = () => (
    <Card>
      <Card.Header>Upcoming Maintenance</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>Excavator #1 - Scheduled on 2024-10-15</ListGroup.Item>
          <ListGroup.Item>Drill #2 - Scheduled on 2024-10-20</ListGroup.Item>
          <ListGroup.Item>Loader #3 - Scheduled on 2024-11-01</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );

  // Render maintenance summary
  const renderMaintenanceSummary = () => {
    const totalScheduled = maintenanceRecords.length;
    const completedMaintenances = 0; // Replace with actual logic to count completed maintenances

    return (
      <Card>
        <Card.Header>Maintenance Summary</Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>Total Scheduled: {totalScheduled}</ListGroup.Item>
            <ListGroup.Item>Completed: {completedMaintenances}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container className="mt-4">
      {/* Navigation bar */}
      <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="scheduleMaintenance">Schedule Maintenance</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="maintenanceHistory">Maintenance History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="upcomingMaintenance">Upcoming Maintenance</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="maintenanceSummary">Maintenance Summary</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Render content based on active tab */}
      <div className="mt-4">
        {activeTab === 'scheduleMaintenance' && renderScheduleMaintenanceForm()}
        {activeTab === 'maintenanceHistory' && renderMaintenanceHistory()}
        {activeTab === 'upcomingMaintenance' && renderUpcomingMaintenance()}
        {activeTab === 'maintenanceSummary' && renderMaintenanceSummary()}
      </div>
    </Container>
  );
};

export default ScheduleMaintenance;
