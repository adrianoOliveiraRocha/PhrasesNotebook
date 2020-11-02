import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#03cafc'
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03cafc'
  },
  subContainer: {
    margin: 10,
    backgroundColor: '#ddd',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontWeight: '800',
    margin: 10,
    justifyContent: 'center'
  },

  formField: {
    alignItems: 'flex-start',
    padding: 10,
    flexDirection: 'row',
    marginVertical: 20
  },

  formLabel: {
    color: 'white',
    marginHorizontal: 5,
    fontSize: 20,
  },

  formItemInput: {
    width: 250,
    marginHorizontal: 5,
    borderWidth: 2,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,

  }
});

export default styles;
