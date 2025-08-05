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
      setOrders(res.data);
    } catch (error) {
      alert(error);
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

  return (
    <View style={styles.cardContainer}>
      <Header />
      {orders.length!==0 && <FlatList
        data={orders}
        keyExtractor={(item) => item.orderId.toString()}
        renderItem={({ item }) => <Card order={item} />}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />}
      
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
});

export default Dashboard;
