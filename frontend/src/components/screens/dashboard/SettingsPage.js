// import React from 'react';
// import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
// import { BsPerson, BsBell, BsLock, BsGear, BsQuestionCircle, BsBoxArrowRight } from 'react-icons/bs';

// const SettingsScreen = ({ onOptionSelect }) => {
//   return (
//     <Container className="pt-4">
//       {/* Header */}
//       <h2 className="text-success mb-4">Settings</h2>

//       {/* Settings Options */}
//       <ListGroup variant="flush">
//         <OptionButton
//           icon={<BsPerson />}
//           label="Profile"
//           onPress={() => onOptionSelect('Profile')}
//         />
//         <OptionButton
//           icon={<BsBell />}
//           label="Notifications"
//           onPress={() => onOptionSelect('Notifications')}
//         />
//         <OptionButton
//           icon={<BsLock />}
//           label="Privacy"
//           onPress={() => onOptionSelect('Privacy')}
//         />
//         <OptionButton
//           icon={<BsGear />}
//           label="Account"
//           onPress={() => onOptionSelect('Account')}
//         />
//         <OptionButton
//           icon={<BsQuestionCircle />}
//           label="Help"
//           onPress={() => onOptionSelect('Help')}
//         />
//       </ListGroup>

//       {/* Logout Button */}
//       <Button
//         variant="danger"
//         className="mt-4 d-flex align-items-center"
//         onClick={() => onOptionSelect('Logout')}
//       >
//         <BsBoxArrowRight size={24} color="white" />
//         <span className="ms-2">Logout</span>
//       </Button>
//     </Container>
//   );
// };

// // Reusable OptionButton Component
// const OptionButton = ({ icon, label, onPress }) => (
//   <ListGroup.Item action onClick={onPress} className="d-flex align-items-center">
//     {icon}
//     <span className="ms-3">{label}</span>
//   </ListGroup.Item>
// );

// export default SettingsScreen;
import React from 'react';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';
import { FaCog, FaUser, FaLock, FaBell, FaLanguage } from 'react-icons/fa';
// import './SettingsPage.css'; // Assuming you have a CSS file for custom styles

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <Container fluid>
        <h3 className="text-center mb-4">System Settings</h3>
        
        <Row>
          <Col md={6}>
            <Card className="shadow-sm mb-4 settings-card">
              <Card.Body>
                <Card.Title className="text-primary">
                  <FaUser size={24} className="me-2" />
                  Account Settings
                </Card.Title>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Save Changes</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card className="shadow-sm mb-4 settings-card">
              <Card.Body>
                <Card.Title className="text-primary">
                  <FaLock size={24} className="me-2" />
                  Security Settings
                </Card.Title>
                <Form>
                  <Form.Group controlId="formTwoFactorAuth">
                    <Form.Check type="checkbox" label="Enable Two-Factor Authentication" />
                  </Form.Group>
                  <Form.Group controlId="formChangePassword">
                    <Form.Label>Change Password</Form.Label>
                    <Form.Control type="password" placeholder="New Password" />
                    <Form.Control type="password" placeholder="Confirm Password" className="mt-2" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Update Security</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <Card className="shadow-sm mb-4 settings-card">
              <Card.Body>
                <Card.Title className="text-primary">
                  <FaBell size={24} className="me-2" />
                  Notification Settings
                </Card.Title>
                <Form>
                  <Form.Group controlId="formEmailNotifications">
                    <Form.Check type="checkbox" label="Email Notifications" />
                  </Form.Group>
                  <Form.Group controlId="formSmsNotifications">
                    <Form.Check type="checkbox" label="SMS Notifications" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Save Notifications</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card className="shadow-sm mb-4 settings-card">
              <Card.Body>
                <Card.Title className="text-primary">
                  <FaLanguage size={24} className="me-2" />
                  Language Settings
                </Card.Title>
                <Form>
                  <Form.Group controlId="formLanguageSelect">
                    <Form.Label>Select Language</Form.Label>
                    <Form.Control as="select">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      {/* Add more languages as needed */}
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary" type="submit">Save Language</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SettingsPage;
