import React from 'react';
import { Text, View,ImageBackground, Image, StyleSheet, ActivityIndicator } from 'react-native';

export default function Splash() {

  return (

    <View style={styles.container}>

      <ImageBackground source={require('../assets/background.png')} style={styles.imageBackground}>
        <Image source={require('../assets/logo.png')} style={styles.imageForeground} />
        <ActivityIndicator size="large" color="#FF5400" style={styles.activityindicator} />
      </ImageBackground>

      <View style={styles.textview}>
        <Text style={styles.textend}>Created by Diogo Sales</Text>
      </View>

    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  imageForeground: {
    width: 250,
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textend: {
    color: "#FF5400",
    alignSelf: "center",
    marginBottom: 20,
    fontSize: 12,
    fontWeight: "bold"
  },
  textview: {
    position: 'absolute',
    alignSelf: "center",
  },
  activityindicator: {
    alignSelf: "center",
    paddingTop: 50
  }
})