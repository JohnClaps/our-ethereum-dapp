// // import React, { useState } from 'react';
// // import { Container, Row, Col, Button, Form, ListGroup, InputGroup } from 'react-bootstrap';

// // const UserManagement = () => {
// //   const [users, setUsers] = useState([
// //     { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
// //     { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
// //     { id: '3', name: 'Michael Brown', email: 'michael@example.com', role: 'Editor' },
// //   ]);

// //   const [searchText, setSearchText] = useState('');

// //   const filteredUsers = users.filter(
// //     user =>
// //       user.name.toLowerCase().includes(searchText.toLowerCase()) ||
// //       user.email.toLowerCase().includes(searchText.toLowerCase()) ||
// //       user.role.toLowerCase().includes(searchText.toLowerCase())
// //   );

// //   const handleAddUser = () => {
// //     // Implement logic to add a new user
// //     console.log('Add user button clicked');
// //   };

// //   const handleEditUser = (id) => {
// //     // Implement logic to edit a user
// //     console.log('Edit user with ID:', id);
// //   };

// //   const handleDeleteUser = (id) => {
// //     // Implement logic to delete a user
// //     setUsers(users.filter(user => user.id !== id));
// //   };

// //   const renderUser = (user) => (
// //     <ListGroup.Item key={user.id} className="d-flex justify-content-between align-items-center">
// //       <div>
// //         <strong>{user.name}</strong>
// //         <br />
// //         <small>{user.email}</small>
// //         <br />
// //         <small className="text-muted">{user.role}</small>
// //       </div>
// //       <div>
// //         <Button variant="warning" size="sm" onClick={() => handleEditUser(user.id)} className="me-2">
// //           Edit
// //         </Button>
// //         <Button variant="danger" size="sm" onClick={() => handleDeleteUser(user.id)}>
// //           Delete
// //         </Button>
// //       </div>
// //     </ListGroup.Item>
// //   );

// //   return (
// //     <Container fluid className="p-4 bg-light">
// //       <Row className="mb-4">
// //         <Col>
// //           <h2>User Management</h2>
// //         </Col>
// //         <Col className="text-end">
// //           <Button variant="success" onClick={handleAddUser}>
// //             Add User
// //           </Button>
// //         </Col>
// //       </Row>
// //       <Row className="mb-3">
// //         <Col>
// //           <InputGroup>
// //             <Form.Control
// //               type="text"
// //               placeholder="Search users..."
// //               value={searchText}
// //               onChange={e => setSearchText(e.target.value)}
// //             />
// //           </InputGroup>
// //         </Col>
// //       </Row>
// //       <ListGroup>
// //         {filteredUsers.map(user => renderUser(user))}
// //       </ListGroup>
// //     </Container>
// //   );
// // };

// // export default UserManagement;


// import React from 'react';
// import { Card, Row, Col, Container, Button } from 'react-bootstrap';
// import { FaUser, FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';
// // import ".styles/UserManagementScreen.css"; // Import the CSS file

// const UserManagementScreen = () => {
//   const users = [
//     { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
//     { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
//     { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Moderator' },
//   ];

//   return (
//     <div className="user-management-screen">
//       <Container fluid>
//         <h3 className="text-center mb-4">User Management</h3>
        
//         <Row className="mb-4">
//           <Col className="text-end">
//             <Button variant="primary">
//               <FaPlus size={20} className="icon" />
//               Add New User
//             </Button>
//           </Col>
//         </Row>
        
//         {/* User Cards */}
//         <Row>
//           {users.map(user => (
//             <Col md={4} key={user.id} className="mb-4">
//               <Card className="shadow-sm user-management-card">
//                 <Card.Body className="card-body">
//                   <div className="card-title">
//                     <FaUser size={24} className="icon text-primary" />
//                     <Card.Title>{user.name}</Card.Title>
//                   </div>
//                   <Card.Text className="card-text">
//                     <strong>Email:</strong> {user.email}
//                   </Card.Text>
//                   <Card.Text className="card-text">
//                     <strong>Role:</strong> {user.role}
//                   </Card.Text>
//                   <div className="d-flex justify-content-end mt-3">
//                     <Button variant="outline-primary" className="me-2">
//                       <FaEdit size={16} />
//                     </Button>
//                     <Button variant="outline-danger">
//                       <FaTrashAlt size={16} />
//                     </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default UserManagementScreen;


// import React from 'react';
// import { Card, Row, Col, Container, Table, Button, Form } from 'react-bootstrap';
// import { FaUser, FaUsers, FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
// // import './UserManagementScreen.css'; // Assuming you have a CSS file for custom styles

// const UserManagementScreen = () => {
//   return (
//     <div className="user-management-screen">
//       <Container fluid>
//         <h3 className="text-center mb-4">User Management</h3>

//         {/* User List */}
//         <Row className="mb-4">
//           <Col md={8}>
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title className="text-primary mb-4">
//                   <FaUsers size={24} className="me-2" />
//                   Users
//                 </Card.Title>
//                 <Button variant="primary" className="mb-3">
//                   <FaPlus size={16} className="me-2" />
//                   Add User
//                 </Button>
//                 <Table striped bordered hover>
//                   <thead>
//                     <tr>
//                       <th>User ID</th>
//                       <th>Name</th>
//                       <th>Email</th>
//                       <th>Role</th>
//                       <th>Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Replace with dynamic data */}
//                     <tr>
//                       <td>1</td>
//                       <td>John Doe</td>
//                       <td>john.doe@example.com</td>
//                       <td>Admin</td>
//                       <td>
//                         <Button variant="warning" className="me-2">
//                           <FaEdit size={16} />
//                         </Button>
//                         <Button variant="danger">
//                           <FaTrash size={16} />
//                         </Button>
//                       </td>
//                     </tr>
//                     {/* Add more rows as needed */}
//                   </tbody>
//                 </Table>
//               </Card.Body>
//             </Card>
//           </Col>

//           {/* Add User Form */}
//           <Col md={4}>
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title className="text-primary mb-4">
//                   <FaUser size={24} className="me-2" />
//                   Add/Edit User
//                 </Card.Title>
//                 <Form>
//                   <Form.Group className="mb-3">
//                     <Form.Label><FaUser size={20} className="me-2" /> Name</Form.Label>
//                     <Form.Control type="text" placeholder="Enter name" />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label><FaUser size={20} className="me-2" /> Email</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Role</Form.Label>
//                     <Form.Control as="select">
//                       <option>Admin</option>
//                       <option>Editor</option>
//                       <option>Viewer</option>
//                     </Form.Control>
//                   </Form.Group>
//                   <Button variant="primary">Save</Button>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default UserManagementScreen;


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
