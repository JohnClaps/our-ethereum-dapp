import React, { useState } from "react";
import { Form, Button, Container, Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { create } from 'ipfs-http-client'; // Import IPFS client

const ipfsClient = create({ url: 'https://ipfs.infura.io:5001/api/v0' }); // IPFS client configuration

export default function SignUpForm() {
  const [step, setStep] = useState(1); // Controls form steps
  const [formData, setFormData] = useState({
    username: "",
    metamaskId: "",
    phoneNumber: "",
    licenseNumber: ""
  });

  const [errors, setErrors] = useState({}); // Store validation errors

  // Regular expressions for validation
  const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
  const metamaskIdRegex = /^0x[a-fA-F0-9]{40}$/;
  const phoneNumberRegex = /^[0-9]{10,}$/;
  const licenseNumberRegex = /^[A-Za-z0-9]{5,}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const validateStep = () => {
    let currentErrors = {};
    if (step === 1 && !usernameRegex.test(formData.username)) {
      currentErrors.username = "Username must be at least 3 characters and contain only alphanumeric characters.";
    }
    if (step === 2 && !metamaskIdRegex.test(formData.metamaskId)) {
      currentErrors.metamaskId = "Invalid Metamask ID. Must be a valid 42-character hexadecimal address starting with 0x.";
    }
    if (step === 3 && !phoneNumberRegex.test(formData.phoneNumber)) {
      currentErrors.phoneNumber = "Phone number must contain at least 10 digits.";
    }
    if (step === 4 && !licenseNumberRegex.test(formData.licenseNumber)) {
      currentErrors.licenseNumber = "License number must contain at least 5 alphanumeric characters.";
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      try {
        // Upload the form data to IPFS
        const { path } = await ipfsClient.add(JSON.stringify(formData));
        const ipfsHash = path; // Get IPFS CID

        //Backend API to handle this request
        const response = await fetch('https://localhost:5000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ipfsHash, ...formData })
        });

        if (response.ok) {
          console.log("Account created successfully");
        } else {
          console.error("Failed to create an account");
        }
      } catch (error) {
        console.error("Failed to register successfully:", error);
      }
    }
  };

  // Progress bar percentage
  const progress = (step / 4) * 100;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ maxHeight: "100vh", padding: "20px" }}>
      <Row className="w-100">
        <Col md={8} lg={6} xl={10} className="mx-auto">
          <h3 className="text-center mb-4" style={styles.title}>
            Create an Account
          </h3>

          {/* Progress Bar */}
          <ProgressBar now={progress} label={`${step}/4`} className="mb-4" style={styles.progressBar} />

          <Form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded" style={styles.form}>
            {step === 1 && (
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  isInvalid={!!errors.username}
                  style={styles.input}
                />
                <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
              </Form.Group>
            )}

            {step === 2 && (
              <Form.Group controlId="formMetamaskId">
                <Form.Label>Metamask ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Metamask ID"
                  name="metamaskId"
                  value={formData.metamaskId}
                  onChange={handleInputChange}
                  required
                  isInvalid={!!errors.metamaskId}
                  style={styles.input}
                />
                <Form.Control.Feedback type="invalid">{errors.metamaskId}</Form.Control.Feedback>
              </Form.Group>
            )}

            {step === 3 && (
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  isInvalid={!!errors.phoneNumber}
                  style={styles.input}
                />
                <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
              </Form.Group>
            )}

            {step === 4 && (
              <Form.Group controlId="formLicenseNumber">
                <Form.Label>License Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your license number"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                  required
                  isInvalid={!!errors.licenseNumber}
                  style={styles.input}
                />
                <Form.Control.Feedback type="invalid">{errors.licenseNumber}</Form.Control.Feedback>
              </Form.Group>
            )}

            {/* Navigation buttons */}
            <div className="d-flex justify-content-between mt-4">
              {step > 1 && (
                <Button variant="outline-secondary" onClick={handlePreviousStep} style={styles.button}>
                  Previous
                </Button>
              )}
              {step < 4 ? (
                <Button variant="primary" onClick={handleNextStep} style={styles.button}>
                  Next
                </Button>
              ) : (
                <Button variant="success" type="submit" style={styles.button}>
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  form: {
    padding: "24px", // Increased padding for better spacing
    borderRadius: "12px", // Softer corners for a modern look
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)", // More pronounced shadow for depth
    backgroundColor: "#fff", // Clean background
    width: "100%",
    maxWidth: "600px", // Set a max-width for larger screens
  },
  input: {
    width: "100%",
    padding: "14px",
    fontSize: "16px",
    border: "1px solid #ced4da", // Slightly lighter border
    borderRadius: "8px", // Softer corners for inputs
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)", // Softer shadow for inputs
  },
  title: {
    marginBottom: "24px",
    fontWeight: "700", // Slightly bolder title for emphasis
    fontSize: "28px",
    color: "#333",
  },
  progressBar: {
    height: "10px", // Thicker progress bar for visibility
    borderRadius: "5px", // Softer corners
  },
  button: {
    width: "48%", // Buttons with some space between
    padding: "12px", 
    fontSize: "16px",
    fontWeight: "600", // Bolder text for buttons
  },
};
