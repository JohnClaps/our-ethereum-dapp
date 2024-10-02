import React from 'react';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';

const exportData = [
  { exportID: 'EXP001', mineral: 'Gold', quantity: 200, destination: 'USA', status: 'Cleared' },
  { exportID: 'EXP002', mineral: 'Copper', quantity: 300, destination: 'UK', status: 'Pending' }
];

const ExportProcessMonitoringScreen = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Export Process Monitoring</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Export ID</th>
                    <th>Mineral</th>
                    <th>Quantity (kg)</th>
                    <th>Destination</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {exportData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.exportID}</td>
                      <td>{data.mineral}</td>
                      <td>{data.quantity}</td>
                      <td>{data.destination}</td>
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

export default ExportProcessMonitoringScreen;
