import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function ProductionReport() {
  return (
    <Container>
      <h2>Submit Daily Production Report</h2>
      <Form>
        <Form.Group controlId="productionVolume">
          <Form.Label>Production Volume (tons)</Form.Label>
          <Form.Control type="number" placeholder="Enter production volume" />
        </Form.Group>

        <Form.Group controlId="siteConditions">
          <Form.Label>Site Conditions</Form.Label>
          <Form.Control type="text" placeholder="Describe site conditions" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Report
        </Button>
      </Form>
    </Container>
  );
}

export default ProductionReport;
