import React, { useState, useEffect } from 'react';
import { ListGroup, Container, Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';
import { FaHome, FaUser, FaChartLine, FaWrench, FaShieldAlt, FaCog, FaFileAlt, FaQuestionCircle, FaSignOutAlt, FaBell, FaSearch, FaCreditCard, FaLink } from 'react-icons/fa';
import profile from '../assets/profile.jpg';
import HomeScreen from './HomeScreen';
import ReportsScreen from "./ReportsScreen";
import MaintenanceScreen from './MaintenanceScreen';
import SettingsScreen from './SettingsScreen';
import SecurityScreen from './SecurityScreen';
import SupportScreen from './SupportScreen';
import UserManagementScreen from './UserManagementScreen';
import SystemMonitoringScreen from "./SystemMonitoringScreen";
import RoyaltiesPaymentScreen from './RoyaltiesPaymentScreen';
import AnalyticsScreen from "./AnalyticsScreen";
import '../styles/Sidebar.css'; // Custom styling
import SiteAdminHeaderSection from '../components/SiteAdminHeaderSection';
import SiteAdminMainLayout from './SiteAdminMainLayout';


export const SiteAdminSideBar = () => {
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
      case 'HomeScreen':
        return <HomeScreen/>;
      case 'RoyaltiesPaymentScreen':
        return <RoyaltiesPaymentScreen/>;
      case 'AnalyticsScreen':
        return <AnalyticsScreen />;
      case 'UserManagementScreen':
        return <UserManagementScreen />;
      case 'SystemMonitoringScreen':
        return <SystemMonitoringScreen />;
      case 'MaintenanceScreen':
        return <MaintenanceScreen />;
      case 'SecurityScreen':
        return <SecurityScreen />;
      case 'SettingsScreen':
        return <SettingsScreen />;
      case 'ReportsScreen':
        return <ReportsScreen />;
      case 'SupportScreen':
        return <SupportScreen />;
      default:
        return <HomeScreen />;
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
    { id: 1, title: 'Quick Report', content: 'Generate a quick report to view recent transactions and analytics.' },
    { id: 2, title: 'System Status', content: 'Check the current status of all mining systems and operations.' },
    { id: 3, title: 'User Activity', content: 'Monitor user activities and manage permissions efficiently.' },
    { id: 4, title: 'Maintenance Logs', content: 'Review all maintenance activities and logs for troubleshooting.' },
    { id: 5, title: 'Security Alerts', content: 'View the latest security alerts and take necessary actions.' }
  ];

  return (
    <div className="sidebar-container">
            <SiteAdminHeaderSection/>
            <SiteAdminMainLayout
            handleMenuClick={handleMenuClick}
            renderContent={renderContent}
            quickLinks={quickLinks}
            />
    </div>
  );
};

export default SiteAdminSideBar;

