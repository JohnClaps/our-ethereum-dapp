    import React, { useState } from 'react';
    import { Table, Container, Button, Form, Card, Nav, ListGroup } from 'react-bootstrap';
    
    const MineralInventory = () => {
      const [activeTab, setActiveTab] = useState('inventory');
      const [minerals, setMinerals] = useState([
        { name: 'Gold', quantity: 100, status: 'Ready for export' },
        { name: 'Copper', quantity: 200, status: 'Stockpiling' },
      ]);
      const [newMineral, setNewMineral] = useState({ name: '', quantity: '', status: '' });
      const [inventoryHistory, setInventoryHistory] = useState([]);
    
      // Function to add new mineral
      const handleAddMineral = (e) => {
        e.preventDefault();
        const updatedMinerals = [...minerals, { ...newMineral, quantity: parseInt(newMineral.quantity) }];
        setMinerals(updatedMinerals);
        setInventoryHistory([...inventoryHistory, `Added ${newMineral.name}, Quantity: ${newMineral.quantity}`]);
        setNewMineral({ name: '', quantity: '', status: '' });
      };
    
      // Function to render inventory table
      const renderInventoryTable = () => (
        <Card>
          <Card.Header>Mineral Inventory</Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Mineral</th>
                  <th>Quantity (tons)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {minerals.map((mineral, index) => (
                  <tr key={index}>
                    <td>{mineral.name}</td>
                    <td>{mineral.quantity}</td>
                    <td>{mineral.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      );
    
      // Function to render add mineral form
      const renderAddMineralForm = () => (
        <Card>
          <Card.Header>Add New Mineral</Card.Header>
          <Card.Body>
            <Form onSubmit={handleAddMineral}>
              <Form.Group controlId="mineralName">
                <Form.Label>Mineral Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter mineral name"
                  value={newMineral.name}
                  onChange={(e) => setNewMineral({ ...newMineral, name: e.target.value })}
                  required
                />
              </Form.Group>
    
              <Form.Group controlId="mineralQuantity">
                <Form.Label>Quantity (tons)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter quantity"
                  value={newMineral.quantity}
                  onChange={(e) => setNewMineral({ ...newMineral, quantity: e.target.value })}
                  required
                />
              </Form.Group>
    
              <Form.Group controlId="mineralStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter status"
                  value={newMineral.status}
                  onChange={(e) => setNewMineral({ ...newMineral, status: e.target.value })}
                  required
                />
              </Form.Group>
    
              <Button variant="primary" type="submit">
                Add Mineral
              </Button>
            </Form>
          </Card.Body>
        </Card>
      );
    
      // Function to render inventory history
      const renderInventoryHistory = () => (
        <Card>
          <Card.Header>Inventory History</Card.Header>
          <Card.Body>
            <ListGroup>
              {inventoryHistory.length > 0 ? (
                inventoryHistory.map((entry, index) => (
                  <ListGroup.Item key={index}>{entry}</ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>No inventory history available.</ListGroup.Item>
              )}
            </ListGroup>
          </Card.Body>
        </Card>
      );
    
      return (
        <Container className="mt-4">
          {/* Navigation bar */}
          <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="inventory">Inventory</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="addMineral">Add Mineral</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="history">Inventory History</Nav.Link>
            </Nav.Item>
          </Nav>
    
          {/* Render content based on active tab */}
          <div className="mt-4">
            {activeTab === 'inventory' && renderInventoryTable()}
            {activeTab === 'addMineral' && renderAddMineralForm()}
            {activeTab === 'history' && renderInventoryHistory()}
          </div>
        </Container>
      );
    };
    
    export default MineralInventory;
    