import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Table, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Verifications Completed',
        data: [33, 53, 85, 41, 44, 65, 59, 80, 95],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const lineChartOptions = {
    maintainAspectRatio: false,
  };

  return (
    <div>
      {/* Top Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">Mining Site Verifier</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#authentication">Authentication</Nav.Link>
              <Nav.Link href="#royalties">Royalties</Nav.Link>
              <Nav.Link href="#exports">Exports</Nav.Link>
              <Nav.Link href="#sales">Sales</Nav.Link>
              <Nav.Link href="#production">Production</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Dashboard Content */}
      <Container fluid className="mt-5 pt-5">
        <Row className="mb-4">
          {/* Verifications Overview */}
          <Col lg={6}>
            <Card className="mb-4 shadow-sm">
              <Card.Header>Verifications Overview</Card.Header>
              <Card.Body>
                <Card.Title>Total Verifications: 1,235</Card.Title>
                <Card.Text>Pending Verifications: 45</Card.Text>
                <Button variant="primary" href="#verifications">View Details</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Transactions Summary */}
          <Col lg={6}>
            <Card className="mb-4 shadow-sm">
              <Card.Header>Transactions Summary</Card.Header>
              <Card.Body>
                <Card.Title>Total Transactions: $2,456,000</Card.Title>
                <Card.Text>Last Transaction: $34,000 on Oct 5, 2024</Card.Text>
                <Button variant="success" href="#transactions">View All Transactions</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Chart Section */}
          <Col lg={8}>
            <Card className="mb-4 shadow-sm">
              <Card.Header>Verifications Over Time</Card.Header>
              <Card.Body style={{ height: '300px' }}>
                <Line data={lineChartData} options={lineChartOptions} />
              </Card.Body>
            </Card>
          </Col>

          {/* Recent Verifications Table */}
          <Col lg={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Header>Recent Verifications</Card.Header>
              <Card.Body>
                <Table responsive bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>License Number</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>LIC-20231010</td>
                      <td><span className="text-success">Verified</span></td>
                      <td>2024-10-05</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>LIC-20230920</td>
                      <td><span className="text-warning">Pending</span></td>
                      <td>2024-09-25</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>LIC-20230901</td>
                      <td><span className="text-danger">Rejected</span></td>
                      <td>2024-09-15</td>
                    </tr>
                  </tbody>
                </Table>
                <Button variant="primary" href="#verifications">View All Verifications</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Reports Section */}
          <Col lg={12}>
            <Card className="mb-4 shadow-sm">
              <Card.Header>Reports</Card.Header>
              <Card.Body>
                <p>Generate detailed reports of all mining site verifications, transactions, and audits. Customize the reports based on date, license type, or transaction range.</p>
                <Button variant="dark" href="#reports">Generate Report</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
