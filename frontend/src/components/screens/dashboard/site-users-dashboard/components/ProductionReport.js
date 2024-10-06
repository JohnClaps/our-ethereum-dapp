import React, { useState } from 'react';
import { Form, Button, Container, Nav, Table, Card, ListGroup } from 'react-bootstrap';

const ProductionReport = () => {
  const [activeTab, setActiveTab] = useState('submitReport');
  const [reports, setReports] = useState([]);
  const [productionData, setProductionData] = useState({
    volume: '',
    conditions: '',
  });
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      volume: productionData.volume,
      conditions: productionData.conditions,
      date: new Date().toLocaleString(),
    };
    setReports([...reports, newReport]);
    setProductionData({ volume: '', conditions: '' });
  };

  // Render the submit report form
  const renderSubmitReportForm = () => (
    <Card>
      <Card.Header>Daily Production Report</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="productionVolume">
            <Form.Label>Production Volume (tons)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter production volume"
              value={productionData.volume}
              onChange={(e) => setProductionData({ ...productionData, volume: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group controlId="siteConditions">
            <Form.Label>Site Conditions</Form.Label>
            <Form.Control
              type="text"
              placeholder="Describe site conditions"
              value={productionData.conditions}
              onChange={(e) => setProductionData({ ...productionData, conditions: e.target.value })}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit Report
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Render previous reports
  const renderPreviousReports = () => (
    <Card>
      <Card.Header>Previous Production Reports</Card.Header>
      <Card.Body>
        {reports.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Production Volume (tons)</th>
                <th>Site Conditions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td>{report.date}</td>
                  <td>{report.volume}</td>
                  <td>{report.conditions}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <ListGroup>
            <ListGroup.Item>No previous reports submitted.</ListGroup.Item>
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );

  // Render report summary
  const renderReportSummary = () => {
    const totalVolume = reports.reduce((acc, report) => acc + parseFloat(report.volume), 0);
    const averageVolume = reports.length ? (totalVolume / reports.length).toFixed(2) : 0;

    return (
      <Card>
        <Card.Header>Report Summary</Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>Total Production Volume: {totalVolume} tons</ListGroup.Item>
            <ListGroup.Item>Average Production Volume: {averageVolume} tons</ListGroup.Item>
            <ListGroup.Item>Total Reports Submitted: {reports.length}</ListGroup.Item>
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
          <Nav.Link eventKey="submitReport">Submit Report</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="previousReports">Previous Reports</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="reportSummary">Report Summary</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Render content based on active tab */}
      <div className="mt-4">
        {activeTab === 'submitReport' && renderSubmitReportForm()}
        {activeTab === 'previousReports' && renderPreviousReports()}
        {activeTab === 'reportSummary' && renderReportSummary()}
      </div>
    </Container>
  );
};

export default ProductionReport;
