import React from 'react';
import { View, Text, Button, ToastAndroid } from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';
import { AntDesign, Entypo } from '@expo/vector-icons';


function GetPhrase({ navigation }) {
  const [phrase, setPhrase] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [phraseExists, setPhraseExists] = React.useState(true);

  function initializing() {
    ToastAndroid.show('iniciando...', ToastAndroid.SHORT);
    speak();
  }

  function speak() {
    Phrase.speak(phrase);
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
      setPhrase("Você não tem nehuma frase na fila. "
      +"Na tela inicial, você pode reiniciar ou inserir mais frases");
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
        <View style={styles.item}>
          <Text style={styles.title}>{phrase}</Text>
          <AntDesign name="play" size={24} color="white" onPress={initializing} />
        </View>

        <View style={[styles.buttonsContainer, {height: 180}]}>

          <View style={styles.button}>
            <Text onPress={nextOne}
              style={styles.textButton}>
             Próxima
            </Text>
            <Entypo name="arrow-bold-right" size={24} color="white"
            onPress={nextOne}/>
          </View>

          <View style={styles.button}>
            <Text onPress={() => navigation.navigate("Home")}
              style={styles.textButton}>
             Home
            </Text>
            <AntDesign name="home" size={24} color="white"
              onPress={() => navigation.navigate("Home")}/>
          </View>

          <View
            style={[styles.button, {backgroundColor: '#aa3344'}]}>
            <Text onPress={deletePhrase}
              style={styles.textButton}>
             Deletar Frase
            </Text>
            <AntDesign name="delete" size={24} color="white"
              onPress={deletePhrase}/>
          </View>

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
}

export default GetPhrase;
