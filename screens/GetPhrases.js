import React from 'react';
import { View, Text, FlatList} from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';

function GetPhrases({ navigation }) {
  const [data, setData] = React.useState([]);

  Phrase.getPhrases()
    .then(result => {
      var arrayTemp=[];
      result.forEach((item) => {
        arrayTemp.push({key: item.text});
      });
      setData(arrayTemp);
    })
    .catch(e => {
      alert(e);
    });

  return (
    <View style={styles.formContainer}>
      <View style={[styles.formField, {marginBottom: 10}]}>

        <FlatList
          data={data}
          renderItem={({item}) => <Text style={[styles.item]}>{item.key}</Text>}
        />

      </View>
    </View>
  );
}

export default GetPhrases;
