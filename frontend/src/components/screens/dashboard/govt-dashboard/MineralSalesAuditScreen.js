import React from 'react';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';

const salesData = [
  { transactionID: 'TX123', buyer: 'John Doe', mineral: 'Gold', quantity: 100, amount: 5000, status: 'Verified' },
  { transactionID: 'TX124', buyer: 'Jane Smith', mineral: 'Copper', quantity: 200, amount: 3000, status: 'Pending' }
];

const MineralSalesAuditScreen = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Mineral Sales Audit</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Buyer</th>
                    <th>Mineral</th>
                    <th>Quantity (kg)</th>
                    <th>Amount ($)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.transactionID}</td>
                      <td>{data.buyer}</td>
                      <td>{data.mineral}</td>
                      <td>{data.quantity}</td>
                      <td>{data.amount}</td>
                      <td>{data.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MineralSalesAuditScreen;
