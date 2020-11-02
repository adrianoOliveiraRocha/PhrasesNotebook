import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function About({ navigation }) {
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
      >About is here</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

export default About;
