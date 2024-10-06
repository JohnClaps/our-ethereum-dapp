// import React from 'react';
// import { ListGroup, Container } from 'react-bootstrap';

// function LicensePermits() {
//   return (
//     <Container>
//       <h2>Mining Licenses and Permits</h2>
//       <ListGroup>
//         <ListGroup.Item>License #12345 - Active</ListGroup.Item>
//         <ListGroup.Item>Permit #67890 - Expiring Soon</ListGroup.Item>
//         <ListGroup.Item>License #54321 - Pending Renewal</ListGroup.Item>
//       </ListGroup>
//     </Container>
//   );
// }

// export default LicensePermits;

import React, { useState } from 'react';
import { Container, ListGroup, Nav, Card, Button, Form } from 'react-bootstrap';

const LicensePermits = () => {
  const [activeTab, setActiveTab] = useState('licenses');
  const [licenses] = useState([
    { id: 'License #12345', status: 'Active', expiry: '2025-09-15' },
    { id: 'Permit #67890', status: 'Expiring Soon', expiry: '2024-11-01' },
    { id: 'License #54321', status: 'Pending Renewal', expiry: '2023-12-31' },
  ]);

  // Render licenses and permits list
  const renderLicenses = () => (
    <Card>
      <Card.Header>Mining Licenses and Permits</Card.Header>
      <Card.Body>
        <ListGroup>
          {licenses.map((license, index) => (
            <ListGroup.Item key={index}>
              {license.id} - {license.status} (Expires: {license.expiry})
              {license.status === 'Expiring Soon' && <Button className="ms-2" variant="warning">Renew Now</Button>}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );

  // Render license renewal form
  const renderRenewal = () => (
    <Card>
      <Card.Header>License Renewal</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="licenseSelect">
            <Form.Label>Select License to Renew</Form.Label>
            <Form.Control as="select">
              <option>Select License</option>
              {licenses.map((license, index) => (
                <option key={index}>{license.id}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="success" className="mt-3">Submit Renewal</Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Render license history
  const renderHistory = () => (
    <Card>
      <Card.Header>License History</Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>License #12345 - Issued: 2020-09-15 (Renewed)</ListGroup.Item>
          <ListGroup.Item>License #54321 - Issued: 2018-01-20 (Expired)</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );

  // Render alerts for license expiry
  const renderAlerts = () => (
    <Card>
      <Card.Header>Expiry Alerts</Card.Header>
      <Card.Body>
        <ListGroup>
          {licenses
            .filter((license) => license.status === 'Expiring Soon')
            .map((license, index) => (
              <ListGroup.Item key={index} variant="warning">
                {license.id} is expiring on {license.expiry}. <Button variant="warning" className="ms-2">Renew Now</Button>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );

  // Render settings for notification preferences
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
      case 'licenses':
        return renderLicenses();
      case 'renewal':
        return renderRenewal();
      case 'history':
        return renderHistory();
      case 'alerts':
        return renderAlerts();
      case 'settings':
        return renderSettings();
      default:
        return renderLicenses();
    }
  };

  return (
    <Container className="mt-4">
      {/* Navigation bar */}
      <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="licenses">Licenses and Permits</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="renewal">Renew License</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="history">License History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="alerts">Expiry Alerts</Nav.Link>
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

export default LicensePermits;
