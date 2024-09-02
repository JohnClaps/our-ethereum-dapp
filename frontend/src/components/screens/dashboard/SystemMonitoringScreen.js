import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

const SystemMonitoringScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>System Monitoring</Text>
      <Card style={styles.card}>
        <Card.Title title="System Overview" />
        <Card.Content>
          <Text>View system performance and status here.</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => {}}>View Status</Button>
        </Card.Actions>
      </Card>
      {/* Add more monitoring options */}
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

export default SystemMonitoringScreen;
