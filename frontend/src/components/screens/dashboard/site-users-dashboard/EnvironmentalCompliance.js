import React from 'react';
import { Table, Container } from 'react-bootstrap';

function EnvironmentalCompliance() {
  return (
    <Container>
      <h2>Environmental Compliance</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Air Quality</td>
            <td>Good</td>
            <td>Within Limits</td>
          </tr>
          <tr>
            <td>Water Usage</td>
            <td>85% capacity</td>
            <td>Within Limits</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default EnvironmentalCompliance;
