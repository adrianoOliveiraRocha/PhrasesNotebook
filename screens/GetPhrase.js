import React from 'react';
import { View, Text} from 'react-native';
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
    setPhrase(choosedPhrase);
    makeAsUsed();
  }

  function makeAsUsed() {
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

  return (
    <View style={styles.formContainer}>
      <View style={styles.formField}>
        <Text style={styles.formLabel}>{phrase}</Text>
      </View>
    </View>
  );

}

export default GetPhrase;
