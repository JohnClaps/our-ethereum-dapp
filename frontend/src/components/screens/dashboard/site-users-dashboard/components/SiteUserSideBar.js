import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';
import { FaHome, FaUser, FaChartLine, FaWrench, FaSignOutAlt, FaBell, FaSearch, FaLink, FaBalanceScale, FaDesktop, FaHammer, FaReceipt, FaBookOpen, FaLock, FaUsers } from 'react-icons/fa';
import EnvironmentalCompliance from './EnvironmentalCompliance';
import profile from '../assets/profile.jpg';
import '../styles/Sidebar.css'; // Custom styling
import EquipmentPerformance from '../components/EquipmentPerformance';
import EquipmentUsageReport from '../components/EquipmentUsageReport.js';
import LicensePermits from '../components/LicensePermits';
import LogMineralExtraction from '../components/LogMineralExtraction';
import MineralInventory from '../components/MineralInventory';
import ProductionReport from '../components/ProductionReport';
import SafetyInspection from '../components/SafetyInspection';
import ScheduleMaintenance from '../components/ScheduleMaintenance.js';
import SupervisorCommunication from '../components/SupervisorCommunication';
import SiteUserHomeScreen from '../components/SiteUserHomeScreen';
import SiteUserHeaderSection from '../components/SiteUserHeaderSection.js';
import SiteUserMainLayout from '../components/SiteUserMainLayout.js';

export const SiteUserSideBar = () => {
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
      case 'SiteUserHomeScreen':
        return <SiteUserHomeScreen/>;
      case 'EnvironmentalCompliance':
        return <EnvironmentalCompliance/>;
      case 'EquipmentPerformance':
        return <EquipmentPerformance/>;
      case 'EquipmentUsageReport':
        return <EquipmentUsageReport />;
      case 'LicensePermits':
        return <LicensePermits />;
      case 'LogMineralExtraction':
        return <LogMineralExtraction />;
      case 'MineralInventory':
        return <MineralInventory/>;
      case 'ProductionReport':
        return <ProductionReport/>;
      case 'SafetyInspection':
        return <SafetyInspection/>;
      case 'ScheduleMaintenance':
        return <ScheduleMaintenance/>;
      case 'SupervisorCommunication':
        return <SupervisorCommunication/>;    
      default:
        return <SiteUserHomeScreen />;
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
      <SiteUserHeaderSection/>
      <SiteUserMainLayout
      handleMenuClick={handleMenuClick}
      renderContent={renderContent}
      quickLinks={quickLinks}
      />

    </div>
  );
};
export default SiteUserSideBar;
