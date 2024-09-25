import React from 'react';
import { Table, Container } from 'react-bootstrap';

function MineralInventory() {
  return (
    <Container>
      <h2>Mineral Inventory</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mineral</th>
            <th>Quantity (tons)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gold</td>
            <td>100</td>
            <td>Ready for export</td>
          </tr>
          <tr>
            <td>Copper</td>
            <td>200</td>
            <td>Stockpiling</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default MineralInventory;
