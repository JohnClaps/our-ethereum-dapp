// import React from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import { BsChatDots, BsEnvelope, BsTelephone, BsQuestionCircle, BsStar } from 'react-icons/bs';

// const SupportScreen = ({ onOptionSelect }) => {
//   return (
//     <Container fluid className="bg-light py-4">
//       {/* Header Section */}
//       <h1 className="text-primary mb-4">Support</h1>

//       {/* Support Options */}
//       <OptionButton
//         icon={<BsChatDots />}
//         label="Live Chat"
//         onPress={() => onOptionSelect('Live Chat')}
//       />
//       <OptionButton
//         icon={<BsEnvelope />}
//         label="Email Support"
//         onPress={() => onOptionSelect('Email Support')}
//       />
//       <OptionButton
//         icon={<BsTelephone />}
//         label="Phone Support"
//         onPress={() => onOptionSelect('Phone Support')}
//       />
//       <OptionButton
//         icon={<BsQuestionCircle />}
//         label="FAQs"
//         onPress={() => onOptionSelect('FAQs')}
//       />

//       {/* Feedback Button */}
//       <Button
//         variant="primary"
//         className="d-flex align-items-center mt-4"
//         onClick={() => onOptionSelect('Give Feedback')}
//       >
//         <BsStar className="me-2" />
//         Give Feedback
//       </Button>
//     </Container>
//   );
// };

// // Reusable OptionButton Component
// const OptionButton = ({ icon, label, onPress }) => (
//   <Card className="mb-3" onClick={onPress} style={{ cursor: 'pointer' }}>
//     <Card.Body className="d-flex align-items-center">
//       <span className="text-primary fs-4">{icon}</span>
//       <h5 className="ms-3 mb-0 text-primary">{label}</h5>
//     </Card.Body>
//   </Card>
// );

// export default SupportScreen;


import React, { useState } from 'react';
import { Card, Row, Col, Container, Form, Button, Table } from 'react-bootstrap';
import { FaQuestionCircle, FaTicketAlt, FaInbox, FaExclamationCircle } from 'react-icons/fa';
// import './SupportScreen.css'; // Assuming you have a CSS file for custom styles

const SupportScreen = () => {
  const [ticketType, setTicketType] = useState('Technical');
  const [description, setDescription] = useState('');

  const handleTicketTypeChange = (event) => {
    setTicketType(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    // Implement ticket submission logic here
    alert('Support ticket submitted!');
  };

  return (
    <div className="support-screen">
      <Container fluid>
        <h3 className="text-center mb-4">Support Center</h3>

        {/* Submit Ticket */}
        <Row className="mb-4">
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaTicketAlt size={24} className="me-2" />
                  Submit a Support Ticket
                </Card.Title>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label><FaQuestionCircle size={20} className="me-2" /> Ticket Type</Form.Label>
                    <Form.Control as="select" value={ticketType} onChange={handleTicketTypeChange}>
                      <option value="Technical">Technical Issue</option>
                      <option value="Billing">Billing Issue</option>
                      <option value="General">General Inquiry</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label><FaExclamationCircle size={20} className="me-2" /> Description</Form.Label>
                    <Form.Control as="textarea" rows={4} value={description} onChange={handleDescriptionChange} />
                  </Form.Group>
                  <Button variant="primary" onClick={handleSubmit}>Submit Ticket</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Recent Tickets */}
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaInbox size={24} className="me-2" />
                  Recent Support Tickets
                </Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Ticket ID</th>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Replace with dynamic data */}
                    <tr>
                      <td>1</td>
                      <td>2024-09-01</td>
                      <td>Technical</td>
                      <td>Open</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2024-09-02</td>
                      <td>Billing</td>
                      <td>Closed</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FAQs */}
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaQuestionCircle size={24} className="me-2" />
                  Frequently Asked Questions
                </Card.Title>
                <ul>
                  <li>How do I reset my password?</li>
                  <li>How can I contact customer support?</li>
                  <li>Where can I find the user manual?</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SupportScreen;
