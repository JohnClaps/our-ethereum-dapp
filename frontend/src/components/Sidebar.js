
import React from 'react';
import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import { FaHome, FaUser, FaChartLine, FaWrench, FaShieldAlt, FaCog, FaFileAlt, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
// import ReportsScreen from './screens/dashboard/ReportsScreen';
// import UserManagement from './screens/dashboard/UserManagementScreen'
// import SecurityScreen from './screens/dashboard/SecurityScreen';
// import Dashboard from './screens/Dashboard';
// import MaintenanceScreen from './screens/MaintenanceScreen';
// import SettingsScreen from './screens/dashboard/SettingsScreen';
// import SupportScreen from './screens/dashboard/SupportScreen';

export const Sidebar = ({ onMenuClick }) => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col xs={2} className="bg-dark text-white p-3 vh-100">
          <h1 className="text-center mb-4">LOGO</h1>
          <ListGroup variant="flush">
            <ListGroup.Item action onClick={() => onMenuClick('HomeScreen')} className="bg-dark text-white">
              <FaHome size={24} className="me-2" />
              Dashboard
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => onMenuClick('UserManagementScreen')} className="bg-dark text-white">
              User Management
              <FaUser size={24} className="me-2" />
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => onMenuClick('SystemMonitoringScreen')} className="bg-dark text-white">
              <FaChartLine size={24} className="me-2" />
              System Monitoring
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => onMenuClick('MaintenanceScreen')} className="bg-dark text-white">
              <FaWrench size={24} className="me-2" />
              Maintenance
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => onMenuClick('SecurityScreeen')} className="bg-dark text-white">
              <FaShieldAlt size={24} className="me-2" />
              Security
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => onMenuClick('SettingsScreen')} className="bg-dark text-white">
              <FaCog size={24} className="me-2" />
              Settings
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => onMenuClick('ReportsScreen')} className="bg-dark text-white">
              <FaFileAlt size={24} className="me-2" />
              Reports
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => onMenuClick('SupportScreen')} className="bg-dark text-white">
              <FaQuestionCircle size={24} className="me-2" />
              Support
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => onMenuClick('Logout')} className="bg-dark text-white">
              <FaSignOutAlt size={24} className="me-2" />
              Logout
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
