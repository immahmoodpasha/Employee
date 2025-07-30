import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../screens/Signin";
import CurrentTask from "../screens/CurrentTask";

const Stack = createStackNavigator();

const StackNavigator = () => {


    return(
        <Stack.Navigator initialRouteName="CurrentTask">
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="CurrentTask" component={CurrentTask}/>
        </Stack.Navigator>
    );
};

export default StackNavigator;