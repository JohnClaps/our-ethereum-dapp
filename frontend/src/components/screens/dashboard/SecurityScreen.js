// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const SecurityScreen = ({ onOptionSelect }) => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <Text style={styles.header}>Security</Text>

//       {/* Security Options */}
//       <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Change Password')}>
//         <Ionicons name="lock-closed-outline" size={24} color="#004D40" />
//         <Text style={styles.optionText}>Change Password</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Two-Factor Authentication')}>
//         <Ionicons name="shield-checkmark-outline" size={24} color="#004D40" />
//         <Text style={styles.optionText}>Two-Factor Authentication</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Security Logs')}>
//         <Ionicons name="document-text-outline" size={24} color="#004D40" />
//         <Text style={styles.optionText}>Security Logs</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Manage Devices')}>
//         <Ionicons name="tablet-landscape-outline" size={24} color="#004D40" />
//         <Text style={styles.optionText}>Manage Devices</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Activity History')}>
//         <Ionicons name="time-outline" size={24} color="#004D40" />
//         <Text style={styles.optionText}>Activity History</Text>
//       </TouchableOpacity>

//       {/* Support Button */}
//       <TouchableOpacity style={styles.supportButton} onPress={() => onOptionSelect('Contact Support')}>
//         <Ionicons name="help-circle-outline" size={24} color="white" />
//         <Text style={styles.supportText}>Contact Support</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E0F2F1',
//     paddingHorizontal: 20,
//     paddingTop: 30,
//   },
//   header: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#004D40',
//     marginBottom: 20,
//   },
//   option: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#B2DFDB',
//   },
//   optionText: {
//     marginLeft: 15,
//     fontSize: 18,
//     color: '#004D40',
//   },
//   supportButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     backgroundColor: '#1976D2',
//     borderRadius: 10,
//     marginTop: 30,
//   },
//   supportText: {
//     marginLeft: 15,
//     fontSize: 18,
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default SecurityScreen;


import React from 'react';
import { Card, Row, Col, Container, Table, Button } from 'react-bootstrap';
import { FaShieldAlt, FaHistory, FaLock, FaExclamationTriangle } from 'react-icons/fa';
// import './SecurityScreen.css'; // Assuming you have a CSS file for custom styles

const SecurityScreen = () => {
  return (
    <div className="security-screen">
      <Container fluid>
        <h3 className="text-center mb-4">Security Management</h3>
        
        {/* Security Settings */}
        <Row className="mb-4">
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaShieldAlt size={24} className="me-2" />
                  Security Settings
                </Card.Title>
                <Button variant="primary" className="me-2">Change Password</Button>
                <Button variant="secondary">Two-Factor Authentication</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Audit Logs */}
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-primary mb-4">
                  <FaHistory size={24} className="me-2" />
                  Audit Logs
                </Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Event ID</th>
                      <th>Date</th>
                      <th>User</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Replace with dynamic data */}
                    <tr>
                      <td>1</td>
                      <td>2024-09-01</td>
                      <td>admin</td>
                      <td>Logged in</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2024-09-02</td>
                      <td>user1</td>
                      <td>Changed password</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Security Alerts */}
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-danger mb-4">
                  <FaExclamationTriangle size={24} className="me-2" />
                  Recent Security Alerts
                </Card.Title>
                <ul>
                  <li>Failed login attempt from IP 192.168.1.1</li>
                  <li>Unusual activity detected on account admin</li>
                  <li>Two-Factor Authentication enabled for user1</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecurityScreen;
