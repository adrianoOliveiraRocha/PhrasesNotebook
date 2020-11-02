import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';

function InsertPhrase({ navigation }) {
  const [phrase, setPhrase] = React.useState('');

  function change(text) {
    setPhrase(text);
  }

  function savePhrase() {
    Phrase(phrase);
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.formField}>
        <Text style={styles.formLabel}>Frase</Text>
        <TextInput
          placeholder='sua frase aqui...'
          style={styles.formItemInput}
          value={phrase}
          onChangeText={change}/>
      </View>
      <Button title='Salvar Frase'
        color='#089757'
        onPress={savePhrase}
      />
    </View>
  );
}

export default InsertPhrase;
