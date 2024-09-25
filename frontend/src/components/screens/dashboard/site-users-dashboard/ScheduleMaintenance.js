import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function ScheduleMaintenance() {
  return (
    <Container>
      <h2>Schedule Equipment Maintenance</h2>
      <Form>
        <Form.Group controlId="equipmentID">
          <Form.Label>Equipment ID</Form.Label>
          <Form.Control type="text" placeholder="Enter equipment ID" />
        </Form.Group>

        <Form.Group controlId="maintenanceDate">
          <Form.Label>Maintenance Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Schedule Maintenance
        </Button>
      </Form>
    </Container>
  );
}

export default ScheduleMaintenance;
