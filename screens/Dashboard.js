import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useState, useCallback } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import apiClient from '../apiClient';
import { useFocusEffect } from '@react-navigation/native';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const res = await apiClient.get('/api/Order/billed-orders');
      if (Array.isArray(res.data)) {
        setOrders(res.data);
      } else {
        setOrders([]); // fallback if not array
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      setOrders([]); // fallback on error
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  const renderCard = ({ item }) => {
    if (!item || typeof item !== 'object') return null;

    // Ensure orderId exists and is stringifiable
    const key = item?.orderId?.toString?.() || Math.random().toString();

    return <Card order={item} key={key} />;
  };

  return (
    <View style={styles.cardContainer}>
      <Header />
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          keyExtractor={(item, index) =>
            item?.orderId?.toString?.() || index.toString()
          }
          renderItem={renderCard}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No orders available</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Dashboard;
