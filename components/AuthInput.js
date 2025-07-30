import { Text, TextInput, StyleSheet } from 'react-native';

const AuthInput = ({name,label, placeholder, secureTextEntry = false, keyboardType = 'default',InputChange }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        name={name}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={(value) => InputChange(name,value)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width:"100%"
  },
});

export default AuthInput;
