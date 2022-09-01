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
  ScrollView,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MeuInput from "../components/MeuInput";

const tabelaPrecos = [
    {
      id: '0',
      servico : '*serviços exemplo*',
      preco: 0.00
    },
    {
      id: '1',
      servico : 'corte social',
      preco: 10.00
    },
    {
      id: '2',
      servico : 'corte degradê',
      preco: 15.00
    },
    {
      id: '3',
      servico : 'barba máquina',
      preco: 10.00
    },
    {
      id: '4',
      servico : 'sobrancelha',
      preco: 12.00
    },
    {
      id: '5',
      servico : 'pintura',
      preco: 30.00
    },
    {
      id: '6',
      servico : 'massagem facial',
      preco: 20.00
    },
    {
      id: '7',
      servico : 'toalha quente',
      preco: 14.00
    },
    {
      id: '7',
      servico : 'toalha quente',
      preco: 14.00
    },
    {
      id: '7',
      servico : 'toalha quente',
      preco: 14.00
    },
    {
      id: '7',
      servico : 'toalha quente',
      preco: 14.00
    },
    {
      id: '7',
      servico : 'toalha quente',
      preco: 14.00
    },
    {
      id: '7',
      servico : 'toalha quente',
      preco: 14.00
    },
  ]

function alertHowItWorks() {
  Alert.alert(
    "How it works",
    "Secret Anonymous is an app that you can write whatever you want, keeping your anonymity. You can like or dislike the other's secrets, and have fun reading the deepest confessions. Why not write yours?",
    [
      {
        text: "Got it",
      },
    ]
  );
}

const Home = () => {

    const [scrollY, setScrollY] = useState(new Animated.Value(0));

    return (

        <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.container}>

            <Animated.View style={{
                height: scrollY.interpolate({
                    inputRange:[1, 200],
                    outputRange: [90, 30],
                    extrapolate: 'clamp'
                }),
                width: '100%',
                backgroundColor: 'white',
                elevation: 5,
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                paddingHorizontal: 16,
                paddingBottom: 10
            }}>
                <Text style={styles.textHeader}>Anonymous</Text>


            </Animated.View>

            <View style={styles.inputContainer}>

                <Ionicons style={styles.icon} name="search-outline" size={18} color="black"/>

                <MeuInput/>

            </View>

            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([{
                    nativeEvent: {
                    contentOffset: { y: scrollY }
                    },
                }],
                { useNativeDriver: false })}
            >
                <FlatList 
                    data={tabelaPrecos}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) =>
                        <View style={styles.card}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'column', flex: 2}}>
                            <Text style={styles.servico}>{item.servico}</Text>
                            <Text style={styles.preco}>R$ {item.preco.toFixed(2).padEnd(8)}</Text>
                            </View>
                            <TouchableOpacity
                            style={styles.botao1}
                            // On press vai para o AGENDAMENTO
                            >
                            <Text style={styles.botaotexto1}>AGENDAR</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    }
                />
            </ScrollView>

        </ImageBackground>

    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader:{
    height: 90,
    width: '100%',
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 10
  },
  inputContainer: {
    borderColor: '#FF5400',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    margin: 10,
    marginTop: 12,
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
  },
  textButton1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 28,
    color:"#FF5400",
  },
  textSecrets: {
    color: '#FF5400',
    fontVariant: ['small-caps'],
    fontWeight: 'normal',
    fontSize: 16,
    alignSelf:'center'
  },
  textError: {
    color: 'red',
    fontSize: 10,
    alignSelf: 'center'
  },
  servico: {
    fontSize: 18,
    color: 'black',
    fontVariant: ['small-caps'],
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    color: 'black',
    fontVariant: ['small-caps'],
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#DCDCDC',
    marginTop: 14,
    margin: 16,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 8,
    borderRadius: 20,
  },
  botao1: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 30,
    backgroundColor: '#FF5C00',
    borderRadius: 45,
    flex: 1,
    elevation: 10,
  },
  botaotexto1: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Home;