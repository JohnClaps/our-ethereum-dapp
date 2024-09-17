import ReportsScreen from "./screens/dashboard/ReportsScreen";
import MinedMineralsScreen from "./screens/dashboard/MinedMineralsScreen";
import MaintenanceScreen from './screens/dashboard/MaintenanceScreen';
import SettingsPage from './screens/dashboard/SettingsPage';
import SecurityScreen from './screens/dashboard/SecurityScreen';
import SupportScreen from './screens/dashboard/SupportScreen';
import UserManagementScreen from './screens/dashboard/UserManagementScreen';
import SystemMonitoringScreen from "./screens/dashboard/SystemMonitoringScreen";
import RoyaltiesPaymentScreen from './screens/dashboard/RolyatiesPaymentScreen';
import AnalyticsScreen from "./screens/dashboard/AnalyticsScreen";
import React, { useState, useEffect } from 'react';
import profile from './images/profile.jpg';
import { ListGroup, Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';
import {
  FaHome,
  FaUser,
  FaChartLine,
  FaWrench,
  FaShieldAlt,
  FaCog,
  FaFileAlt,
  FaQuestionCircle,
  FaSignOutAlt,
  FaBell,
  FaSearch,
  FaCreditCard,
  FaLink
} from 'react-icons/fa';

export const Sidebar = () => {
  const [content, setContent] = useState('HomeScreen');
  const [activeQuickLink, setActiveQuickLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuClick = (screen) => {
    setContent(screen);
    setActiveQuickLink(null); // Reset quick link selection when main menu changes
  };

  const renderContent = () => {
    switch (content) {
      case 'HomeScreen':
        return <MinedMineralsScreen />;
      case 'RoyaltiesPaymentScreen':
        return <RoyaltiesPaymentScreen />;
      case 'AnalyticsScreen':
        return <AnalyticsScreen />;
      case 'UserManagementScreen':
        return <UserManagementScreen />;
      case 'SystemMonitoringScreen':
        return <SystemMonitoringScreen />;
      case 'MaintenanceScreen':
        return <MaintenanceScreen />;
      case 'SecurityScreen':
        return <SecurityScreen />;
      case 'SettingsScreen':
        return <SettingsPage />;
      case 'ReportsScreen':
        return <ReportsScreen />;
      case 'SupportScreen':
        return <SupportScreen />;
      default:
        return <MinedMineralsScreen />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const quickLinks = [
    { id: 1, title: 'Quick Report', content: 'Generate a quick report to view recent transactions and analytics.' },
    { id: 2, title: 'System Status', content: 'Check the current status of all mining systems and operations.' },
    { id: 3, title: 'User Activity', content: 'Monitor user activities and manage permissions efficiently.' },
    { id: 4, title: 'Maintenance Logs', content: 'Review all maintenance activities and logs for troubleshooting.' },
    { id: 5, title: 'Security Alerts', content: 'View the latest security alerts and take necessary actions.' }
  ];

  return (
    <Container fluid className="p-0">
      {/* Top Bar */}
      <Row className={`bg-light align-items-center p-2 shadow-sm justify-content-end sticky-top-bar`}>
        <Col xs="auto" className="d-flex align-items-center">
          <Form inline className="d-flex align-items-center">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" className="me-3">
              <FaSearch />
            </Button>
          </Form>
          <FaBell size={24} className="me-4" />
          <img 
          src = {profile}
            // src="https://via.placeholder.com/40" 
            alt="Profile" 
            className="rounded-circle me-3" 
            style={{ width: '40px', height: '40px' }}
          />
        </Col>
      </Row>

      <Row>
        {/* Left Pane (Sidebar) */}
        <Col xs={2} className={`bg-dark text-white p-3 sidebar ${isScrolled ? 'scrolled' : ''}`}>
          <h1 className="text-center mb-4">LOGO</h1>
          <ListGroup variant="flush">
            <ListGroup.Item action onClick={() => handleMenuClick('HomeScreen')} className="bg-dark text-white">
              <FaHome size={24} className="me-2" />
              Dashboard
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('RoyaltiesPaymentScreen')} className="bg-dark text-white">
              <FaCreditCard size={24} className="me-2" />
              Royalties
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('AnalyticsScreen')} className="bg-dark text-white">
              <FaChartLine size={24} className="me-2" />
              Analytics
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('UserManagementScreen')} className="bg-dark text-white">
              <FaUser size={24} className="me-2" />
              User Management
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('SystemMonitoringScreen')} className="bg-dark text-white">
              <FaChartLine size={24} className="me-2" />
              System Monitoring
             </ListGroup.Item>
             <ListGroup.Item action onClick={() => handleMenuClick('MaintenanceScreen')} className="bg-dark text-white">
               <FaWrench size={24} className="me-2" />
               Maintenance
             </ListGroup.Item>
             <ListGroup.Item action onClick={()=>handleMenuClick('SecurityScreen')} className="bg-dark text-white">
             <FaShieldAlt size={24} className="me-2" />
              Security
             </ListGroup.Item>
             <ListGroup.Item action onClick={() => handleMenuClick('SettingsScreen')} className="bg-dark text-white">
               <FaCog size={24} className="me-2" />
               Settings
             </ListGroup.Item>
            <ListGroup.Item action onClick={()=>handleMenuClick('ReportsScreen')} className="bg-dark text-white">
              <FaFileAlt size={24} className="me-2"/>
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

            {/* Additional Sidebar Items */}
          </ListGroup>
        </Col>

        {/* Content Area */}
        <Col xs={8} className="bg-light p-4 content-area">
          {renderContent()}
        </Col>

        {/* Right Pane with Quick Links */}
        <Col xs={2} className="bg-secondary text-white p-3 vh-100" style={{ overflowY: 'auto' }}>
          <h4 className="mb-3">Quick Links</h4>
          <ListGroup variant="flush">
            {quickLinks.map(link => (
              <ListGroup.Item 
                key={link.id}
                action
                onClick={() => setActiveQuickLink(link.id === activeQuickLink ? null : link.id)}
                className="bg-secondary text-white d-flex align-items-center"
              >
                <FaLink size={20} className="me-2" />
                {link.title}
              </ListGroup.Item>
            ))}
          </ListGroup>

          {activeQuickLink && (
            <Card className="mt-3 bg-light text-dark">
              <Card.Body>
                <Card.Title>
                  {quickLinks.find(link => link.id === activeQuickLink)?.title}
                </Card.Title>
                <Card.Text>
                  {quickLinks.find(link => link.id === activeQuickLink)?.content}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;