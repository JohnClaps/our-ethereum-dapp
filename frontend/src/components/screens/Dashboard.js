import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Sidebar from './Sidebar'; // Sidebar component
import UserManagement from './UserManagement'; // Import your screen components here
import SystemMonitoring from './SystemMonitoring';
import Maintenance from './Maintenance';
import Security from './Security';
import Settings from './Settings';
import Reports from './Reports';
import Support from './Support';
import DashboardContent from './DashboardContent';
const Dashboard = () => {

  const [activePage, setActivePage] = useState('Dashboard');

  // Define the onMenuClick function
  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  // The renderContent function returns the corresponding screen component
  const renderContent = () => {
    switch (activePage) {
      case 'User Management':
        return <UserManagement />;
      case 'System Monitoring':
        return <SystemMonitoring />;
      case 'Maintenance':
        return <Maintenance />;
      case 'Security':
        return <Security />;
      case 'Settings':
        return <Settings />;
      case 'Reports':
        return <Reports />;
      case 'Support':
        return <Support />;
      case 'Dashboard':
      default:
        return <DashboardContent />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Pass handleMenuClick to the Sidebar as the onMenuClick prop */}
      <Sidebar onMenuClick={handleMenuClick} />
      <View style={styles.content}>
        {renderContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
});

export default Dashboard;
