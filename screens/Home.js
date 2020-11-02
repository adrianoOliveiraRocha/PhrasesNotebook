import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';

function Home({ navigation }) {

  function clear() {
    Phrase.clear();
  }
  return (
    <View style={styles.container}>

      <View style={styles.subContainer}>
        <Text style={styles.text}>
          Estudar inglês com frases é simples. Você apenas adiciona frases ao
          appicativo e depois pede-lhe frases aleatórias. O App lhe mostra a frase
          e você tem a opção de ouvir o som de cada frase
        </Text>
      </View>
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
        title="Limpar"
        color='#089757'
        onPress={clear}
      />

    </View>
  );
}

export default Home;
