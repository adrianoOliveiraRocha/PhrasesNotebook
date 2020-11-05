import React from 'react';
import { View, Text, Button, ToastAndroid } from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';
import * as Speech from 'expo-speech';

function GetPhrase({ navigation }) {
  const [phrase, setPhrase] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [phraseExists, setPhraseExists] = React.useState(true);

  function speak() {

    const start = () => {
      ToastAndroid.show('Falando...', ToastAndroid.SHORT);
    }

    var options = {
      language: 'en-AU',
      pitch: 1.0,
      rate: 1.0,
      onStart: start,
      onError: (error) => alert('Oops! Tivemos um erro: ' + error),
    };

    Speech.speak(
      phrase,
      options,
    );

  }

  function choosePhrase(phrases) {
    var choosedPhrase = null;

    for (var i in phrases) {
      if(!phrases[i].used) {
        choosedPhrase = phrases[i].text;
        setId(phrases[i].id);
        break;
      }
    }

    if(choosedPhrase) setPhrase(choosedPhrase);
    else {
      setPhrase("Você já usou todas as frases registradas. Pressione Home para "
      +"voltar à tela inicial e pressione o botão reiniciar");
      setPhraseExists(false);
    }
    makeAsUsed();



  }

  function makeAsUsed() {
    Phrase.makeAsUsed(id)
      .then(result => {
        console.log(result);
      })
      .catch(e => {
        alert(e);
      });
  }

  async function deletePhrase() {
    Phrase.delete(id)
      .then(result => {
        if(result) {
          setPhrase('');
          alert("Frases deletada com sucesso!");
        }
      })
      .catch(e => {
        alert(e);
      });
  }

  (function() {
    Phrase.getPhrase()
      .then(phrases => {
        choosePhrase(phrases);
      })
      .catch(e => {
        alert(e);
      })
  })();

  function nextOne() {
    Phrase.getPhrase()
      .then(phrases => {
        choosePhrase(phrases);
      })
      .catch(e => {
        alert(e);
      })
  }

  if(id && phraseExists) {
    return (
      <View style={styles.formContainer}>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>{phrase}</Text>
        </View>

        <View style={[styles.buttonsContainer, {height: 100}]}>
          <Button
            title="Próxima"
            color='#089757'
            onPress={nextOne}
          />
          <Button
            title="Ouvir"
            color='#089757'
            onPress={speak}
          />
          <Button
            title="Deletar"
            color='#aa3344'
            onPress={deletePhrase}
          />
        </View>

      </View>
    );
  } else {
    return (
      <View style={styles.formContainer}>
        <View style={styles.formField}>
          <Text style={[styles.formLabel]}>{phrase}</Text>
        </View>
        <View style={[styles.buttonsContainer, {height: 100}]}>
          <Button
            title="Home"
            color='#089757'
            onPress={() => navigation.navigate("Home")}
          />

        </View>
      </View>
    );
  }
}

export default GetPhrase;
