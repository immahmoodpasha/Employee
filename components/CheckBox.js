import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View } from "react-native";
import { Switch } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
const CheckBox = ()=>{
    const [check,setCheck] = useState(false);
    return(
        <View>
            <TouchableOpacity 
                value={check}
                onPress={()=>{
                    setCheck(prevCheck=>(prevCheck? false : true))
                }}
            >
                {check? <Icon name="check" size={30} color="#8404ae" /> : <Icon name="circle" size={30} color="#d9d7d7" />}
                

            </TouchableOpacity>
        </View>
    );

}

export default CheckBox;