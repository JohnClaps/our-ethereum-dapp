import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

const RoyaltiesPaymentsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Royalties Payments</Text>
      <Card style={styles.card}>
        <Card.Title title="Make Payment" />
        <Card.Content>
          <Text>Manage and process your royalties payments here.</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => {history.pushState("")}}>Process Payment</Button>
        </Card.Actions>
      </Card>
      {/* Add more payment options or information */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default RoyaltiesPaymentsScreen;
