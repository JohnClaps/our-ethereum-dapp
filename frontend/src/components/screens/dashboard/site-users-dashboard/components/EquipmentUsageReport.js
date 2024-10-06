// import React, { useState } from 'react';
// import { Form, Button, Container, Nav, Table, Card, Row, Col } from 'react-bootstrap';

// const EquipmentUsageReport = () => {
//   const [activeTab, setActiveTab] = useState('report');
//   const [equipmentID, setEquipmentID] = useState('');
//   const [usageHours, setUsageHours] = useState('');
//   const [maintenanceHistory] = useState([
//     { equipmentID: 'EQ123', date: '2023-01-10', issue: 'Oil Change', status: 'Completed' },
//     { equipmentID: 'EQ124', date: '2023-02-22', issue: 'Engine Repair', status: 'Pending' }
//   ]);
//   const [equipmentUsage] = useState([
//     { equipmentID: 'EQ123', usageHours: 120, lastReported: '2023-03-01' },
//     { equipmentID: 'EQ124', usageHours: 300, lastReported: '2023-04-10' }
//   ]);

//   // Tab content for Equipment Usage Report form
//   const renderReportForm = () => (
//     <Card>
//       <Card.Header>Report Equipment Usage</Card.Header>
//       <Card.Body>
//         <Form>
//           <Form.Group controlId="equipmentID">
//             <Form.Label>Equipment ID</Form.Label>
//             <Form.Control 
//               type="text" 
//               value={equipmentID}
//               onChange={(e) => setEquipmentID(e.target.value)}
//               placeholder="Enter equipment ID" 
//             />
//           </Form.Group>

//           <Form.Group controlId="usageHours" className="mt-3">
//             <Form.Label>Usage Hours</Form.Label>
//             <Form.Control 
//               type="number" 
//               value={usageHours}
//               onChange={(e) => setUsageHours(e.target.value)}
//               placeholder="Enter hours used" 
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit" className="mt-3">
//             Submit Report
//           </Button>
//         </Form>
//       </Card.Body>
//     </Card>
//   );

//   // Tab content for Equipment Overview
//   const renderOverview = () => (
//     <Card>
//       <Card.Header>Equipment Overview</Card.Header>
//       <Card.Body>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Equipment ID</th>
//               <th>Usage Hours</th>
//               <th>Last Reported</th>
//             </tr>
//           </thead>
//           <tbody>
//             {equipmentUsage.map((data, index) => (
//               <tr key={index}>
//                 <td>{data.equipmentID}</td>
//                 <td>{data.usageHours}</td>
//                 <td>{data.lastReported}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Card.Body>
//     </Card>
//   );

//   // Tab content for Maintenance History
//   const renderMaintenanceHistory = () => (
//     <Card>
//       <Card.Header>Maintenance History</Card.Header>
//       <Card.Body>
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Equipment ID</th>
//               <th>Date</th>
//               <th>Issue</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {maintenanceHistory.map((history, index) => (
//               <tr key={index}>
//                 <td>{history.equipmentID}</td>
//                 <td>{history.date}</td>
//                 <td>{history.issue}</td>
//                 <td>{history.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </Card.Body>
//     </Card>
//   );

//   // Tab content for Reports
//   const renderReports = () => (
//     <Card>
//       <Card.Header>Generate Reports</Card.Header>
//       <Card.Body>
//         <Button variant="primary" className="mt-2">Generate Equipment Usage Report</Button>
//         <Button variant="warning" className="mt-2 ms-2">Generate Maintenance Report</Button>
//       </Card.Body>
//     </Card>
//   );

//   // Tab content for Settings
//   const renderSettings = () => (
//     <Card>
//       <Card.Header>Settings</Card.Header>
//       <Card.Body>
//         <Form>
//           <Form.Group controlId="usageThreshold">
//             <Form.Label>Usage Hours Threshold</Form.Label>
//             <Form.Control type="number" placeholder="Enter threshold hours" />
//           </Form.Group>
//           <Form.Group controlId="maintenanceAlert" className="mt-3">
//             <Form.Label>Maintenance Alert Settings</Form.Label>
//             <Form.Control type="text" placeholder="Enter alert preferences" />
//           </Form.Group>
//           <Button variant="success" className="mt-3">Save Settings</Button>
//         </Form>
//       </Card.Body>
//     </Card>
//   );

//   // Function to render content based on active tab
//   const renderContent = () => {
//     switch (activeTab) {
//       case 'report':
//         return renderReportForm();
//       case 'overview':
//         return renderOverview();
//       case 'maintenance':
//         return renderMaintenanceHistory();
//       case 'reports':
//         return renderReports();
//       case 'settings':
//         return renderSettings();
//       default:
//         return renderReportForm();
//     }
//   };

//   return (
//     <Container className="mt-4">
//       <Row>
//         <Col>
//           {/* Navigation bar */}
//           <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
//             <Nav.Item>
//               <Nav.Link eventKey="report">Report Usage</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="overview">Equipment Overview</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="maintenance">Maintenance History</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="reports">Reports</Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link eventKey="settings">Settings</Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col>
//           {/* Render content based on active tab */}
//           {renderContent()}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default EquipmentUsageReport;


import React, { useState } from 'react';
import { Form, Button, Container, Nav, Table, Card, Row, Col } from 'react-bootstrap';

const EquipmentUsageReport = () => {
  const [activeTab, setActiveTab] = useState('report');
  const [equipmentID, setEquipmentID] = useState('');
  const [usageHours, setUsageHours] = useState('');
  const [maintenanceHistory] = useState([
    { equipmentID: 'EQ123', date: '2023-01-10', issue: 'Oil Change', status: 'Completed' },
    { equipmentID: 'EQ124', date: '2023-02-22', issue: 'Engine Repair', status: 'Pending' }
  ]);
  const [equipmentUsage] = useState([
    { equipmentID: 'EQ123', usageHours: 120, lastReported: '2023-03-01' },
    { equipmentID: 'EQ124', usageHours: 300, lastReported: '2023-04-10' }
  ]);

  // Tab content for Equipment Usage Report form
  const renderReportForm = () => (
    <Card>
      <Card.Header>Report Equipment Usage</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="equipmentID">
            <Form.Label>Equipment ID</Form.Label>
            <Form.Control 
              type="text" 
              value={equipmentID}
              onChange={(e) => setEquipmentID(e.target.value)}
              placeholder="Enter equipment ID" 
            />
          </Form.Group>

          <Form.Group controlId="usageHours" className="mt-3">
            <Form.Label>Usage Hours</Form.Label>
            <Form.Control 
              type="number" 
              value={usageHours}
              onChange={(e) => setUsageHours(e.target.value)}
              placeholder="Enter hours used" 
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit Report
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Tab content for Equipment Overview
  const renderOverview = () => (
    <Card>
      <Card.Header>Equipment Overview</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Equipment ID</th>
              <th>Usage Hours</th>
              <th>Last Reported</th>
            </tr>
          </thead>
          <tbody>
            {equipmentUsage.map((data, index) => (
              <tr key={index}>
                <td>{data.equipmentID}</td>
                <td>{data.usageHours}</td>
                <td>{data.lastReported}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  // Tab content for Maintenance History
  const renderMaintenanceHistory = () => (
    <Card>
      <Card.Header>Maintenance History</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Equipment ID</th>
              <th>Date</th>
              <th>Issue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {maintenanceHistory.map((history, index) => (
              <tr key={index}>
                <td>{history.equipmentID}</td>
                <td>{history.date}</td>
                <td>{history.issue}</td>
                <td>{history.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  // Tab content for Reports
  const renderReports = () => (
    <Card>
      <Card.Header>Generate Reports</Card.Header>
      <Card.Body>
        <Button variant="primary" className="mt-2">Generate Equipment Usage Report</Button>
        <Button variant="warning" className="mt-2 ms-2">Generate Maintenance Report</Button>
      </Card.Body>
    </Card>
  );

  // Tab content for Settings
  const renderSettings = () => (
    <Card>
      <Card.Header>Settings</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="usageThreshold">
            <Form.Label>Usage Hours Threshold</Form.Label>
            <Form.Control type="number" placeholder="Enter threshold hours" />
          </Form.Group>
          <Form.Group controlId="maintenanceAlert" className="mt-3">
            <Form.Label>Maintenance Alert Settings</Form.Label>
            <Form.Control type="text" placeholder="Enter alert preferences" />
          </Form.Group>
          <Button variant="success" className="mt-3">Save Settings</Button>
        </Form>
      </Card.Body>
    </Card>
  );

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'report':
        return renderReportForm();
      case 'overview':
        return renderOverview();
      case 'maintenance':
        return renderMaintenanceHistory();
      case 'reports':
        return renderReports();
      case 'settings':
        return renderSettings();
      default:
        return renderReportForm();
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          {/* Navigation bar */}
          <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="report">Report Usage</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="overview">Equipment Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="maintenance">Maintenance History</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="reports">Reports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="settings">Settings</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {/* Render content based on active tab */}
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default EquipmentUsageReport;
