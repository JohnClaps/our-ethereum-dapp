import React from 'react';
import { Card, Row, Col, Container, Button, Form } from 'react-bootstrap';
import { FaDollarSign, FaRegListAlt, FaFileInvoiceDollar } from 'react-icons/fa';
// import './MineralRoyaltiesPaymentScreen.css'; // Assuming you add custom styles here

const RoyaltiesPaymentScreen = () => {
  return (
    <div className="royalties-payment-screen">
      <Container fluid>
        <Card>
        <h3 className="text-center mb-4">Mineral Royalties Payment Management</h3>
        </Card>
        <br></br>
        
        {/* Summary Cards */}
        <Row>
          <Col md={4}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaDollarSign size={24} className="me-2" />
                  Total Royalties Due
                </Card.Title>
                <Card.Text className="text-success">
                  <strong>$500,000</strong>
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title className="text-warning mb-4">
                  <FaRegListAlt size={24} className="me-2" />
                  Pending Payments
                </Card.Title>
                <Card.Text>
                  <strong>3 Payments</strong>
                </Card.Text>
                <Button variant="warning">Review Pending</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title className="text-info mb-4">
                  <FaFileInvoiceDollar size={24} className="me-2" />
                  Recent Invoices
                </Card.Title>
                <Card.Text>
                  <strong>5 Invoices</strong>
                </Card.Text>
                <Button variant="info">View Invoices</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Payment Form */}
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title>Make a Payment</Card.Title>
            <Form>
              <Form.Group controlId="formMineralName">
                <Form.Label>Mineral Name</Form.Label>
                <Form.Control type="text" placeholder="Enter mineral name" />
              </Form.Group>

              <Form.Group controlId="formAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter amount" />
              </Form.Group>

              <Form.Group controlId="formPaymentDate">
                <Form.Label>Payment Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group controlId="formPaymentMethod">
                <Form.Label>Payment Method</Form.Label>
                <Form.Control as="select">
                  <option>National Bank</option>
                  <option>FDH Bank</option>
                  <option>Standard Bank</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" className="mt-3" type="submit">
                Submit Payment
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RoyaltiesPaymentScreen;
