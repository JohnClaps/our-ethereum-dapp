// import React from "react";
// import metamaskLogo from "./metamaskLogo.png"; // Ensure the Metamask logo image is imported
// import excavatorIcon from "./excavatorIcon.png"; // Import the excavator icon image
// import carouselImage1 from "./carouselImage1.jpg";
// import carouselImage2 from "./carouselImage2.jpg";
// import carouselImage3 from "./carouselImage3.jpg";
// import { NetworkErrorMessage } from "./NetworkErrorMessage";
// import { DropdownButton, Dropdown, Carousel } from "react-bootstrap"; // Import Carousel from react-bootstrap

// export function ConnectWallet({ connectWallet, networkError, dismiss }) {
//   return (
//     <div style={styles.container}>
//       {/* Top right corner for Metamask and Sign Up buttons */}
//       <div style={styles.topBar}>
//         <div style={styles.authButtons}>
//           {/* Search Bar */}
//           <input
//             type="text"
//             placeholder="Search..."
//             style={styles.searchBar}
//           />

//           {/* Metamask Login and Sign Up buttons */}
//           <button style={styles.authButton} onClick={connectWallet}>
//             <img src={metamaskLogo} alt="Metamask Logo" style={styles.logo} />
//             Login with Metamask
//           </button>
//           <button style={styles.authButton}>Sign Up</button>
//         </div>
//       </div>

//       {/* Top left corner for excavator icon and accordion buttons */}
//       <div style={styles.accordionContainer}>
//         <img src={excavatorIcon} alt="Excavator Icon" style={styles.excavatorIcon} />
//         <DropdownButton id="dropdown-basic-button" title="License" style={styles.dropdown}>
//           <Dropdown.Item href="#/action-1">View Licenses</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Apply for a License</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Renew License</Dropdown.Item>
//         </DropdownButton>
//         <DropdownButton id="dropdown-basic-button" title="Minerals" style={styles.dropdown}>
//           <Dropdown.Item href="#/action-1">View Minerals</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Market Prices</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Minerals Info</Dropdown.Item>
//         </DropdownButton>
//         <DropdownButton id="dropdown-basic-button" title="Regulatory Framework" style={styles.dropdown}>
//           <Dropdown.Item href="#/action-1">Regulations</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Compliance</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">Policies</Dropdown.Item>
//         </DropdownButton>
//         <DropdownButton id="dropdown-basic-button" title="Information" style={styles.dropdown}>
//           <Dropdown.Item href="#/action-1">News</Dropdown.Item>
//           <Dropdown.Item href="#/action-2">Reports</Dropdown.Item>
//           <Dropdown.Item href="#/action-3">FAQs</Dropdown.Item>
//         </DropdownButton>
//       </div>

//       {/* Network Error Message */}
//       {networkError && (
//         <div style={styles.errorContainer}>
//           <NetworkErrorMessage message={networkError} dismiss={dismiss} />
//         </div>
//       )}

//       {/* Central content */}
//       <div style={styles.content}>
//         <h1>Welcome to Blockchain Mining Monitor</h1>
//         <p>Manage your mining transactions securely and efficiently.</p>

//         {/* Carousel below the welcome message */}
//         <Carousel style={styles.carousel}>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={carouselImage1}
//               alt="First slide"
//               style={styles.carouselImage}
//             />
//             <Carousel.Caption>
//               <h3>First Slide Label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               alt="Second slide"
//               className="d-block w-100"
//               src={carouselImage2}
//               style={styles.carouselImage}
//             />
//             <Carousel.Caption>
//               <h3>Second Slide Label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={carouselImage3}
//               alt="Third slide"
//               style={styles.carouselImage}
//             />
//             <Carousel.Caption>
//               <h3>Third Slide Label</h3>
//               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>

//       {/* Footer */}
//       <div style={styles.footer}>
//         <footer>
//           &copy; 2024 @ gov.mw
//         </footer>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     position: "relative",
//     width: "100%",
//     height: "100vh",
//     background: "linear-gradient(135deg, #2c3e50, #4ca1af)", // Blockchain background gradient
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#fff", // Important HCI design content: better contrast
//   },
//   topBar: {
//     position: "absolute",
//     top: 20,
//     right: 20,
//     display: "flex",
//     gap: "10px",
//   },
//   accordionContainer: {
//     position: "absolute",
//     top: 20,
//     left: 20,
//     display: "flex",
//     gap: "10px",
//     alignItems: "center",
//   },
//   dropdown: {
//     backgroundColor: "#415a77",
//     borderColor: "#415a77",
//     color: "#fff",
//     borderRadius: "5px",
//     fontSize: "16px",
//   },
//   authButtons: {
//     display: "flex",
//     gap: "10px",
//     alignItems: "center",
//   },
//   searchBar: {
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//     flex: 1,
//   },
//   authButton: {
//     backgroundColor: "#415a77",
//     color: "#fff",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "16px",
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   },
//   logo: {
//     width: "20px",
//     height: "20px",
//   },
//   excavatorIcon: {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     marginRight: "10px",
//   },
//   content: {
//     textAlign: "center",
//     padding: "20px",
//   },
//   carousel: {
//     marginTop: "20px",
//     width: "80%",
//   },
//   carouselImage: {
//     maxHeight: "400px",
//     objectFit: "cover",
//     errorContainer: {
//     position: "absolute",
//     top: "50px",
//   },
//     width: "100%",
//     textAlign: "center",
//   },
//   footer: {
//     backgroundColor: "#415a77",
//     width: "100%",
//     textAlign: "center",
//     padding: "10px 0",
//     color: "#fff",
//     position: "absolute",
//     bottom: 0,
//   },
// };

// export default ConnectWallet;


import { useState,React } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import metamaskLogo from "./metamaskLogo.png";
import excavatorIcon from "./excavatorIcon.png";
import carouselImage1 from "./carouselImage1.jpg";
import carouselImage2 from "./carouselImage2.jpg";
import carouselImage3 from "./carouselImage3.jpg";
import { NetworkErrorMessage } from "./NetworkErrorMessage";
import { DropdownButton, Dropdown, Carousel } from "react-bootstrap";

export function ConnectWallet({ networkError, dismiss }) {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        // Redirect to user-specific page
        navigate(`/user/${accounts[0]}`);
      } catch (error) {
        console.error("Error connecting to Metamask", error);
      }
    } else {
      console.error("Metamask not found");
    }
  };

  return (
    <div style={styles.container}>
      {/* Top right corner for Metamask and Sign Up buttons */}
      <div style={styles.topBar}>
        <div style={styles.authButtons}>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            style={styles.searchBar}
          />

          {/* Metamask Login and Sign Up buttons */}
          <button style={styles.authButton} onClick={connectWallet}>
            <img src={metamaskLogo} alt="Metamask Logo" style={styles.logo} />
            Login with Metamask
          </button>
          <button style={styles.authButton} onClick={""} >Sign Up</button>
        </div>
      </div>

      {/* Top left corner for excavator icon and accordion buttons */}
      <div style={styles.accordionContainer}>
        <img src={excavatorIcon} alt="Excavator Icon" style={styles.excavatorIcon} />
        <DropdownButton id="dropdown-basic-button" title="License" style={styles.dropdown}>
          <Dropdown.Item href="#/action-1">View Licenses</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Apply for a License</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Renew License</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Minerals" style={styles.dropdown}>
          <Dropdown.Item href="#/action-1">View Minerals</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Market Prices</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Minerals Info</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Regulatory Framework" style={styles.dropdown}>
          <Dropdown.Item href="#/action-1">Regulations</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Compliance</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Policies</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Information" style={styles.dropdown}>
          <Dropdown.Item href="#/action-1">News</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Reports</Dropdown.Item>
          <Dropdown.Item href="#/action-3">FAQs</Dropdown.Item>
        </DropdownButton>
      </div>

      {/* Network Error Message */}
      {networkError && (
        <div style={styles.errorContainer}>
          <NetworkErrorMessage message={networkError} dismiss={dismiss} />
        </div>
      )}

      {/* Central content */}
      <div style={styles.content}>
        <h1>Welcome to Blockchain Mining Monitor</h1>
        <p>Manage your mining transactions securely and efficiently.</p>

        {/* Carousel below the welcome message */}
        <Carousel style={styles.carousel}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselImage1}
              alt="First slide"
              style={styles.carouselImage}
            />
            <Carousel.Caption>
              <h3>First Slide Label</h3>
              <p>Our trusted blockchain powered mining transactions monitoring system.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              alt="Second slide"
              className="d-block w-100"
              src={carouselImage2}
              style={styles.carouselImage}
            />
            <Carousel.Caption>
              <h3>Mining Industry</h3>
              <p>The road towards MW2063 agenda</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carouselImage3}
              alt="Third slide"
              style={styles.carouselImage}
            />
            <Carousel.Caption>
              <h3>Miners</h3>
              <p>Malawi,the warm heart of Africa accommodates both foreing and local investors.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <footer>
          &copy; 2024 @ gov.mw
        </footer>
      </div>
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
    alignItems: "center",
    color: "#fff",
    justifyContent: "center",
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
  },
  dropdown: {
    backgroundColor: "#415a77",
    borderColor: "#415a77",
    color: "#fff",
    borderRadius: "5px",
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
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
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
    width: "100%",
  },
  errorContainer: {
    position: "absolute",
    top: "50px",
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
};

export default ConnectWallet;
