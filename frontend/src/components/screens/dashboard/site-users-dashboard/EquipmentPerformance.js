import React from 'react';
import { Table, Container } from 'react-bootstrap';

function EquipmentPerformance() {
  return (
    <Container>
      <h2>Monitor Equipment Performance</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Equipment</th>
            <th>Status</th>
            <th>Efficiency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Excavator #1</td>
            <td>Operational</td>
            <td>95%</td>
          </tr>
          <tr>
            <td>Drill #2</td>
            <td>Needs Maintenance</td>
            <td>75%</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default EquipmentPerformance;
