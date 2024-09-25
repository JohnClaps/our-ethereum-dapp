import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';
import { FaHome, FaUser, FaChartLine, FaWrench, FaSignOutAlt, FaBell, FaSearch, FaCreditCard, FaLink } from 'react-icons/fa';
import EnvironmentalCompliance from './EnvironmentalCompliance';
import profile from './images/profile.jpg';
import './screens/dashboard/styles/Sidebar.css'; // Custom styling
import EquipmentPerformance from './EquipmentPerformance';
import EquipmentUsageReport from './EquipmentUsageReport,js';
import LicensePermits from './LicensePermits';
import LogMineralExtraction from './LogMineralExtraction';
import MineralInventory from './MineralInventory';
import ProductionReport from './ProductionReport';
import SafetyInspection from './SafetyInspection';
import ScheduleMaintenance from './ScheduleMaintenance';
import SupervisorCommunication from './SupervisorCommunication';

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
      case 'EnvironmentalCompliance':
        return <EnvironmentalCompliance/>;
      case 'EquipmentPerformance':
        return <EquipmentPerformance/>;
      case 'EquipmentUsageReport':
        return <EquipmentUsageReport />;
      case 'LicensePermits':
        return <LicensePermits />;
      case 'LogMineralExtraction':
        return <LogMineralExtraction />;
      case 'MineralInventory':
        return <MineralInventory/>;
      case 'ProductionReport':
        return <ProductionReport/>;
      case 'SafetyInspection':
        return <SafetyInspection/>;
      case 'ScheduleMaintenance':
        return <ScheduleMaintenance/>;
      case 'SupervisorCommunication':
        return <SupervisorCommunication/>;    
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
              <ListGroup.Item action onClick={() => handleMenuClick('EnvironmentalCompliance')} className="bg-dark text-white">
                <FaHome style={{ marginRight: '8px' }}size={24} className="me-2" />
                Compliance
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('EquipmentPerformance')} className="bg-dark text-white">
                <FaCreditCard style={{ marginRight: '8px' }} size={24} className="me-2" />
                Hardware
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('EquipmentUsageReport')} className="bg-dark text-white">
                <FaChartLine style={{ marginRight: '8px' }} size={24} className="me-2" />
                Usage
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('LicensePermits')} className="bg-dark text-white">
                <FaUser style={{ marginRight: '8px' }} size={24} className="me-2" />
                Permits
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('LogMineralExtraction')} className="bg-dark text-white">
                <FaWrench style={{ marginRight: '8px' }} size={24} className="me-2" />
                Extraction
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => handleMenuClick('MineralInventory')} className="bg-dark text-white">
                <FaWrench style={{ marginRight: '8px' }} size={24} className="me-2" />
                Inventory
              </ListGroup.Item>              <ListGroup.Item action onClick={() => handleMenuClick('ProductionReport')} className="bg-dark text-white">
                <FaWrench style={{ marginRight: '8px' }} size={24} className="me-2" />
                Rports
              </ListGroup.Item>              <ListGroup.Item action onClick={() => handleMenuClick('SafetyInspection')} className="bg-dark text-white">
                <FaWrench style={{ marginRight: '8px' }} size={24} className="me-2" />
                Safety
              </ListGroup.Item>              <ListGroup.Item action onClick={() => handleMenuClick('ScheduleMaintenance')} className="bg-dark text-white">
                <FaWrench style={{ marginRight: '8px' }} size={24} className="me-2" />
                Maintenance
              </ListGroup.Item>              <ListGroup.Item action onClick={() => handleMenuClick('SupervisorCommunication')} className="bg-dark text-white">
                <FaWrench style={{ marginRight: '8px' }} size={24} className="me-2" />
                Collaboration
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
