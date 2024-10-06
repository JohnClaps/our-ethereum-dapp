import React, { useState } from 'react';
import { Form, Button, Container, Nav, Card, ListGroup } from 'react-bootstrap';

const LogMineralExtraction = () => {
  const [activeTab, setActiveTab] = useState('log');
  const [extractionData, setExtractionData] = useState([]);
  const [mineralType, setMineralType] = useState('');
  const [extractionAmount, setExtractionAmount] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExtraction = {
      type: mineralType,
      amount: extractionAmount,
      date: new Date().toLocaleDateString(),
    };
    setExtractionData([...extractionData, newExtraction]);
    setMineralType('');
    setExtractionAmount('');
  };

  // Render form to log mineral extraction
  const renderLogForm = () => (
    <Card>
      <Card.Header>Log Mineral Extraction Data</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="mineralType">
            <Form.Label>Mineral Type</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter mineral type"
              value={mineralType}
              onChange={(e) => setMineralType(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="extractionAmount">
            <Form.Label>Amount Extracted (tons)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount extracted"
              value={extractionAmount}
              onChange={(e) => setExtractionAmount(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Render extraction history
  const renderExtractionHistory = () => (
    <Card>
      <Card.Header>History</Card.Header>
      <Card.Body>
        <ListGroup>
          {extractionData.length > 0 ? (
            extractionData.map((data, index) => (
              <ListGroup.Item key={index}>
                {data.date}: {data.amount} tons of {data.type}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>No extraction data available.</ListGroup.Item>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );

  // Render monthly summary
  const renderMonthlySummary = () => {
    const monthlySummary = extractionData.reduce((acc, curr) => {
      const month = new Date(curr.date).toLocaleString('default', { month: 'long' });
      acc[month] = (acc[month] || 0) + parseFloat(curr.amount);
      return acc;
    }, {});

    return (
      <Card>
        <Card.Header>Monthly Summary</Card.Header>
        <Card.Body>
          <ListGroup>
            {Object.entries(monthlySummary).map(([month, total], index) => (
              <ListGroup.Item key={index}>
                {month}: {total} tons
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  };

  // Render real-time monitoring (placeholder)
  const renderRealTimeMonitoring = () => (
    <Card>
      <Card.Header>Real-Time Monitoring</Card.Header>
      <Card.Body>
        <p>Ongoing extraction activities are monitored here (data not implemented).</p>
      </Card.Body>
    </Card>
  );

  // Render notifications (placeholder)
  const renderNotifications = () => (
    <Card>
      <Card.Header>Notifications</Card.Header>
      <Card.Body>
        <p>No current discrepancies reported.</p>
      </Card.Body>
    </Card>
  );

  // Render settings for notification preferences (placeholder)
  const renderSettings = () => (
    <Card>
      <Card.Header>Settings</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="notificationPreference">
            <Form.Label>Notification Preferences</Form.Label>
            <Form.Control as="select">
              <option>Email Notifications</option>
              <option>SMS Notifications</option>
              <option>App Notifications</option>
            </Form.Control>
          </Form.Group>
          <Button variant="success" className="mt-3">Save Settings</Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'log':
        return renderLogForm();
      case 'history':
        return renderExtractionHistory();
      case 'summary':
        return renderMonthlySummary();
      case 'monitoring':
        return renderRealTimeMonitoring();
      case 'notifications':
        return renderNotifications();
      case 'settings':
        return renderSettings();
      default:
        return renderLogForm();
    }
  };

  return (
    <Container className="mt-4">
      {/* Navigation bar */}
      <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="log">Log Extraction</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="history">Extraction History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="summary">Monthly Summary</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="monitoring">Real-Time Monitoring</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="notifications">Notifications</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="settings">Settings</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Render content based on active tab */}
      <div className="mt-4">
        {renderContent()}
      </div>
    </Container>
  );
};

export default LogMineralExtraction;
