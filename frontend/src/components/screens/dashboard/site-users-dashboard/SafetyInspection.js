import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function SafetyInspection() {
  return (
    <Container>
      <h2>Record Safety Inspection</h2>
      <Form>
        <Form.Group controlId="inspectionDetails">
          <Form.Label>Inspection Details</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Describe safety check" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Inspection
        </Button>
      </Form>
    </Container>
  );
}

export default SafetyInspection;
