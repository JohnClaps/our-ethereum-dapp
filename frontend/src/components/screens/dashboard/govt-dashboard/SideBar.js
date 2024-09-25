import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';
import { FaHome, FaUser, FaChartLine, FaWrench, FaSignOutAlt, FaBell, FaSearch, FaCreditCard, FaLink } from 'react-icons/fa';
import profile from './images/profile.jpg';
import './screens/dashboard/styles/Sidebar.css'; // Custom styling
import AuthenticationScreen from './AuthenticationScreen';
import ExportProcessMonitoringScreen from './ExportProcessMonitoringScreen';
import MineralSalesAuditScreen from './MineralSalesAuditScreen';
import ProductionDataVerificationScreen from './ProductionDataVerificationScreen';
import RoyaltiesPaymentVerificationScreen from './RoyaltiesPaymentVerificationScreen';
import RoyaltiesPaymentVerificationScreen from './RoyaltiesPaymentVerificationScreen';

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
      case 'AuthenticationScreen':
        return <AuthenticationScreenScreen/>;
      case 'RoyaltiesPaymentVerificationScreen':
        return <RoyaltiesPaymentVerificationScreen/>;
      case 'ExportProcessMonitoringScreen':
        return <ExportProcessMonitoringScreen />;
      case 'MineralSalesAuditScreen':
        return <MineralSalesAuditScreen />;
      case 'ProductionDataVerificationScreen':
        return <ProductionDataVerificationScreen />;
      default:
        return <AuthenticationScreen />;
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
    { id: 1, title: 'Minerals overview', content: 'Get insight into the minerals distribution across the country.' },
    { id: 2, title: 'Productionv insights', content: 'Check the current status of all mining systems and operations.' },
    { id: 3, title: 'Users', content: 'Monitor user activities and manage permissions efficiently.' },
    { id: 4, title: 'Exports', content: 'Review all maintenance activities and logs for troubleshooting.' },
    { id: 5, title: 'Sales', content: 'View the latest sales transactions and get insight into market trends.View the latest sales transactions and get insight into market trendsView the latest sales transactions and get insight into market trends' }
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
              <ListGroup.Item action onClick={() => handleMenuClick('AuthenticationScreen')} className="bg-dark text-white">
                <FaHome style={{ marginRight: '8px' }}size={24} className="me-2" />
                Aunthentication
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('RoyaltiesPaymentVerificationScreen')} className="bg-dark text-white">
                <FaCreditCard style={{ marginRight: '8px' }} size={24} className="me-2" />
                Royalties
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('ExportProcessMonitoringScreen')} className="bg-dark text-white">
                <FaChartLine style={{ marginRight: '8px' }} size={24} className="me-2" />
                Exports
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('MineralSalesAuditScreen')} className="bg-dark text-white">
                <FaUser style={{ marginRight: '8px' }} size={24} className="me-2" />
                Sales
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('ProductionDataVerificationScreen')} className="bg-dark text-white">
                <FaWrench style={{ marginRight: '8px' }} size={24} className="me-2" />
                Production
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
