import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles";
import Icon from 'react-native-vector-icons/FontAwesome6';
const bike=require('../images/bike.png')


const Header = () => {
    return(
        <View style={styles.Header}>
            <View style={{display: 'flex', flexDirection: 'row', gap: '8%'}}>
                <Icon name="shop" size={30} color="white"/>
                <Text style={{color: 'white', fontSize: 22, fontWeight: 800}}>Shopsy store</Text>
            </View>
            <TouchableOpacity>
                <Image source={bike} style={{width: 32, height: 32}}></Image>
            </TouchableOpacity>
        </View>
    );
}

export default Header;