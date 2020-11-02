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

  insert: async function(phrase) {
    let result = await this.getPhrases();
    if(result) {
      return 'phrase exists';
    } else { // it it the first phrase
      let data = [{ text: phrase, used: false }];
      let stringData = JSON.stringify(data);
      await AsyncStorage.setItem('phrases', stringData);
      return true;
    }
  },

  clear: function() {
    alert('clear');
  }

}

module.exports = Phrase;
