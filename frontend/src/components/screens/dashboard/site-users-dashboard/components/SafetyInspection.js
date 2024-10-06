import React, { useState } from 'react';
import { Form, Button, Container, Nav, Table, Card, ListGroup } from 'react-bootstrap';

const SafetyInspection = () => {
  const [activeTab, setActiveTab] = useState('recordInspection');
  const [inspections, setInspections] = useState([]);
  const [inspectionData, setInspectionData] = useState({
    details: '',
  });
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInspection = {
      details: inspectionData.details,
      date: new Date().toLocaleString(),
      status: 'Pending', // or 'Passed'/'Failed' based on your criteria
    };
    setInspections([...inspections, newInspection]);
    setInspectionData({ details: '' });
  };

  // Render the record inspection form
  const renderRecordInspectionForm = () => (
    <Card>
      <Card.Header>Record Safety Inspection</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="inspectionDetails">
            <Form.Label>Inspection Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Describe safety check"
              value={inspectionData.details}
              onChange={(e) => setInspectionData({ ...inspectionData, details: e.target.value })}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit Inspection
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Render inspection history
  const renderInspectionHistory = () => (
    <Card>
      <Card.Header>Inspection History</Card.Header>
      <Card.Body>
        {inspections.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Inspection Details</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {inspections.map((inspection, index) => (
                <tr key={index}>
                  <td>{inspection.date}</td>
                  <td>{inspection.details}</td>
                  <td>{inspection.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <ListGroup>
            <ListGroup.Item>No inspections recorded yet.</ListGroup.Item>
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );

  // Render upcoming inspections (dummy data)
  const renderUpcomingInspections = () => (
    <Card>
      <Card.Header>Upcoming Inspections</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>Inspection for Equipment A - Due on 2024-10-15</ListGroup.Item>
          <ListGroup.Item>Inspection for Site B - Due on 2024-10-20</ListGroup.Item>
          <ListGroup.Item>Inspection for Equipment C - Due on 2024-11-01</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );

  // Render inspection summary
  const renderInspectionSummary = () => {
    const totalInspections = inspections.length;
    const passedInspections = inspections.filter(ins => ins.status === 'Passed').length;
    const failedInspections = inspections.filter(ins => ins.status === 'Failed').length;

    return (
      <Card>
        <Card.Header>Inspection Summary</Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>Total Inspections: {totalInspections}</ListGroup.Item>
            <ListGroup.Item>Passed Inspections: {passedInspections}</ListGroup.Item>
            <ListGroup.Item>Failed Inspections: {failedInspections}</ListGroup.Item>
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
          <Nav.Link eventKey="recordInspection">Record Inspection</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="inspectionHistory">Inspection History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="upcomingInspections">Upcoming Inspections</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="inspectionSummary">Inspection Summary</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Render content based on active tab */}
      <div className="mt-4">
        {activeTab === 'recordInspection' && renderRecordInspectionForm()}
        {activeTab === 'inspectionHistory' && renderInspectionHistory()}
        {activeTab === 'upcomingInspections' && renderUpcomingInspections()}
        {activeTab === 'inspectionSummary' && renderInspectionSummary()}
      </div>
    </Container>
  );
};

export default SafetyInspection;
