import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import sharedStyles from '../styles/authStyles';

const Signin = () => {
  

  return (
    <View style={{width:"100%"}}>
      <Icon name="box-open" size={50} color="#8404aeff" style={{ alignSelf: 'center' }} />
      <Text style={sharedStyles.heading}>Shopsy Login</Text>

      <View style={sharedStyles.container}>
        <AuthInput label="Email" placeholder="Enter your email" keyboardType="email-address" />
        <AuthInput label="Password" placeholder="Enter your password" secureTextEntry />

        <Text style={styles.forgotPassword}>Forgot password?</Text>

        <AuthButton title="Sign In"/>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    textAlign: 'right',
    marginTop: 10,
    color: '#8404aeff',
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#8404aeff',
  },
});

export default Signin;
