import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

function LicensePermits() {
  return (
    <Container>
      <h2>Mining Licenses and Permits</h2>
      <ListGroup>
        <ListGroup.Item>License #12345 - Active</ListGroup.Item>
        <ListGroup.Item>Permit #67890 - Expiring Soon</ListGroup.Item>
        <ListGroup.Item>License #54321 - Pending Renewal</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default LicensePermits;
