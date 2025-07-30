import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const Dashboard = () => {
  return (
    <View style={styles.cardContainer}>
      <Text>Order ID : 101</Text>
      <Text>Customer:John</Text>
      <Text>Items:3</Text>
      <Text>Time:10:30 AM</Text>
      
    </View>
  )
}
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

});


export default Dashboard