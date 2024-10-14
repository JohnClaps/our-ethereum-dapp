import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';
import { FaHome, FaUser, FaChartLine,FaLock, FaWrench, FaSignOutAlt, FaBell, FaSearch, FaCreditCard, FaLink } from 'react-icons/fa';
import profile from "../assets/profile.jpeg";
import '../styles/Sidebar.css';
import AuthenticationScreen from './AuthenticationScreen';
import ExportProcessMonitoringScreen from './ExportProcessMonitoringScreen';
import MineralSalesAuditScreen from './MineralSalesAuditScreen';
import ProductionDataVerificationScreen from './ProductionDataVerificationScreen';
import RoyaltiesPaymentVerificationScreen from './RoyaltiesPaymentVerificationScreen';
import VerifierHomeScreen from './VerifierHomeScreen';
import HeaderSection from '../../site-admin/components/SiteAdminHeaderSection';
import VerifierMainLayout from '../components/VerifierMainLayout';
import '../../site-admin/styles/Header.css'
import VerifierHeaderSection from '../components/VerifierHeaderSection';

export const VerifierSideBar = () => {
  const [content, setContent] = useState('HomeScreen');
  const [activeQuickLink, setActiveQuickLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuClick = (screen) => {
    if (screen === 'Logout') {
      const isConfirmed = window.confirm('Are you sure you want to log out?');
      if (isConfirmed) {
        // Clear user session data
        localStorage.removeItem('user'); // or wherever your user session data is stored
        console.log("User logged out.");
        
        // Redirect the user to the login page
        window.location.href = '/'; // Change this to your login page URL
      }
    } else {
      setContent(screen);
      setActiveQuickLink(null); // Reset quick link selection when main menu changes
    }
  };
  const renderContent = () => {
    switch (content) {
      case 'VerifierHomeScreen':
        return <VerifierHomeScreen/>
      case 'AuthenticationScreen':
        return <AuthenticationScreen/>;
      case 'RoyaltiesPaymentVerificationScreen':
        return <RoyaltiesPaymentVerificationScreen/>;
      case 'ExportProcessMonitoringScreen':
        return <ExportProcessMonitoringScreen />;
      case 'MineralSalesAuditScreen':
        return <MineralSalesAuditScreen />;
      case 'ProductionDataVerificationScreen':
        return <ProductionDataVerificationScreen />;
      default:
        return <VerifierHomeScreen />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const quickLinks = [
    { id: 1, title: 'Minerals overview', content: 'Get insight into the minerals distribution across the country.' },
    { id: 2, title: 'Productionv insights', content: 'Check the current status of all mining systems and operations.' },
    { id: 3, title: 'Users', content: 'Monitor user activities and manage permissions efficiently.' },
    { id: 4, title: 'Exports', content: 'Review all maintenance activities and logs for troubleshooting.' },
    { id: 5, title: 'Sales', content: 'View the latest sales transactions and get insight into market trends.View the latest sales transactions and get insight into market trendsView the latest sales transactions and get insight into market trends' }
  ];

  return (
    <div className="sidebar-container">
      {/* Top Bar */}
      <VerifierHeaderSection/>
      <VerifierMainLayout
       handleMenuClick={handleMenuClick}
       renderContent={renderContent}
       quickLinks={quickLinks}
      />
    </div>
  );
};
export default VerifierSideBar;
