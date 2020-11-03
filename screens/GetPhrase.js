import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';

function GetPhrase({ navigation }) {
  const [phrase, setPhrase] = React.useState(null);
  (function() {
    Phrase.getPhrase()
      .then(result => {
        if(result) setPhrase(result.text);
        setPhrase('Você já viu todas as frases registradas. Volte para a tela inicial'
        +' e click no botão reiniciar!');
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
