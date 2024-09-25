import React, { useState } from 'react';
import { Container, Button, Card, Alert } from 'react-bootstrap';

const RoyaltiesPaymentScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handlePayment = () => {
    if (!selectedOption) {
      setShowAlert(true);
      return;
    }
    alert(`You selected ${selectedOption}. Proceeding with payment...`);
    // Add your payment handling logic here
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Royalties Payment</h2>
      
      {showAlert && <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
        Please select a payment option.
      </Alert>}
      
      <Card
        className={`mb-3 ${selectedOption === 'NB Bank' ? 'border-success' : ''}`}
        onClick={() => setSelectedOption('NB Bank')}
        style={{ cursor: 'pointer' }}
      >
        <Card.Body className="text-center">
          NB Bank
        </Card.Body>
      </Card>

      <Card
        className={`mb-3 ${selectedOption === 'Airtel Money' ? 'border-success' : ''}`}
        onClick={() => setSelectedOption('Airtel Money')}
        style={{ cursor: 'pointer' }}
      >
        <Card.Body className="text-center">
          Airtel Money
        </Card.Body>
      </Card>

      <Card
        className={`mb-3 ${selectedOption === 'TNM Mpamba' ? 'border-success' : ''}`}
        onClick={() => setSelectedOption('TNM Mpamba')}
        style={{ cursor: 'pointer' }}
      >
        <Card.Body className="text-center">
          TNM Mpamba
        </Card.Body>
      </Card>

      <Button variant="success" className="w-100 mt-4" onClick={handlePayment}>
        Proceed to Pay
      </Button>
    </Container>
  );
};

export default RoyaltiesPaymentScreen;
