import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WannaEat</Text>
      <Text>[현재 위치]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#7ba5e8',
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 5,
  },

  container: {
    // marginTop: 50
  },
});
