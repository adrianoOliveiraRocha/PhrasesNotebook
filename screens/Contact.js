import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function Contact({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03cafc'
      }}>
      <Text
        style={{
          fontSize: 20,
          color: '#ffffff',
          fontWeight: '800'
        }}
      >Contact is here</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}

export default Contact;
