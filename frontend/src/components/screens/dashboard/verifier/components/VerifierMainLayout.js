import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { FaHome, FaCreditCard, FaChartLine, FaUser, FaLock,FaWrench, FaSignOutAlt, FaLink } from 'react-icons/fa';

const VerifierMainLayout = ({ handleMenuClick, renderContent, quickLinks }) => {
  const [activeQuickLink, setActiveQuickLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

return (
<Container fluid className="p-0">
<Row className="flex-nowrap">
  <Col xs={2} className={`sidebar ${isScrolled ? 'scrolled' : ''}`}>
  {/* Sidebar */}
    <ListGroup variant="flush">
    <ListGroup.Item action onClick={() => handleMenuClick('VerifierHomeScreen')} className="bg-dark text-white">
        <FaHome style={{ marginRight: '8px' }}size={24} className="me-2" />
        Home
      </ListGroup.Item>
      <ListGroup.Item action onClick={() => handleMenuClick('AuthenticationScreen')} className="bg-dark text-white">
        <FaLock style={{ marginRight: '8px' }}size={24} className="me-2" />
        Authentication
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
);
};
export default VerifierMainLayout;