import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SecurityScreen = ({ onOptionSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Security</Text>

      {/* Security Options */}
      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Change Password')}>
        <Ionicons name="lock-closed-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Two-Factor Authentication')}>
        <Ionicons name="shield-checkmark-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Two-Factor Authentication</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Security Logs')}>
        <Ionicons name="document-text-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Security Logs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Manage Devices')}>
        <Ionicons name="tablet-landscape-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Manage Devices</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Activity History')}>
        <Ionicons name="time-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Activity History</Text>
      </TouchableOpacity>

      {/* Support Button */}
      <TouchableOpacity style={styles.supportButton} onPress={() => onOptionSelect('Contact Support')}>
        <Ionicons name="help-circle-outline" size={24} color="white" />
        <Text style={styles.supportText}>Contact Support</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F1',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#004D40',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#B2DFDB',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 18,
    color: '#004D40',
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#1976D2',
    borderRadius: 10,
    marginTop: 30,
  },
  supportText: {
    marginLeft: 15,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SecurityScreen;
