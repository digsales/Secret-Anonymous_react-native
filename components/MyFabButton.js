import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const MyFabButton = ({
  iconName,
  iconSize,
  iconColor,
  onPress
}) => {
  return (

    <TouchableOpacity style={styles.containerFab} onPress={onPress}>
        <Ionicons name={iconName} size={iconSize} color={iconColor}/>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
    containerFab:{
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 16,
        bottom: 16,
        backgroundColor: 'white',
        borderRadius: 45,
        elevation: 5,
      },

});

export default MyFabButton;