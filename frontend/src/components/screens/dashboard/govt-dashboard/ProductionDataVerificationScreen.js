import React, { useState } from 'react';
import { Table, Button, Container, Row, Col, Card } from 'react-bootstrap';

const ProductionVerificationScreen = () => {
  const [productionData, setProductionData] = useState([
    { minerID: '001', mineral: 'Gold', quantity: 500, status: 'Pending' },
    { minerID: '002', mineral: 'Copper', quantity: 300, status: 'Pending' }
  ]);

  const verifyData = (index) => {
    const newData = [...productionData];
    newData[index].status = 'Verified';
    setProductionData(newData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>Production Data Verification</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Miner ID</th>
                    <th>Mineral</th>
                    <th>Quantity (kg)</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productionData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.minerID}</td>
                      <td>{data.mineral}</td>
                      <td>{data.quantity}</td>
                      <td>{data.status}</td>
                      <td>
                        {data.status === 'Pending' && (
                          <Button variant="success" onClick={() => verifyData(index)}>
                            Verify
                          </Button>
                        )}
                      </td>
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

export default ProductionVerificationScreen;
