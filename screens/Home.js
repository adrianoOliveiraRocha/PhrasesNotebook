import React from 'react';
import { View, Text, StyleSheet, Button, ToastAndroid } from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';
import { AntDesign } from '@expo/vector-icons';

function Home({ navigation }) {

  function clear() {
    Phrase.clear()
      .then(result => {
        if(result) ToastAndroid.show('Todas as suas frases foram deletadas :(', ToastAndroid.SHORT);
      })
      .catch(e => {
        alert(e);
      })
  }

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
        <Text style={styles.text}>
          In this App you can insert phrases and then get phrases aleatories.
        </Text>
      </View>

      <View style={styles.buttonsContainer}>

        <View style={styles.button}>
          <Text onPress={() => navigation.navigate("Dê-me uma Frase")}
            style={styles.textButton}>
           Dê-me uma frase
          </Text>
          <AntDesign name="rightcircleo" size={24} color="white"
            onPress={() => navigation.navigate("Dê-me uma Frase")}/>
        </View>

        <View style={styles.button}>
          <Text onPress={() => navigation.navigate("Inserir Frase")}
            style={styles.textButton}>
           Inserir Frase
          </Text>
          <AntDesign name="rightcircleo" size={24} color="white"
            onPress={() => navigation.navigate("Inserir Frase")}/>
        </View>

        <View style={styles.button}>
          <Text onPress={() => navigation.navigate("Todas")}
            style={styles.textButton}>
           Vêr Todas
          </Text>
          <AntDesign name="rightcircleo" size={24} color="white"
            onPress={() => navigation.navigate("Todas")}/>
        </View>

        <View
          style={styles.button}>
          <Text onPress={init}
            style={styles.textButton}>
           Reiniciar
          </Text>
          <AntDesign name="rightcircleo" size={24} color="white"
            onPress={init}/>
        </View>
        {/*
        <View
          style={[styles.button, {backgroundColor: '#aa3344'}]}>
          <Text onPress={clear}
            style={styles.textButton}>
           Deletar Todas
          </Text>
          <AntDesign name="rightcircleo" size={24} color="white"
            onPress={clear}/>
        </View>
        */}
        <View
          style={[styles.button]}>
          <Text onPress={clear}
            style={styles.textButton}>
           Sobre
          </Text>
          <AntDesign name="rightcircleo" size={24} color="white"/>
        </View>



      </View>

    </View>
  );
}

export default Home;
