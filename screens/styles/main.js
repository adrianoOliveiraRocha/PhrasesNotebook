import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#66c'
  },

  subContainer: {
    flex: 0.4,
    alignItems: 'center',
    marginTop: 80,
  },

  buttonsContainer: {
    flex: 0.6,
    flexDirection: 'column',
    width: 185, height: 250, alignItems: 'stretch',
    justifyContent: 'space-around',
    // padding: 10,
    margin: 10
  },

  // bannerContainer: {
  //   flex: 0.2,
  //   alignItems: 'flex-end',
  //   justifyContent: 'flex-end'
  // },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 3, borderColor: 'white',
    padding: 5, backgroundColor: '#16a085'
  },

  textButton: {
    color: 'white',
    fontSize: 16
  },

  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66c'
  },

  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: '800',
    margin: 10,
    justifyContent: 'center'
  },

  formField: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'column',
    marginVertical: 20
  },

  formLabel: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    // padding: 5,
    // backgroundColor: 'blue'
  },

  formItemInput: {
    width: 300,
    height: 50,
    marginHorizontal: 5,
    borderWidth: 2,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },

  item: {
    backgroundColor: '#1abc9c',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    alignItems: 'center'
  },

  title: {
    fontSize: 18, color: 'white',
    padding: 10
  }

});

export default styles;
