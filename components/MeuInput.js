import React from "react";
import { TextInput, StyleSheet } from "react-native";

const MeuInput = ({
  value,
  keyboardType,
  placeholder,
  onChangeText,
  secureTextEntry,
  maxLength,
  multiline,
  numberOfLines,
  defaultValue
}) => {
  return (

    <TextInput
      multiline={multiline}
      value={value}
      numberOfLines={numberOfLines}
      keyboardType={keyboardType}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#575757"
      autoCorrect={false}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
      defaultValue={defaultValue}
    />

  );
};

const styles = StyleSheet.create({
  input: {
    color: 'black',
  },

});

export default MeuInput;