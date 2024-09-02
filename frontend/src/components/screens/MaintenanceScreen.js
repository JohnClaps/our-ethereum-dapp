import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MaintenanceScreen = ({ onOptionSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Maintenance</Text>

      {/* Maintenance Options */}
      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Scheduled Tasks')}>
        <Ionicons name="calendar-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Scheduled Tasks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Equipment Check')}>
        <Ionicons name="cog-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Equipment Check</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Maintenance Logs')}>
        <Ionicons name="document-text-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Maintenance Logs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Reports')}>
        <Ionicons name="bar-chart-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Reports</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => onOptionSelect('Alerts')}>
        <Ionicons name="alert-circle-outline" size={24} color="#004D40" />
        <Text style={styles.optionText}>Alerts</Text>
      </TouchableOpacity>

      {/* Contact Support Button */}
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

export default MaintenanceScreen;
