import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signin from './screens/Signin';
import Dashboard from './screens/Dashboard';
import Header from './components/Header';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Card/>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
});
