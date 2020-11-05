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
        <Button
          title="Dê-me uma Frase"
          color='#089757'
          onPress={() => navigation.navigate("Dê-me uma Frase")}
        />
        <Button
          title="Inserir Frase"
          color='#089757'
          onPress={() => navigation.navigate("Inserir Frase")}
        />
        <Button
          title="Vêr Todas"
          color='#089757'
          onPress={() => navigation.navigate("Todas")}
        />
        <Button
          title="Reiniciar"
          color='#089757'
          onPress={init}
        />
        <Button
          title="Deletar Todas"
          color='#aa3344'
          onPress={clear}
        />
        <Button
          title="Sobre"
          color='#089757'
        />

        <View
        style={styles.button}>
          <Text onPress={() => navigation.navigate("Dê-me uma Frase")}
            style={styles.textButton}>
           Dê-me uma frase
          </Text>
          <AntDesign name="rightcircleo" size={24} color="white"
            onPress={() => navigation.navigate("Dê-me uma Frase")}/>
        </View>

      </View>

    </View>
  );
}

export default Home;
