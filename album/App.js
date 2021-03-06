import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component { // headertext passed from {props.headerText} in Header.js
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'}/>
        <AlbumList />
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
