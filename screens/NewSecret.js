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

const NewSecret = ({navigation}) => {

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

  const [ nickname, setNickname ] = useState('Anonymous');

  function checkToNavigate() {
    if(nickname != '' && nickname.length > 3){
      return navigation.navigate('Home', {'nickname':nickname});
    }
  }

  function ValidationNickname() {
    if(nickname == ''){
      return <Text style={styles.textError}>Nickname must be informed</Text>
    }
    else if(nickname.length <= 3){
      return <Text style={styles.textError}>Nickname must have more than 3 characters</Text>
    }
  }

  return (

    <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.container}>

      <KeyboardAvoidingView>

        <View style={{flex: 1, justifyContent:'center'}}>

          <View style={styles.inputContainer}>
            <Ionicons style={styles.icon} name="person-outline" size={18} color="black"/>
            <MeuInput 
              placeholder='Nickname'
              maxLength={24} 
              value={nickname.trim()}
              onChangeText={(text) => setNickname(text)}
            />
          </View>
          
          <ValidationNickname />

          <View>
            <TouchableOpacity
              style={styles.button1}
              onPress={checkToNavigate}
            >
              <Text style={styles.textButton1}>LOGIN</Text>
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
    padding: 16,
  },
  inputContainer: {
    borderColor: '#FF5400',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    width: 250,
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
});

export default NewSecret;