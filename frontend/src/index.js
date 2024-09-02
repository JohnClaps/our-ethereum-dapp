// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Dapp } from "./components/Dapp";

// // We import bootstrap here, but you can remove if you want
// import "bootstrap/dist/css/bootstrap.css";

// // This is the entry point of your application, but it just renders the Dapp
// // react component. All of the logic is contained in it.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <Dapp />
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated imports
import ConnectWallet from "./components/ConnectWallet";
import UserPage from "./components/UserPage";
import { Dapp } from "./components/Dapp"; // Import Dapp component
import Register from './components/screens/Authentication/Register'; 
import "bootstrap/dist/css/bootstrap.css";

// This is the entry point of your application, which now includes routing logic.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Updated Switch to Routes */}
        <Route path="/" element={<ConnectWallet />} /> {/* Updated component prop to element */}
        <Route path="/user/:userAddress" element={<UserPage />} /> {/* Updated component prop to element */}
        <Route path="/dapp" element={<Dapp />} /> {/* Updated component prop to element */}
      </Routes>
    </Router>
  </React.StrictMode>
);
