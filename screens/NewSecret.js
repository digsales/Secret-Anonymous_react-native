import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Animated,
  Keyboard,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackActions } from '@react-navigation/native';

import MeuInput from "../components/MeuInput";

function alertHowItWorks() {
  Alert.alert(
    "How it works",
    "Secret Anonymous is an app that you can write whatever you want, keeping your anonymity. You can like or dislike the other's secrets, and have fun reading the deepest confessions. Why not write yours?\n\nCreated By Diogo Sales",
    [
      {
        text: "Got it",
      },
    ]
  );
}

const NewSecret = ({navigation, route}) => {

  const popAction = StackActions.pop(1);

  const nickname = route.params.nickname;

  const [logo] = useState(new Animated.ValueXY({x: 250, y: 100}));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  })

  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 125,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 50,
        duration: 100,
        useNativeDriver: false
      })
    ]).start();
  }

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 250,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 100,
        duration: 100,
        useNativeDriver: false,
      })      
    ]).start();
  }

  const [ secret, setSecret ] = useState('');

  function cancelSecret(){
    return navigation.dispatch(popAction);
  }

  function checkToNavigate() {
    if(secret != '' && secret.length > 10){
      return navigation.navigate('Home', {nickname:nickname, secret:secret});
    }
  }

  function ValidationSecret() {
    if(secret == ''){
      return <Text style={styles.textError}>Secret must be informed</Text>
    }
    else if(secret.length <= 10){
      return <Text style={styles.textError}>Secret must have more than 10 characters</Text>
    }
  }

  return (

    <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.container}>

      <KeyboardAvoidingView>

        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={styles.textApresentation}>Hello, {nickname}! it's your time to join in the fun, write down bellow what do you wanna share!</Text>
        </View>

        <View style={{flex:1, justifyContent:'flex-start'}}>

          <View style={styles.inputContainer}>

            <Ionicons style={styles.icon} name="chatbox-ellipses-outline" size={18} color="black"/>
            <MeuInput 
              placeholder='Tell us your secret'
              maxLength={300} 
              value={secret}
              multiline={true}
              onChangeText={(text) => setSecret(text)}
            />

          </View>
          
          <ValidationSecret />

          <View style={{flex: 1,flexDirection: 'row', justifyContent: 'center'}}>

            <TouchableOpacity
                style={styles.button2}
                onPress={cancelSecret}
              >
                <Text style={styles.textButton2}>CANCEL</Text>
            </TouchableOpacity>

              <TouchableOpacity
                style={styles.button1}
                onPress={checkToNavigate}
              >
                <Text style={styles.textButton1}>POST</Text>
              </TouchableOpacity>

          </View>
          
        </View>

      </KeyboardAvoidingView>

    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
    borderColor: '#FF5400',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    width: 240,
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
    marginRight: 5,
  },
  button1: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    backgroundColor: '#FF5400',
    borderRadius: 20,
    marginTop: 20,
    elevation: 5,
  },
  textButton1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  button2: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF5400',
    borderRadius: 20,
    marginTop: 20,
    marginRight: 50
  },
  textButton2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5400'
  },
  textError: {
    color: 'red',
    fontSize: 10,
    alignSelf: 'center'
  },
  textApresentation: {
    fontSize: 22,
    textAlign: 'center',
  }
});

export default NewSecret;