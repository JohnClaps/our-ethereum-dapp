import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ReportsScreen = ({ onOptionSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <Text style={styles.header}>Reports</Text>

      {/* Reports Options */}
      <OptionButton
        iconName="bar-chart-outline"
        label="Sales Report"
        onPress={() => onOptionSelect('Sales Report')}
      />
      <OptionButton
        iconName="analytics-outline"
        label="User Activity"
        onPress={() => onOptionSelect('User Activity')}
      />
      <OptionButton
        iconName="document-text-outline"
        label="System Logs"
        onPress={() => onOptionSelect('System Logs')}
      />
      <OptionButton
        iconName="clipboard-outline"
        label="Maintenance Reports"
        onPress={() => onOptionSelect('Maintenance Reports')}
      />

      {/* Generate Report Button */}
      <TouchableOpacity
        style={styles.generateButton}
        onPress={() => onOptionSelect('Generate Report')}
      >
        <Ionicons name="download-outline" size={24} color="white" />
        <Text style={styles.generateText}>Generate Report</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Reusable OptionButton Component
const OptionButton = ({ iconName, label, onPress }) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <Ionicons name={iconName} size={24} color="#004D40" />
    <Text style={styles.optionText}>{label}</Text>
  </TouchableOpacity>
);

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
  generateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#388E3C',
    borderRadius: 10,
    marginTop: 30,
  },
  generateText: {
    marginLeft: 15,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ReportsScreen;
