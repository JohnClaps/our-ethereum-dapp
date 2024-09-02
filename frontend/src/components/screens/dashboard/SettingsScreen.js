import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Define the type for the props
const SettingsScreen = ({ onOptionSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Settings</Text>

      {/* Settings Options */}
      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Profile')}>
        <Ionicons name="person-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Notifications')}>
        <Ionicons name="notifications-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Privacy')}>
        <Ionicons name="lock-closed-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Account')}>
        <Ionicons name="settings-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Help')}>
        <Ionicons name="help-circle-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Help</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => onOptionSelect('Logout')}>
        <Ionicons name="log-out-outline" size={24} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1', // Light background color for better readability
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#004D40', // Dark green color for text
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#B2DFDB', // Light green color for separator
  },
  optionText: {
    marginLeft: 15,
    fontSize: 18,
    color: '#004D40', // Dark green color for text
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#D32F2F', // Red color for logout button
    borderRadius: 10,
    marginTop: 30,
  },
  logoutText: {
    marginLeft: 15,
    fontSize: 18,
    color: 'white', // White text for logout button
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
