import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';

function GetPhrases({ navigation }) {
  (function() {
    Phrase.getPhrases()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      })
  })();
  return (
    <View style={styles.formContainer}>
      <View style={styles.formField}>
        <Text style={styles.formLabel}>Todas</Text>
      </View>
    </View>
  );
}

export default GetPhrases;
