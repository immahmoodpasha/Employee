import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { orderStatusContext } from '../context/orderStatusContext';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import apiClient from '../apiClient';

const Card = ({ order }) => {
  const { occupied, toggleOccupied } = useContext(orderStatusContext);
  const navigation = useNavigation();

  const AcceptOrder = async (order) => {
    try {
      
      await apiClient.post('/api/taskhistory', {
        orderId: order.orderId,
      });
      toggleOccupied();
      navigation.navigate('CurrentTask', { order });
    } catch (error) {
      console.error('Error accepting order:', error);
      alert('Failed to accept order. Try again.');
    }
  };

  return (
    <View>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.orderId}>Order ID: {order._id}</Text>
          <Text style={styles.textStyle}>No of Items: {order.items.length}</Text>
          <Text style={styles.textStyle}>
            Placed At: {new Date(order.createdAt).toLocaleString()}
          </Text>
        </View>
        <View style={{ width: "50%", alignSelf: "center", flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => AcceptOrder(order)}
          >
            <Text style={{ textAlign: "center", fontWeight: 500, color: "white" }}>
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fdfcfeff',
    padding: "4%",
    margin: "2%",
    borderRadius: 10,
    borderColor: '#49034aff',
    shadowColor: '#a00fb4ff',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1d1c1eff',
    fontFamily: "Roboto"
  },
  button: {
    backgroundColor: '#a41ac3ff',
    padding: 5,
    width: "50%",
    alignSelf: "center",
    borderRadius: 12,
  },
  orderId: {
    fontSize: 18,
    fontWeight: '800'
  }
});

export default Card;
