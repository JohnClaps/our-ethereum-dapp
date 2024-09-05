
import React, { useState } from 'react';
import { ListGroup, Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { FaHome, FaUser, FaChartLine, FaWrench, FaShieldAlt, FaCog, FaFileAlt, FaQuestionCircle, FaSignOutAlt, FaBell, FaSearch, FaChevronDown, FaChevronUp, FaWallet, FaDollarSign, FaCreditCard } from 'react-icons/fa';
import ReportsScreen from "./screens/dashboard/ReportsScreen";
import MinedMineralsScreen from "./screens/dashboard/MinedMineralsScreen";
import MaintenanceScreen from './screens/dashboard/MaintenanceScreen';
import SettingsPage from './screens/dashboard/SettingsPage';
import SecurityScreen from './screens/dashboard/SecurityScreen';
import SupportScreen from './screens/dashboard/SupportScreen';
import UserManagementScreen from './screens/dashboard/UserManagementScreen';
import SystemMonitoringScreen from "./screens/dashboard/SystemMonitoringScreen";
import RoyaltiesPaymentScreen from './screens/dashboard/RolyatiesPaymentScreen';
// import RightPane from './screens/dashboard/panes/RightPane';

export const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [content, setContent] = useState('HomeScreen');

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  const handleMenuClick = (screen) => {
    setContent(screen);
  };

  const renderContent = () => {
    switch (content) {
      case 'HomeScreen':
        return <MinedMineralsScreen />;
      case 'RoyaltiesPaymentScreen':
        return <RoyaltiesPaymentScreen/>;
      case 'UserManagementScreen':
        return <UserManagementScreen/>;
      case 'SystemMonitoringScreen':
        return <SystemMonitoringScreen/>;
      case 'MaintenanceScreen':
        return <MaintenanceScreen/>;
      case 'SecurityScreen':
        return <SecurityScreen/>;
      case 'SettingsScreen':
        return <SettingsPage/>;
      case 'ReportsScreen':
        return <ReportsScreen />;
      case 'SupportScreen':
        return <SupportScreen/>;
      default:
        return <MinedMineralsScreen/>;
    }
  };

  return (
    <Container fluid className="p-0">
      {/* Top Bar */}
      <Row className="bg-light align-items-center p-2 shadow-sm justify-content-end">
        <Col xs="auto" className="d-flex align-items-center">
          <Form inline className="d-flex align-items-center">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" className="me-3">
              <FaSearch />
            </Button>
          </Form>
          <FaBell size={24} className="me-4" />
          <img 
            src="https://via.placeholder.com/40" 
            alt="Profile" 
            className="rounded-circle me-3" 
            style={{ width: '40px', height: '40px' }}
          />
        </Col>
      </Row>

      <Row>
        {/* Left Pane */}
        <Col xs={2} className="bg-dark text-white p-3 vh-100">
          <h1 className="text-center mb-4">LOGO</h1>
          <ListGroup variant="flush">
            <ListGroup.Item 
              action 
              onClick={() => handleMenuClick('HomeScreen')} 
              className="bg-dark text-white"
            >
              <FaHome size={24} className="me-2" />
              Dashboard
            </ListGroup.Item>
            <ListGroup.Item action onClick={()=>handleMenuClick('RoyaltiesPaymentScreen')} className='bg-dark text-white'>
              <FaCreditCard size ={24} className='me-2'/>
              Royalties
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('UserManagementScreen')} className="bg-dark text-white">
              <FaUser size={24} className="me-2" />
              User Management
            </ListGroup.Item>
            <ListGroup.Item  action onClick={() => handleMenuClick('SystemMonitoringScreen')} className="bg-dark text-white">
              <FaChartLine size={24} className="me-2" />
              System Monitoring
            </ListGroup.Item>
            
            <ListGroup.Item action onClick={() => handleMenuClick('MaintenanceScreen')} className="bg-dark text-white">
              <FaWrench size={24} className="me-2" />
              Maintenance
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('SecurityScreen')} className="bg-dark text-white">
              <FaShieldAlt size={24} className="me-2" />
              Security
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('SettingsScreen')} className="bg-dark text-white">
              <FaCog size={24} className="me-2" />
              Settings
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('ReportsScreen')} className="bg-dark text-white">
              <FaFileAlt size={24} className="me-2" />
              Reports
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('SupportScreen')} className="bg-dark text-white">
              <FaQuestionCircle size={24} className="me-2" />
              Support
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('Logout')} className="bg-dark text-white">
              <FaSignOutAlt size={24} className="me-2" />
              Logout
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Content Area */}
        <Col xs={8} className="bg-light p-4 vh-100">
          {renderContent()}
        </Col>

        {/* Right Pane */}
        <Col xs={2} className="bg-secondary text-white p-3 vh-100">
        <p>Right Pane</p>
          {/* Additional content or widgets go here */}
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
