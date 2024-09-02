import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SupportScreen = ({ onOptionSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <Text style={styles.header}>Support</Text>

      {/* Support Options */}
      <OptionButton
        iconName="chatbubble-outline"
        label="Live Chat"
        onPress={() => onOptionSelect('Live Chat')}
      />
      <OptionButton
        iconName="mail-outline"
        label="Email Support"
        onPress={() => onOptionSelect('Email Support')}
      />
      <OptionButton
        iconName="call-outline"
        label="Phone Support"
        onPress={() => onOptionSelect('Phone Support')}
      />
      <OptionButton
        iconName="help-circle-outline"
        label="FAQs"
        onPress={() => onOptionSelect('FAQs')}
      />

      {/* Feedback Button */}
      <TouchableOpacity
        style={styles.feedbackButton}
        onPress={() => onOptionSelect('Give Feedback')}
      >
        <Ionicons name="star-outline" size={24} color="white" />
        <Text style={styles.feedbackText}>Give Feedback</Text>
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
  feedbackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#1976D2',
    borderRadius: 10,
    marginTop: 30,
  },
  feedbackText: {
    marginLeft: 15,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SupportScreen;
