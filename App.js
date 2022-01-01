import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Wanna Eat</Text>
        </View>
        <View style={styles.main}>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1
  },

  title:{
    fontSize: 30
  },

  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  main:{
    flex: 9,
    backgroundColor: 'blue',
  }
});