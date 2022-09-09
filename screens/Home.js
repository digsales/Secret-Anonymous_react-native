import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Animated,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import MeuInput from "../components/MeuInput";
import SecretsList from "../components/SecretsList";
import ListSeparator from "../components/ListSeparator";
import MyFabButton from "../components/MyFabButton";

const Secrets = [
    {
      id: '0',
      name : 'Anonymous',
      secret: 'A vida é tão louca… Eu aqui te querendo enquanto tu tá por aí querendo as outras.'
    },
    {
      id: '1',
      name : 'Angela',
      secret: 'Cada vez mais tenho a sensação de incertezas e inseguranças e tento me manter firme apesar disso. Algumas coisas parecem dar certo e maioria não, tipo você.'
    },
    {
      id: '2',
      name : 'Tutu_92',
      secret: 'Mais uma noite como todas as anteriores. Pego minha caneca de café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto. Observo a noite fria e chuvosa, até parece confortável por um momento, se não fossem as dezenas de preocupações que me desmotivam a cada dia.'
    },
    {
      id: '3',
      name : 'Anonymous',
      secret: 'Então após 10 minutos refletindo, largo tudo, fecho a janela e volto pro meu mundo dentro do quarto. Não sei até quando, não sei o porquê, só sei que tá tudo tão errado e quero me livrar disso o quanto antes. E tu não tem nem ideia do quanto, amor meu.'
    },
    {
      id: '4',
      name : 'iwontsaymyname',
      secret: 'Cada vez mais tenho a sensação de incertezas e inseguranças e tento me manter firme apesar disso. Algumas coisas parecem dar certo e maioria não, tipo você.'
    },
    {
      id: '5',
      name : 'SchoolGirl',
      secret: 'Ela não precisa se esforçar para ter a minha atenção. O que ela tem não dá pra entender. Me diz porque eu não tô com você'
    },
    {
      id: '6',
      name : 'ArtBoy',
      secret: 'Eu sinto tanta falta dos seus beijos que as vezes, sei lá, eu enlouqueço.'
    },
    {
      id: '7',
      name : 'CanISayIt?',
      secret: 'Penso em você, mesmo sabendo o quão longe está de mim, sinto aquele amor que continua a me desgraçar intensamente a cada dia, e penso quando enfim poderei te ter comigo. Sei lá, o café chega ao fim e trago a ultima ponta, nada muda. É como se eu fosse passar por isso mais uns longos anos a frente.'
    },
  ]

const Home = ({ navigation, route }) => {

  const nickname = route.params.nickname;

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  function CreateNewSecret(){
    return navigation.navigate('NewSecret', {nickname:nickname})
  }

  return (

    <ImageBackground source={require('../assets/background.png')} resizeMode="cover" style={styles.container}>

      <Animated.View style={{
          height: scrollY.interpolate({
              inputRange:[1, 200],
              outputRange: [90, 35],
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
          <Animated.Text 
              style={{
                  textAlign: 'center',
                  fontSize: 28,
                  color:"#FF5400",
                  opacity: scrollY.interpolate({
                      inputRange:[1, 200],
                      outputRange: [1, 0],
                      extrapolate: 'clamp'
                  }),
              }}
          >
              {nickname}
          </Animated.Text>


      </Animated.View>

      <View style={styles.inputContainer}>

          <Ionicons style={styles.icon} name="search-outline" size={18} color="black"/>

          <MeuInput/>
          
          <TouchableOpacity>
            <FontAwesome style={styles.icon2} name="sort-amount-desc" size={16} color="black"/>
          </TouchableOpacity>
          
      </View>
      
      <FlatList 
          onScroll={
              Animated.event([{
                  nativeEvent: {
                      contentOffset: { y: scrollY }
                  },
              }],
              { useNativeDriver: false })
          }
          ItemSeparatorComponent={ListSeparator}
          data={Secrets}
          renderItem={({item}) => <SecretsList item={item}/>}
          keyExtractor={item => item.id}
      />

      <MyFabButton iconName={'add-outline'} iconSize={40} iconColor={"#FF5400"} onPress={CreateNewSecret} />

      <StatusBar style='dark'/>

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
    marginHorizontal: 10,
    marginVertical: 16,
  },
  icon: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: 5,
    marginRight: 5,
  },
  icon2: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft: 5
  },
});

export default Home;