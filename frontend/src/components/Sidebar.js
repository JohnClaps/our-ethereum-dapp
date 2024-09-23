import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';
import { FaHome, FaUser, FaChartLine, FaWrench, FaShieldAlt, FaCog, FaFileAlt, FaQuestionCircle, FaSignOutAlt, FaBell, FaSearch, FaCreditCard, FaLink } from 'react-icons/fa';
import profile from './images/profile.jpg';
import HomeScreen from './screens/dashboard/HomeScreen';
import ReportsScreen from "./screens/dashboard/ReportsScreen";
import MaintenanceScreen from './screens/dashboard/MaintenanceScreen';
import SettingsScreen from './screens/dashboard/SettingsScreen';
import SecurityScreen from './screens/dashboard/SecurityScreen';
import SupportScreen from './screens/dashboard/SupportScreen';
import UserManagementScreen from './screens/dashboard/UserManagementScreen';
import SystemMonitoringScreen from "./screens/dashboard/SystemMonitoringScreen";
import RoyaltiesPaymentScreen from './screens/dashboard/RolyatiesPaymentScreen';
import AnalyticsScreen from "./screens/dashboard/AnalyticsScreen";
import './screens/dashboard/styles/Sidebar.css'; // Custom styling

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
        return <HomeScreen/>;
      case 'RoyaltiesPaymentScreen':
        return <RoyaltiesPaymentScreen/>;
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
        return <SettingsScreen />;
      case 'ReportsScreen':
        return <ReportsScreen />;
      case 'SupportScreen':
        return <SupportScreen />;
      default:
        return <HomeScreen />;
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
    { id: 5, title: 'Security Alerts', content: 'View the latest security alerts and take necessary actions.View the latest security alerts and take necessary actions.View the latest security alerts and take necessary actions.View the latest security alerts and take necessary actions.View the latest security alerts and take necessary actions.View the latest security alerts and take necessary actions.View the latest security alerts and take necessary actions.' }
  ];

  return (
    <div className="sidebar-container">
      {/* Top Bar */}
      <header className="fixed-header">
        <Form inline className="d-flex align-items-center">
          <FormControl type="text" placeholder="Search" className="me-2" />
          <Button variant="outline-success">
            <FaSearch />
          </Button>
          <FaBell size={24} className="ms-3" />
          <img 
            src={profile}
            alt="Profile" 
            className="rounded-circle ms-3" 
            style={{ width: '40px', height: '40px' }}
          />
        </Form>
      </header>

      <Container fluid className="p-0">
        <Row className="flex-nowrap">
          {/* Sidebar */}
          <Col xs={2} className={`sidebar ${isScrolled ? 'scrolled' : ''}`}>
            <h1 className="text-center mb-4">LOGO</h1>
            <ListGroup variant="flush">
              <ListGroup.Item action onClick={() => handleMenuClick('HomeScreen')} className="bg-dark text-white">
                <FaHome style={{ marginRight: '8px' }}size={24} className="me-2" />
                Dashboard
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('RoyaltiesPaymentScreen')} className="bg-dark text-white">
                <FaCreditCard style={{ marginRight: '8px' }} size={24} className="me-2" />
                Royalties
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('AnalyticsScreen')} className="bg-dark text-white">
                <FaChartLine style={{ marginRight: '8px' }} size={24} className="me-2" />
                Analytics
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('UserManagementScreen')} className="bg-dark text-white">
                <FaUser style={{ marginRight: '8px' }} size={24} className="me-2" />
                Users
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('SystemMonitoringScreen')} className="bg-dark text-white">
                <FaChartLine style={{ marginRight: '8px' }} size={24} className="me-2" />
                Monitoring
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('MaintenanceScreen')} className="bg-dark text-white">
                <FaWrench style={{ marginRight: '8px' }} size={24} className="me-2" />
                Maintenance
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('SecurityScreen')} className="bg-dark text-white">
                <FaShieldAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
                Security
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('SettingsScreen')} className="bg-dark text-white">
                <FaCog  style={{ marginRight: '8px' }} size={24} className="me-2" />
                Settings
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('ReportsScreen')} className="bg-dark text-white">
                <FaFileAlt style={{ marginRight: '8px' }} size={24} className="me-2"/>
                Reports
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('SupportScreen')} className="bg-dark text-white">
                <FaQuestionCircle style={{ marginRight: '8px' }} size={24} className="me-2" />
                Support
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('Logout')} className="bg-dark text-white">
                <FaSignOutAlt  style={{ marginRight: '8px' }} size={24} className="me-2" />
                Logout
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Content Area */}
          <Col xs={8} className="content-area">
            {renderContent()}
          </Col>

          {/* Right Pane with Quick Links */}
          <Col xs={2} className="quick-links">
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
    </div>
  );
};
export default Sidebar;
