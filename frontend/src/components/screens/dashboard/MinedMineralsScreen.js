// import React from 'react';
// import { Card, Row, Col } from 'react-bootstrap';

// const MinedMineralsScreen = () => {
//   const minedMinerals = [
//     { id: 1, name: 'Gold', quantity: '500 kg', value: '$25,000,000' },
//     { id: 2, name: 'Silver', quantity: '1000 kg', value: '$15,000,000' },
//     { id: 3, name: 'Platinum', quantity: '200 kg', value: '$12,000,000' },
//     // Add more minerals as needed
//   ];

//   return (
//     <div>
//       <h3>Blockchain Content of Mined Precious Minerals</h3>
//       <Row>
//         {minedMinerals.map(mineral => (
//           <Col md={4} key={mineral.id}>
//             <Card className="mb-4">
//               <Card.Body>
//                 <Card.Title>{mineral.name}</Card.Title>
//                 <Card.Text>
//                   Quantity: {mineral.quantity}
//                 </Card.Text>
//                 <Card.Text>
//                   Value: {mineral.value}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default MinedMineralsScreen;


import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
// import './MinedMineralsScreen.css'; // Assuming you add custom styles here

const MinedMineralsScreen = () => {
  const minedMinerals = [
    { id: 1, name: 'Gold', quantity: '500 kg', value: '$25,000,000' },
    { id: 2, name: 'Silver', quantity: '1000 kg', value: '$15,000,000' },
    { id: 3, name: 'Platinum', quantity: '200 kg', value: '$12,000,000' },
    // Add more minerals as needed
  ];

  const additionalCards = [
    { id: 4, name: 'Diamond', quantity: '50 kg', value: '$75,000,000' },
    { id: 5, name: 'Emerald', quantity: '25 kg', value: '$30,000,000' },
    { id: 6, name: 'Ruby', quantity: '10 kg', value: '$20,000,000' },
  ];

  return (
    <div className="mined-minerals-screen">
      <Container fluid>
        <h3 className="text-center mb-4">Blockchain Content of Mined Precious Minerals</h3>
        
        {/* Existing cards */}
        <Row>
          {minedMinerals.map((mineral) => (
            <Col md={4} key={mineral.id}>
              <Card className="mb-4 shadow-sm mined-minerals-card">
                <Card.Body>
                  <Card.Title className="text-primary">{mineral.name}</Card.Title>
                  <Card.Text>
                    <strong>Quantity:</strong> {mineral.quantity}
                  </Card.Text>
                  <Card.Text>
                    <strong>Value:</strong> {mineral.value}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional horizontally arranged cards */}
        <Row className="mt-4">
          {additionalCards.map((card) => (
            <Col md={4} key={card.id}>
              <Card className="shadow-sm mined-minerals-card">
                <Card.Body>
                  <Card.Title className="text-success">{card.name}</Card.Title>
                  <Card.Text>
                    <strong>Quantity:</strong> {card.quantity}
                  </Card.Text>
                  <Card.Text>
                    <strong>Value:</strong> {card.value}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MinedMineralsScreen;
