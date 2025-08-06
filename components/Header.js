import { View, Text, Image, TouchableOpacity} from "react-native";
import { styles } from "../styles";
import Icon from 'react-native-vector-icons/FontAwesome6';
const bike=require('../images/bike.png')
import Logo from '../assets/Logo.png';



const Header = () => {
    return(
        <View style={[styles.Header,{paddingTop: 42.5}]}>
            <View style={{display: 'flex', flexDirection: 'row', gap: '8%'}}>
                <Image source={Logo} style={styles.logo}/>
                <Text style={{color: 'white', fontSize: 22, fontWeight: 800, marginTop: 5}}>Rapidd</Text>
            </View>
            <TouchableOpacity>
                <Image source={bike} style={{width: 32, height: 32}}></Image>
            </TouchableOpacity>
        </View>
    );
}

export default Header;