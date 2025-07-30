import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { orderStatusContext } from '../context/orderStatusContext';
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';

const Card = ({order}) => {
  const {occupied, toggleOccupied} = useContext(orderStatusContext)
  const navigation = useNavigation();
  const AcceptOrder = (order) => {
    toggleOccupied();
    navigation.navigate('CurrentTask', {order});
  };
  return (
    <View >
      <View style={styles.cardContainer}>
        <Text style={styles.textStyle}>Order ID: {order.orderId}</Text>
        <Text style={styles.textStyle}>No of Items: {order.products.length}</Text>
        <Text style={styles.textStyle}>Time: {order.time}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>AcceptOrder(order)}
        >
          <Text style={{ textAlign: "center",fontWeight:500,color:"white" }}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cardContainer: {
  backgroundColor: '#c29efbff',
  padding: "2%",
  margin: "2%",
  borderRadius: 12,
  borderBottomWidth:3,
  borderColor: '#15060fff',
  shadowColor: '#ece4edff',
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 4,
  elevation: 8,
},
  textStyle: {
    fontSize: 15,
    fontWeight: 500,
    color:'#1d1c1eff',
    fontFamily:" Roboto"
  },
  button: {
    backgroundColor: '#a41ac3ff',
    padding:5,
    width:"50%",
    alignSelf:"center",
    borderRadius:12,
    marginTop:10,
  }

});


export default Card