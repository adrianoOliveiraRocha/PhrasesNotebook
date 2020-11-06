import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#124578'
  },

  buttonsContainer: {
    flexDirection: 'column',
    width: 185, height: 300, alignItems: 'stretch',
    justifyContent: 'space-around',
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2, borderColor: 'white',
    padding: 5, backgroundColor: '#089757'
  },

  textButton: {
    color: '#fff',
    fontSize: 16
  },

  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#124578'
  },

  subContainer: {
    margin: 10,
    backgroundColor: '#222',
    alignItems: 'center'
  },

  text: {
    fontSize: 15,
    color: 'white',
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
    textAlign: 'center'
  },

  formItemInput: {
    width: 250,
    marginHorizontal: 5,
    borderWidth: 2,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },

  title: {
    fontSize: 18
  }

});

export default styles;
