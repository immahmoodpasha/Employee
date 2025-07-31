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
        <View>
        <Text style={styles.orderId}>Order ID: {order.orderId}</Text>
        <Text style={styles.textStyle}>No of Items: {order.products.length}</Text>
        <Text style={styles.textStyle}>Time: {order.time}</Text>
        </View>
        <View style={{width:"50%",alignSelf:"center",flexDirection:"row",justifyContent:"flex-end"}}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>AcceptOrder(order)}
        >
          <Text style={{ textAlign: "center",fontWeight:500,color:"white" }}>Accept</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
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
  flexDirection:"row",
  justifyContent:"space-between"
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
  },
  orderId:{
    fontSize:18,
    fontWeight:800
  }

});


export default Card