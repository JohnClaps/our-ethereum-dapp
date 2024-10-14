import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { FaHome, FaCreditCard, FaChartLine, FaUser, FaWrench, FaShieldAlt, FaCog, FaFileAlt, FaQuestionCircle, FaSignOutAlt, FaLink } from 'react-icons/fa';

const SiteAdminMainLayout = ({ handleMenuClick, renderContent, quickLinks }) => {
  const [activeQuickLink, setActiveQuickLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Additional logic for scrolling effect if needed
  // Example: useEffect(() => window.addEventListener('scroll', handleScroll), [])

  return (
    <Container fluid className="p-0">
      <Row className="flex-nowrap">
        {/* Sidebar */}
        <Col xs={2} className={`sidebar ${isScrolled ? 'scrolled' : ''}`}>
          <ListGroup variant="flush">
            <ListGroup.Item action onClick={() => handleMenuClick('HomeScreen')} className="bg-dark text-white">
              <FaHome style={{ marginRight: '8px' }} size={24} className="me-2" />
              Home
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
              <FaCog style={{ marginRight: '8px' }} size={24} className="me-2" />
              Settings
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('ReportsScreen')} className="bg-dark text-white">
              <FaFileAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
              Reports
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('SupportScreen')} className="bg-dark text-white">
              <FaQuestionCircle style={{ marginRight: '8px' }} size={24} className="me-2" />
              Support
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleMenuClick('Logout')} className="bg-dark text-white">
              <FaSignOutAlt style={{ marginRight: '8px' }} size={24} className="me-2" />
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
  );
};

export default SiteAdminMainLayout;
