import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';

function Home({ navigation }) {

  function clear() {
    Phrase.clear()
      .then(result => {
        if(result) alert('Todas as suas frases foram deletadas');
      })
      .catch(e => {
        alert(e);
      })
  }

  function init() {
    Phrase.init()
      .then(() => {
        alert('Reiniciado com sucesso');
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
          title="Limpar"
          color='#089757'
          onPress={clear}
        />
      </View>

    </View>
  );
}

export default Home;
