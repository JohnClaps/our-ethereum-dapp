import { Navbar, Nav, Container, Row, Col, Button, Card,Table } from 'react-bootstrap';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '../styles/VerifierHomeScreen.css';

//Importing screen components
import RoyaltiesPaymentVerificationScreen from './RoyaltiesPaymentVerificationScreen';
import MineralSalesAuditScreen from './MineralSalesAuditScreen';
import ProductionDataVerificationScreen from './ProductionDataVerificationScreen';
import ExportProcessMonitoringScreen from './ExportProcessMonitoringScreen';
import AuthenticationScreen from './AuthenticationScreen';

const VerifierHomeScreen = () => {
  const [activeScreen, setActiveScreen] = useState('overview');
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

  const renderScreen = () => {
    switch (activeScreen) {
      case 'AuthenticationScreen':
        return <AuthenticationScreen/>;
      case 'RoyaltiesPaymentVerificationScreen':
        return <RoyaltiesPaymentVerificationScreen />;
      case 'ExportProcessMonitoringScreen':
        return <ExportProcessMonitoringScreen />
      case 'MineralSalesAuditScreen':
        return <MineralSalesAuditScreen />;
      case 'ProductionDataVerificationScreen':
        return <ProductionDataVerificationScreen />;
      default:
        return (
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
                      <td><span className="text-success">Verified</span></td>
                      <td>LIC-20231010</td>
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
        );
    }
  };

  return (
    <div className="home-screen">
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand onClick={() => setActiveScreen('overview')} style={{ cursor: 'pointer' }}>
            Mining Transactions Monitor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link action onClick={()=> setActiveScreen('AuthenticationScreen')}>Authentication</Nav.Link>
              <Nav.Link action onClick={() => setActiveScreen('RolyatiesPaymentVerificationScreen')}>Royalties</Nav.Link>
              <Nav.Link action onClick={() => setActiveScreen('ExportProcessMonitoringScreen')}>Exports</Nav.Link>
              <Nav.Link action onClick={() => setActiveScreen('MineralSalesAuditScreen')}>Sales   </Nav.Link>
              <Nav.Link action onClick={() => setActiveScreen('ProductionDataVerificationScreen')}>Production</Nav.Link>

              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Render the active screen */}
      <div className="content">
        {renderScreen()}
      </div>
    </div>
  );
};

export default VerifierHomeScreen;

