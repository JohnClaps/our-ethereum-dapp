import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const RoyaltiesPaymentScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePayment = () => {
    if (!selectedOption) {
      Alert.alert('Payment Option', 'Please select a payment option.');
      return;
    }
    Alert.alert('Payment', `You selected ${selectedOption}. Proceeding with payment...`);
    // Add your payment handling logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Royalties Payment</Text>
      
      <TouchableOpacity
        style={[styles.optionButton, selectedOption === 'NB Bank' && styles.selectedButton]}
        onPress={() => setSelectedOption('NB Bank')}
      >
        <Text style={styles.optionText}>NB Bank</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.optionButton, selectedOption === 'Airtel Money' && styles.selectedButton]}
        onPress={() => setSelectedOption('Airtel Money')}
      >
        <Text style={styles.optionText}>Airtel Money</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.optionButton, selectedOption === 'TNM Mpamba' && styles.selectedButton]}
        onPress={() => setSelectedOption('TNM Mpamba')}
      >
        <Text style={styles.optionText}>TNM Mpamba</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Proceed to Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
    borderColor: '#DDD',
    borderWidth: 1,
  },
  selectedButton: {
    borderColor: '#004D40',
    borderWidth: 2,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  payButton: {
    backgroundColor: '#004D40',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RoyaltiesPaymentScreen;
