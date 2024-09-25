import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function SupervisorCommunication() {
  return (
    <Container>
      <h2>Communicate with Supervisor</h2>
      <Form>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default SupervisorCommunication;
