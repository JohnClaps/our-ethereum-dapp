import React, { useState } from 'react';
import { Card, Row, Col, Container, Table, Button, Form, Modal } from 'react-bootstrap';
import { FaUser, FaUsers, FaEdit, FaPlus, FaArchive } from 'react-icons/fa';

const UserManagementScreen = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Leticia Kasamale", email: "l************le8@gmail.com", role: 1 },
  ]);

  const [newUser, setNewUser] = useState({ id: null, name: "", email: "", role: "1" });
  const [archivedUsers, setArchivedUsers] = useState([]);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false); // State for toggling Add/Edit form
  const [isEditing, setIsEditing] = useState(false); // State for editing

  const userRoles = {
    1: "Admin",
    2: "Editor",
    3: "Viewer",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      if (isEditing) {
        // Edit existing user
        setUsers(
          users.map((user) =>
            user.id === newUser.id ? newUser : user
          )
        );
      } else {
        // Add new user
        const newUserId = users.length + 1;
        setUsers([...users, { id: newUserId, ...newUser }]);
      }
      resetForm();
    }
  };

  const handleEditUser = (user) => {
    setNewUser(user); // Prefill form with selected user details
    setIsEditing(true); // Set to editing mode
    setShowUserForm(true); // Display the form
  };

  const handleArchiveUser = (userId) => {
    setSelectedUserId(userId);
    setShowArchiveModal(true); // Show modal when archive is clicked
  };

  const confirmArchive = () => {
    setArchivedUsers([...archivedUsers, selectedUserId]); // Add user to archived list
    setUsers(users.filter((user) => user.id !== selectedUserId)); // Remove from active users
    setShowArchiveModal(false);
  };

  const resetForm = () => {
    setNewUser({ id: null, name: "", email: "", role: "1" });
    setIsEditing(false);
    setShowUserForm(false); // Hide form after adding/editing
  };

  const handleAddButtonClick = () => {
    setNewUser({ id: null, name: "", email: "", role: "1" }); // Clear form for new user
    setIsEditing(false); // Set to adding mode
    setShowUserForm(true); // Show the form
  };

  const handleCloseForm = () => {
    resetForm(); // Reset form and hide it
  };

  return (
    <div className="user-management-screen">
      <Container fluid>
        <Card className="shadow-sm mb-4">
          <h3 className="text-center mb-4">User Management</h3>
        </Card>

        {/* User List */}
        <Row className="mb-4">
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaUsers size={24} className="me-2" />
                  Users
                </Card.Title>
                <Button 
                  variant="primary" 
                  className="mb-3"
                  onClick={handleAddButtonClick} // Show form when Add User button is clicked
                >
                  <FaPlus size={16} className="me-2" />
                  Add User
                </Button>
                <Table striped bordered hover responsive>
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
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{userRoles[user.role]}</td>
                        <td>
                          <Button variant="warning" className="me-2" onClick={() => handleEditUser(user)}>
                            <FaEdit size={16} />
                          </Button>
                          <Button variant="secondary" onClick={() => handleArchiveUser(user.id)}>
                            <FaArchive size={16} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* Add/Edit User Form - Visible when showUserForm is true */}
          {showUserForm && (
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary mb-4">
                    <FaUser size={24} className="me-2" />
                    {isEditing ? "Edit User" : "Add User"}
                  </Card.Title>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FaUser size={20} className="me-2" /> Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={newUser.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FaUser size={20} className="me-2" /> Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={newUser.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        as="select"
                        name="role"
                        value={newUser.role}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="1">Admin</option>
                        <option value="2">Editor</option>
                        <option value="3">Viewer</option>
                      </Form.Control>
                    </Form.Group>
                    <Button variant="primary" onClick={handleAddUser}>
                      {isEditing ? "Update User" : "Add User"}
                    </Button>
                    <Button variant="secondary" onClick={handleCloseForm} className="ms-2">
                      Cancel
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>

        {/* Confirmation Modal for Archiving */}
        <Modal show={showArchiveModal} onHide={() => setShowArchiveModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Archiving</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to archive this user?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowArchiveModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={confirmArchive}>
              Archive
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default UserManagementScreen;
