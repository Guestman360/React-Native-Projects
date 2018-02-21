import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Albums'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center', // horizontal
  //   justifyContent: 'center', // vertical
  // },
});