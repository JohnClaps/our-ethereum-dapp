import React from 'react';
import { Card, Row, Col, Container, Table, Button, Form } from 'react-bootstrap';
import { FaUser, FaUsers, FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
// import './UserManagementScreen.css'; // Assuming you have a CSS file for custom styles

const UserManagementScreen = () => {
  return (
    <div className="user-management-screen">
      <Container fluid>
        <h3 className="text-center mb-4">User Management</h3>

        {/* User List */}
        <Row className="mb-4">
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaUsers size={24} className="me-2" />
                  Users
                </Card.Title>
                <Button variant="primary" className="mb-3">
                  <FaPlus size={16} className="me-2" />
                  Add User
                </Button>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>User ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Replace with dynamic data */}
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>john.doe@example.com</td>
                      <td>Admin</td>
                      <td>
                        <Button variant="warning" className="me-2">
                          <FaEdit size={16} />
                        </Button>
                        <Button variant="danger">
                          <FaTrash size={16} />
                        </Button>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* Add User Form */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaUser size={24} className="me-2" />
                  Add/Edit User
                </Card.Title>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label><FaUser size={20} className="me-2" /> Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label><FaUser size={20} className="me-2" /> Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Control as="select">
                      <option>Admin</option>
                      <option>Editor</option>
                      <option>Viewer</option>
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary">Save</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserManagementScreen;
