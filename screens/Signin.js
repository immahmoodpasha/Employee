import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import sharedStyles from '../styles/authStyles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Signin = () => {
  const navigation = useNavigation();
  const [formData, setFormData] =useState({
      email: '',  
      password: '',
    });
    const handleInputChange = (name, value) => {
      setFormData({ ...formData, [name]: value });
    };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('https://2fabe7816646.ngrok-free.app/api/auth/login',formData);

    if (res.status === 200) {
      const token = res.data.data.jwtToken;
      await AsyncStorage.setItem('token', token);
      navigation.navigate('Dashboard');
    }
  } catch (error) {
    console.error("login failed:", error);
    alert("Login Failed failed");
  }
};

  return (
    <View style={{width:"100%",marginTop:"100"}}>
      <Icon name="box-open" size={50} color="#8404aeff" style={{ alignSelf: 'center' }} />
      <Text style={sharedStyles.heading}>Rapidd Login</Text>

      <View style={sharedStyles.container}>
        <AuthInput name='email' label="Email" placeholder="Enter your email" keyboardType="email-address" InputChange={handleInputChange}/>
        <AuthInput name='password' label="Password" placeholder="Enter your password" InputChange={handleInputChange} secureTextEntry />

        <AuthButton title="Sign In" onPress={(e) =>handleSubmit(e)}/>
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
