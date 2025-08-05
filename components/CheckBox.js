import React from 'react';
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckBox = ({ checked, onToggle }) => {
  return (
    <View>
      <TouchableOpacity onPress={onToggle}>
        {checked ? (
          <Icon name="check" size={30} color="#8404ae" />
        ) : (
          <Icon name="circle" size={30} color="#d9d7d7" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;
