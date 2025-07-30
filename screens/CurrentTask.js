import { useEffect, useState,useContext } from "react";
import { View,Text, StyleSheet,TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { Switch } from "react-native";
import { orderStatusContext } from '../context/orderStatusContext';
import { useNavigation } from "@react-navigation/native";

import CheckBox from "../components/CheckBox";
const CurrentTask = ({route}) => {
    const [switchValue, setSwitchValue] = useState(false);
    const {order} = route.params;
    const {occupied, toggleOccupied} = useContext(orderStatusContext)
    const navigation = useNavigation();

    const CompletedOrder = () => {
        toggleOccupied();
        navigation.goBack();
    }

    return(
        <View style={styles.CurrentTask}>
            <Text style={{color: '#8404ae', fontWeight: 900, fontSize: 20, alignSelf: 'center'}}>Your Task</Text>

            <View style={styles.OrderContainer}>
                <Text style={{fontSize: 24, alignSelf: 'center', fontWeight: 600}}>Order ID: {order.orderId}</Text>
                <FlatList data={order.products} keyExtractor={(item, index) => index.toString()} renderItem={({item})=>(
                    <View style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingVertical: '5%'}}>
                        <Text style={{fontSize: 20}}>{item.name} - {item.quantity}</Text>
                        <Text style={{fontSize: 20}}></Text>
                        <CheckBox />
                    </View>
                )}/>
                <TouchableOpacity onPress={()=>CompletedOrder()} style={{alignSelf: 'center', backgroundColor: '#8404ae', paddingVertical: '3%', paddingHorizontal: '5%', borderRadius: 20}}>
                    <Text style={{fontSize: 20, color: 'white', fontWeight: 800}}>Mark Completed</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CurrentTask;

const styles = StyleSheet.create({
    CurrentTask: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10%'
    },
    OrderContainer: {
        marginTop: '20%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10%'
    }
})