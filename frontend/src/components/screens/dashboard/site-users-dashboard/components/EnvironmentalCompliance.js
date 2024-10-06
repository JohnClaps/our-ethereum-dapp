import React, { useState } from 'react';
import { Table, Container, Nav, Button, Form, Card, Row, Col } from 'react-bootstrap';

const EnvironmentalCompliance = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const complianceData = [
    { parameter: 'Air Quality', value: 'Good', status: 'Within Limits' },
    { parameter: 'Water Usage', value: '85% capacity', status: 'Within Limits' },
    { parameter: 'Waste Management', value: '5 tons', status: 'Exceeded Limits' },
    { parameter: 'Emissions', value: 'Low', status: 'Within Limits' }
  ];

  const auditHistory = [
    { date: '2023-01-01', auditType: 'Air Quality', result: 'Compliant' },
    { date: '2023-02-15', auditType: 'Water Usage', result: 'Compliant' },
    { date: '2023-03-20', auditType: 'Waste Management', result: 'Non-Compliant' }
  ];

  const filteredData = complianceData.filter(data =>
    data.parameter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Tab content for Overview
  const renderOverview = () => (
    <Card>
      <Card.Header>Compliance Overview</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {complianceData.map((data, index) => (
              <tr key={index}>
                <td>{data.parameter}</td>
                <td>{data.value}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  // Tab content for Audit History
  const renderAuditHistory = () => (
    <Card>
      <Card.Header>Audit History</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Audit Type</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {auditHistory.map((audit, index) => (
              <tr key={index}>
                <td>{audit.date}</td>
                <td>{audit.auditType}</td>
                <td>{audit.result}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  // Tab content for Reports
  const renderReports = () => (
    <Card>
      <Card.Header>Generate Reports</Card.Header>
      <Card.Body>
        <Button variant="primary" className="mt-2">Generate Compliance Report</Button>
        <Button variant="warning" className="mt-2 ms-2">Generate Non-Compliance Report</Button>
      </Card.Body>
    </Card>
  );

  // Tab content for Settings
  const renderSettings = () => (
    <Card>
      <Card.Header>Settings</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="airQualityThreshold">
            <Form.Label>Air Quality Threshold</Form.Label>
            <Form.Control type="text" placeholder="Enter threshold value" />
          </Form.Group>
          <Form.Group controlId="waterUsageThreshold" className="mt-3">
            <Form.Label>Water Usage Threshold</Form.Label>
            <Form.Control type="text" placeholder="Enter threshold value" />
          </Form.Group>
          <Button variant="success" className="mt-3">Save Settings</Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'audit':
        return renderAuditHistory();
      case 'reports':
        return renderReports();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {/* Navigation bar */}
          <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="overview">Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="audit">Audit History</Nav.Link>
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

export default EnvironmentalCompliance;
