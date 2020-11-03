import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';

function GetPhrase({ navigation }) {
  const [phrase, setPhrase] = React.useState(null);
  const [id, setId] = React.useState(null);

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
    else setPhrase("Você já usou todas");
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

  function deletePhrase() {
    alert(id);
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

  if(id) {
    return (
      <View style={styles.formContainer}>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>{phrase}</Text>
        </View>

        <View style={[styles.buttonsContainer, {height: 100}]}>
          <Button
            title="Deletar"
            color='#aa3344'
            onPress={deletePhrase}
          />
          <Button
            title="Ouvir"
            color='#089757'
            // onPress={}
          />
        </View>

      </View>
    );
  } else {
    return (
      <View style={styles.formContainer}>
        <View style={styles.formField}>
          <Text style={styles.formLabel}>{phrase}</Text>
        </View>
      </View>
    );
  }

}

export default GetPhrase;
