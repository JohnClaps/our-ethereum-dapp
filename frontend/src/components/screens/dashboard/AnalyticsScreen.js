import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, BarElement, CategoryScale, LinearScale, ArcElement);

const AnalyticsScreen = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [4000, 4500, 3500, 5000, 6000, 5500],
        borderColor: '#4e73df',
        backgroundColor: 'rgba(78, 115, 223, 0.2)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Sales',
        data: [2500, 3000, 2000, 4000],
        backgroundColor: ['#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'],
      },
    ],
  };

  const pieChartData = {
    labels: ['Direct', 'Referral', 'Social'],
    datasets: [
      {
        data: [55, 25, 20],
        backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      },
    ],
  };

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col md={6} className="mb-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Monthly Revenue</Card.Title>
              <Line data={lineChartData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Product Sales</Card.Title>
              <Bar data={barChartData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Traffic Sources</Card.Title>
              <Pie data={pieChartData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title>Filters</Card.Title>
              <Form>
                <Form.Group controlId="formDateRange">
                  <Form.Label>Date Range</Form.Label>
                  <Form.Control type="date" />
                  <Form.Control type="date" className="mt-2" />
                </Form.Group>
                <Button variant="primary" className="mt-3">Apply Filters</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AnalyticsScreen;
