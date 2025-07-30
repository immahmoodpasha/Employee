import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../screens/Signin";
import CurrentTask from "../screens/CurrentTask";
import Dashboard from "../screens/Dashboard";

const Stack = createStackNavigator();

const StackNavigator = () => {


    return(
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="CurrentTask" component={CurrentTask}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>

        </Stack.Navigator>
    );
};

export default StackNavigator;