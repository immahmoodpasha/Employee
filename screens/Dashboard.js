import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import axios from 'axios';


const Dashboard = () => {
  const [orders,setOrders]=useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const fetchData=async()=>{
    try{
      const res=await axios.get('http://192.168.0.129:3113/orders');
      setOrders(res.data);
    }
    catch(error){
      alert(error);
    }
  }
  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };
  useEffect(()=>
  {
    fetchData();
  },[])
  return (
    <View style={styles.cardContainer}>
      <Header/>
      <FlatList
       data={orders}
       keyExtractor={(item) => item.orderId.toString()}
       renderItem={({ item }) => <Card order={item} />}
       refreshing={refreshing}
       onRefresh={handleRefresh}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

});


export default Dashboard;