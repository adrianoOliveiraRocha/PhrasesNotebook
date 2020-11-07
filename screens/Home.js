import React from 'react';
import { View, Text, StyleSheet, Button, ToastAndroid, Image } from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';
import { AntDesign, Entypo } from '@expo/vector-icons';

function Home({ navigation }) {

  function init() {
    Phrase.init()
      .then(() => {
        ToastAndroid.show('Reiniciado com sucesso', ToastAndroid.SHORT);
      })
      .catch(e => {
        alert(e);
      })
  }

  return (
    <View style={styles.container}>

      <View style={styles.subContainer}>
        <Image
          style={{width: 130, height: 130}}
          source={{
          uri: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/book-bookmark-icon.png',
        }}

        />


      </View>

      <View style={styles.buttonsContainer}>

        <View style={styles.button}>
          <Text onPress={() => navigation.navigate("Dê-me uma Frase")}
            style={styles.textButton}>
           Dê-me uma frase
          </Text>
          <Entypo name="arrow-bold-right" size={24} color="white"
            onPress={() => navigation.navigate("Dê-me uma Frase")}/>

        </View>

        <View style={styles.button}>
          <Text onPress={() => navigation.navigate("Inserir Frase")}
            style={styles.textButton}>
           Inserir Frase
          </Text>
          <AntDesign name="plussquare" size={24} color="white"
            onPress={() => navigation.navigate("Inserir Frase")}/>
        </View>

        <View style={styles.button}>
          <Text onPress={() => navigation.navigate("Todas")}
            style={styles.textButton}>
           Vêr Todas
          </Text>
          <AntDesign name="book" size={24} color="white"
            onPress={() => navigation.navigate("Todas")}/>
        </View>

        <View
          style={styles.button}>
          <Text onPress={init}
            style={styles.textButton}>
           Reiniciar
          </Text>
          <AntDesign name="reload1" size={24} color="white"
            onPress={init}/>
        </View>

        <View
          style={[styles.button]}>
          <Text
            style={styles.textButton}>
           Sobre
          </Text>
          <AntDesign name="infocirlceo" size={24} color="white"/>
        </View>

      </View>

    </View>
  );
}

export default Home;
