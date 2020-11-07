import React from 'react';
import { View, Text, Button, TextInput, ToastAndroid } from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';
import { AntDesign, Entypo } from '@expo/vector-icons';

function InsertPhrase({ navigation }) {
  const [phrase, setPhrase] = React.useState('');

  function change(text) {
    setPhrase(text);
  }

  function savePhrase() {
    Phrase.insert(phrase)
      .then(result => {
        if(result) {
          ToastAndroid.show('Sua frase foi inserida com sucesso!', ToastAndroid.SHORT);
          setPhrase('');
        }
      })
      .catch(error => {
        console.error(error);
        alert(error)
      });
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.formField}>
        <Text style={styles.formLabel}>Inserir Frase</Text>
        <TextInput
          placeholder='Digite sua frase aqui...'
          style={styles.formItemInput}
          value={phrase}
          onChangeText={change}/>
      </View>
      <View style={[styles.buttonsContainer, {height: 100}]}>

        <View style={styles.button}>
          <Text onPress={savePhrase}
            style={styles.textButton}>
           Salvar Frase
          </Text>
          <Entypo name="arrow-bold-right" size={24} color="white"
          onPress={savePhrase}/>
        </View>

        <View style={styles.button}>
          <Text onPress={() => navigation.navigate("Home")}
            style={styles.textButton}>
           Home
          </Text>
          <AntDesign name="home" size={24} color="white"
            onPress={() => navigation.navigate("Home")}/>
        </View>

      </View>
    </View>
  );
}

export default InsertPhrase;
