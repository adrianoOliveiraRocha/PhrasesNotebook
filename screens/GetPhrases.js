import React from 'react';
import { View, Text, FlatList} from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';

function GetPhrases({ navigation }) {
  const [data, setData] = React.useState([]);
  // use async operation with automatic abortion on unmount
  (function useAsync(asyncFn, onSuccess) {
    React.useEffect(() => { //useEffects means: We need to do something after render
      let isMounted = true;
      Phrase.getPhrases() // my effect
        .then(result => {
          if(isMounted) {
            var arrayTemp=[];
            result.forEach((item) => {
              arrayTemp.push({key: item.text});
            });
            setData(arrayTemp);
          }
        })
        .catch(e => {
          alert(e);
        });
    }, [asyncFn, onSuccess]);
  })();

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
