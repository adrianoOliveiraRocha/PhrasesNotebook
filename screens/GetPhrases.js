import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import styles from './styles/main';
import Phrase from './../models/Phrase';

function Item({ item }) {
  console.log(item);
  return (
    <View style={styles.item}>
      <Text style={styles.title} onPress={() => alert(item.key)}>{item.title}</Text>
    </View>
  );
}

function GetPhrases({ navigation }) {

  function renderItem({ item }) {
    console.log(item);
    return (
      <Item item={item} />
    );
  }

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
              arrayTemp.push({key: `${item.id}`, title: item.text});
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
    <SafeAreaView style={styles.formContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}

export default GetPhrases;
