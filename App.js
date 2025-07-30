import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signin from './screens/Signin';
import StackNavigator from './navigators/StackNavigator';
import { NavigationContainer } from "@react-navigation/native";
import { orderStatusContext } from './context/orderStatusContext';
import { useState } from 'react';

export default function App() {
  const [occupied, setOccupied] = useState(false);

  const toggleOccupied = () => {
    setOccupied(prevOccupied => (prevOccupied? false : true));
  };

  return (
    <orderStatusContext.Provider value={{occupied, toggleOccupied}}>
      <View style={styles.container}>
        <NavigationContainer>
          <StackNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
    </View>
    </orderStatusContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
});
