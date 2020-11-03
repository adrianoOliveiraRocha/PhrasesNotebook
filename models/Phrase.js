import AsyncStorage from '@react-native-community/async-storage';

const Phrase = {

  getPhrases: async function() {
    try {
      let phrases = await AsyncStorage.getItem('phrases');
      return JSON.parse(phrases);
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  getPhrase: async function() { // get just one not used phrase
    try {
      var phrases = await this.getPhrases();
      return phrases;
    } catch (e) {
      return e;
    }
  },

  insert: async function(phrase) {
    let result = await this.getPhrases();
    if(result) { // We have some phrase here
      var lastId;
      var data = [];
      result.forEach((item, i) => {
        lastId = item.id;
        let temp = { id: item.id, text: item.text, used: item.used };
        data.push(item);
      });
      let newPhraseId = parseInt(lastId) + 1;
      var newPhrase = { id: newPhraseId, text: phrase, used: false };
      data.push(newPhrase);
      let stringData = JSON.stringify(data);
      await AsyncStorage.setItem('phrases', stringData);
      return true;
    } else { // The result is null So it is the first phrase
      let data = [{ id: 1, text: phrase, used: false }];
      let stringData = JSON.stringify(data);
      await AsyncStorage.setItem('phrases', stringData);
      return true;
    }
  },

  clear: async function() {
    try {
      await AsyncStorage.removeItem('phrases');
      return true;
    } catch (e) {
      return e;
    }
  },

  init: async function() {
    /* Make all phrases unused */
    try {
      var result = await AsyncStorage.getItem('phrases');
      var JSONData = JSON.parse(result);
      var data = [];
      for (let phrase of JSONData) {
        let temp = { id: phrase.id, text: phrase.text, used: false };
        data.push(temp);
      }
      console.log(data);
      var stringData = JSON.stringify(JSONData);
      // await AsyncStorage.removeItem('phrases');
      await AsyncStorage.setItem('phrases', stringData);
      return;
    } catch(e) {
      return e;
    }
  },

  makeAsUsed: async function(id) {
    var phrases = await AsyncStorage.getItem('phrases');
    forEach((p) => {
      console.log(p);
    });

  }

}

module.exports = Phrase;
