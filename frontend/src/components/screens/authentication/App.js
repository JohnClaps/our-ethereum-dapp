import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SiteAdminSideBar from '../dashboard/site-admin/components/SiteAdminSideBar';
import VerifierSideBar from '../dashboard/verifier/components/VerifierSideBar';
import SiteUserSideBar from '../dashboard/site-users-dashboard/components/SiteUserSideBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<SiteAdminSideBar/>} />
        <Route path="/user" element={<SiteUserSideBar />} />
        <Route path="/verifier" element={<VerifierSideBar />} />
      </Routes>
    </Router>
  );
};

export default App;
