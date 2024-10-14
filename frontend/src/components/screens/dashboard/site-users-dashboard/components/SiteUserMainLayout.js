import React,{useState} from "react";
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { FaHome,FaBalanceScale,FaChartLine,FaDesktop,FaUser,FaHammer,FaLink,FaReceipt,FaWrench,FaUsers,FaSignOutAlt,FaBookOpen,FaLock } from "react-icons/fa";


const SiteUserMainLayout = ({ handleMenuClick, renderContent, quickLinks }) => {
        const [activeQuickLink, setActiveQuickLink] = useState(null);
        const [isScrolled, setIsScrolled] = useState(false);
      
    return (


    <Container fluid className="p-0">
    <Row className="flex-nowrap">
      {/* Sidebar */}
      <Col xs={2} className={`sidebar ${isScrolled ? 'scrolled' : ''}`}>
        <ListGroup variant="flush">
        <ListGroup.Item action onClick={() => handleMenuClick('SiteUserHomeScreen')} className="bg-dark text-white">
            <FaHome style={{ marginRight: '8px' }}size={24} className="me-2" />
            Home
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => handleMenuClick('EnvironmentalCompliance')} className="bg-dark text-white">
            <FaBalanceScale style={{ marginRight: '8px' }}size={24} className="me-2" />
            Compliance
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => handleMenuClick('EquipmentPerformance')} className="bg-dark text-white">
            <FaDesktop style={{ marginRight: '8px' }} size={24} className="me-2" />
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
            <FaHammer style={{ marginRight: '8px' }} size={24} className="me-2" />
            Extraction
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => handleMenuClick('MineralInventory')} className="bg-dark text-white">
            <FaReceipt style={{ marginRight: '8px' }} size={24} className="me-2" />
            Inventory
          </ListGroup.Item>              <ListGroup.Item action onClick={() => handleMenuClick('ProductionReport')} className="bg-dark text-white">
            <FaBookOpen style={{ marginRight: '8px' }} size={24} className="me-2" />
            Reports
          </ListGroup.Item>              <ListGroup.Item action onClick={() => handleMenuClick('SafetyInspection')} className="bg-dark text-white">
            <FaLock style={{ marginRight: '8px' }} size={24} className="me-2" />
            Safety
          </ListGroup.Item>              <ListGroup.Item action onClick={() => handleMenuClick('ScheduleMaintenance')} className="bg-dark text-white">
            <FaWrench style={{ marginRight: '8px' }} size={24} className="me-2" />
            Maintenance
          </ListGroup.Item>              <ListGroup.Item action onClick={() => handleMenuClick('SupervisorCommunication')} className="bg-dark text-white">
            <FaUsers  style={{ marginRight: '8px' }} size={24} className="me-2" />
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
); 
};
export default SiteUserMainLayout;