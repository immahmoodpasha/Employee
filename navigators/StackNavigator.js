import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../screens/Signin";
import CurrentTask from "../screens/CurrentTask";
import Dashboard from "../screens/Dashboard";
import Splash from "../screens/Splash";
import { useContext } from "react";
import { orderStatusContext } from "../context/orderStatusContext";

const Stack = createStackNavigator();

const StackNavigator = () => {
    const {occupied} = useContext(orderStatusContext)

    return(
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, gestureEnabled: !occupied, animation: 'fade_from_bottom' }}>
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="CurrentTask" component={CurrentTask} options={{ headerLeft: ()=>null, gestureEnabled: !occupied }}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen name='Splash' component={Splash} />
        </Stack.Navigator>
    );
};

export default StackNavigator;