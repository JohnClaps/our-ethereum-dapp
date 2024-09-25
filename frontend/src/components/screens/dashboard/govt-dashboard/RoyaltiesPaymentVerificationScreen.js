import React from 'react';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';

const royaltiesData = [
  { minerID: '001', mineral: 'Gold', amountDue: 1500, amountPaid: 1500, status: 'Paid' },
  { minerID: '002', mineral: 'Copper', amountDue: 1000, amountPaid: 900, status: 'Pending' }
];

const RoyaltiesPaymentVerificationScreen = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Royalties Payment Verification</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Miner ID</th>
                    <th>Mineral</th>
                    <th>Amount Due ($)</th>
                    <th>Amount Paid ($)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {royaltiesData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.minerID}</td>
                      <td>{data.mineral}</td>
                      <td>{data.amountDue}</td>
                      <td>{data.amountPaid}</td>
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

export default RoyaltiesPaymentVerificationScreen;
