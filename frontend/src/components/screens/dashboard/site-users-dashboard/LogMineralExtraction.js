import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function LogMineralExtraction() {
  return (
    <Container>
      <h2>Log Mineral Extraction Data</h2>
      <Form>
        <Form.Group controlId="mineralType">
          <Form.Label>Mineral Type</Form.Label>
          <Form.Control type="text" placeholder="Enter mineral type" />
        </Form.Group>

        <Form.Group controlId="extractionAmount">
          <Form.Label>Amount Extracted (tons)</Form.Label>
          <Form.Control type="number" placeholder="Enter amount extracted" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default LogMineralExtraction;
