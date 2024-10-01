import React, { useState } from "react";
import { DropdownButton, Dropdown, Carousel, Modal, Button,Form } from "react-bootstrap";
import metamaskLogo from "../images/metamaskLogo.png";
import excavatorIcon from "../images/excavatorIcon.png";
import carouselImage2 from "../images/carouselImage2.jpg";
import carouselImage3 from "../images/carouselImage3.jpg";
import carouselImage1 from "../images/carouselImage1.jpg";
import { NetworkErrorMessage } from "./NetworkErrorMessage";
import SignUpForm from "../screens/authentication/SignUpForm";
import VerifierSideBar from "../screens/dashboard/govt-dashboard/VerifierSideBar";
import SiteAmdinSidebar from "../screens/dashboard/site-admin/components/SiteAdminSideBar";
import SiteUserSideBar from "../screens/dashboard/site-users-dashboard/SiteUserSideBar";
import axios from "axios";

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [userRole, setUserRole] = useState("");
  
  // Handle MetaMask login and then initiate 2FA
  const handleMetaMaskLogin = async () => {
    // MetaMask login logic
    await connectWallet();
    // After MetaMask login, fetch phone from DB and send OTP
    const response = await axios.post("/api/send-otp", { phone });
    if (response.data.success) {
      setOtpSent(true);
      setShowOtpModal(true);
    } else {
      alert("Failed to send OTP");
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = async () => {
    const response = await axios.post("/api/verify-otp", { phone, otp });
    if (response.data.success) {
      // OTP verified, fetch user role and display the right dashboard
      const userResponse = await axios.get(`/api/get-user-role?phone=${phone}`);
      const role = userResponse.data.role;
      setUserRole(role);
      setShowOtpModal(false);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleSignUpClick = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  return (
    <div style={styles.container}>
      {/* Top right corner for Metamask and Sign Up buttons */}
      <div style={styles.topBar}>
        <div style={styles.authButtons}>
          {networkError && <NetworkErrorMessage message={networkError} dismiss={dismiss} />}
          <input type="text" placeholder="Search..." style={styles.searchBar} />
          <button style={styles.authButton} onClick={connectWallet}>
            <img src={metamaskLogo} alt="Metamask Logo" style={styles.logo} />
            Login with Metamask
          </button>
          <button style={styles.authButton} onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Display dashboard if userRole is available */}
      {userRole && (
        <div>
          {userRole === "admin" && <SiteAmdinSidebar />}
          {userRole === "miner" && <SiteUserSideBar />}
          {userRole === "verifier" && <VerifierSideBar />}
        </div>
      )}

      {/* OTP Verification Modal */}
      <Modal show={showOtpModal} onHide={() => setShowOtpModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formOtp">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter the OTP sent to your phone"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleVerifyOtp}>
            Verify OTP
          </Button>
        </Modal.Body>
      </Modal>

{/* //       {/* Top left corner for excavator icon and dropdown menus */}
       <div style={styles.accordionContainer}>
        <img src={excavatorIcon} alt="Excavator Icon" style={styles.excavatorIcon} />
         <DropdownButton id="dropdown-basic-button" title="License" style={styles.dropdown}>
           <Dropdown.Item href="https://mitc.mw/invest/index.php/investment-climate/laws-and-regulations">View Licenses</Dropdown.Item>
           <Dropdown.Item href="https://malawitradeportal.com/index.php?r=searchProcedure/view1&id=101">Apply for a License</Dropdown.Item>
           <Dropdown.Item href="https://malawitradeportal.com/index.php?r=searchProcedure/view1&id=101">Renew License</Dropdown.Item>
         </DropdownButton>
         <DropdownButton id="dropdown-basic-button" title="Minerals" style={styles.dropdown}>
           <Dropdown.Item href="https://www.mining.gov.mw/index.php/about-us/minerals-found-in-malawi">View Minerals</Dropdown.Item>
           <Dropdown.Item href="https://edf.mw/index.php/pmmu/about-pmmu">Market Prices</Dropdown.Item>
         <Dropdown.Item href="https://www.mining.gov.mw/index.php/about-us/minerals-found-in-malawi">Minerals Info</Dropdown.Item>
         </DropdownButton>
         <DropdownButton id="dropdown-basic-button" title="Regulatory Framework" style={styles.dropdown}>
         <Dropdown.Item href="https://npc.mw/wp-content/uploads/2020/07/malawi-mines-minerals-policy-2013.pdf">Compliance</Dropdown.Item>
         <Dropdown.Item href="https://www.mining.gov.mw/index.php/resouces/downloads/policies">Policies</Dropdown.Item>
         </DropdownButton>
         <DropdownButton id="dropdown-basic-button" title="Information" style={styles.dropdown}>
         <Dropdown.Item href="https://www.mining.gov.mw/index.php/resouces/news-and-media/top-news">News</Dropdown.Item>
         <Dropdown.Item href="https://www.mining.gov.mw/">Reports</Dropdown.Item>
         <Dropdown.Item href="https://www.mining.gov.mw/index.php/component/sppagebuilder/39-frequently-asked-questions-faq-s">FAQs</Dropdown.Item>
      </DropdownButton>
    </div>

       {/* Main content area */}
       <div style={styles.content}>
         <h1>Welcome to Blockchain Mining Monitor</h1>
         <p>Manage your mining transactions securely and efficiently.</p>

         {/* Carousel below the welcome message */}
         <Carousel style={styles.carousel}>
           <Carousel.Item>
             <img className="d-block w-100" src={carouselImage1} alt="First slide" style={styles.carouselImage} />
             <Carousel.Caption>
               <h3>First Slide Label</h3>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img className="d-block w-100" src={carouselImage2} alt="Second slide" style={styles.carouselImage} />
             <Carousel.Caption>
              <h3>Second Slide Label</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
             <img className="d-block w-100" src={carouselImage3} alt="Third slide" style={styles.carouselImage} />
             <Carousel.Caption>
               <h3>Third Slide Label</h3>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
             </Carousel.Caption>
           </Carousel.Item>
         </Carousel>
       </div>

       {/* Footer */}
      <footer style={styles.footer}>
         <p>&copy; 2024 Blockchain Mining Monitor | <a href="/privacy-policy" style={styles.footerLink}>Privacy Policy</a> | <a href="/contact" style={styles.footerLink}>Contact Us</a></p>
       </footer>

       {/* Sign Up Modal */}
      <Modal show={showSignUp} onHide={handleCloseSignUp} centered>
         <Modal.Header closeButton>
         </Modal.Header>
           <Modal.Title>Sign Up</Modal.Title>
         <Modal.Body>
           <SignUpForm />
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleCloseSignUp}>
             Close
           </Button>
         </Modal.Footer>
       </Modal>
     </div>
   );
 }

 const styles = {
   container: {
     position: "relative",
     width: "100%",
     height: "100vh",
     background: "linear-gradient(135deg, #2c3e50, #4ca1af)",
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
     color: "#fff",
     textAlign: "center",
   },
   topBar: {
     position: "absolute",
     top: 20,
     right: 20,
    display: "flex",
    gap: "10px",
  },
  accordionContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    display: "flex",
    gap: "10px",
    alignItems: "center",
    dropdown: {
    backgroundColor: "#415a77",
    borderColor: "#415a77",
    color: "#fff",
    borderRadius: "5px",
  },
    fontSize: "16px",
  },
  authButtons: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  searchBar: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    flex: 1,
  },
  authButton: {
    backgroundColor: "#415a77",
    color: "#fff",
    border: "none",
    alignItems: "center",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    gap: "10px",
  },
  logo: {
    width: "20px",
    height: "20px",
  },
  excavatorIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  content: {
    textAlign: "center",
    padding: "20px",
  },
  carousel: {
    marginTop: "20px",
    width: "80%",
  },
  carouselImage: {
    maxHeight: "400px",
    objectFit: "cover",
  },
  errorContainer: {
    position: "absolute",
    top: "50px",
    width: "100%",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#415a77",
    width: "100%",
    textAlign: "center",
    padding: "10px 0",
    color: "#fff",
    position: "absolute",
    bottom: 0,
  },
  footerLink: {
    color: "#fff",
    textDecoration: "none",
  },
};
export default ConnectWallet; 
