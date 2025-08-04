import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Card from '../components/Card';
import axios from 'axios';
import apiClient from '../apiClient'


const Dashboard = () => {
  const [orders,setOrders]=useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const fetchData=async()=>{
    try{
      const res = await apiClient.get('/api/Order/billed-orders');      
      setOrders(res.data);
      console.log(orders)
      
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
  useEffect(()=> {
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
  },

});


export default Dashboard;