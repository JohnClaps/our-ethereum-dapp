import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BlockchainDashboard = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mining Transactions Dashboard</Text>
      </View>
      
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Ionicons name="cube-outline" size={36} color="#004D40" />
          <Text style={styles.cardTitle}>Total Transactions</Text>
          <Text style={styles.cardValue}>1,245</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="cash-outline" size={36} color="#004D40" />
          <Text style={styles.cardTitle}>Royalties Collected</Text>
          <Text style={styles.cardValue}>$1,020,000</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="md-stats-chart-outline" size={36} color="#004D40" />
          <Text style={styles.cardTitle}>Blocks Mined</Text>
          <Text style={styles.cardValue}>320</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="shield-checkmark-outline" size={36} color="#004D40" />
          <Text style={styles.cardTitle}>System Health</Text>
          <Text style={styles.cardValue}>Healthy</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Ionicons name="trending-up-outline" size={36} color="#004D40" />
          <Text style={styles.cardTitle}>Recent Price</Text>
          <Text style={styles.cardValue}>$300/oz</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="document-text-outline" size={36} color="#004D40" />
          <Text style={styles.cardTitle}>Pending Approvals</Text>
          <Text style={styles.cardValue}>15</Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="people-outline" size={36} color="#004D40" />
          <Text style={styles.cardTitle}>Active Users</Text>
          <Text style={styles.cardValue}>2,318</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004D40',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    color: '#004D40',
    marginTop: 10,
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 24,
    color: '#004D40',
    marginTop: 5,
  },
});

export default BlockchainDashboard;
