import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    componentWillMount() { // Lifecycle method, this is imilar to viewDidAppear
        console.log('Fuck bitches, get money')
    }
// https://rallycoding.herokuapp.com/api/music_albums
    render() { // All class based components must have render method to return some JSX
        return (
            <View>
                <Text>Album List !!!</Text>
            </View>
        );
    }
}

export default AlbumList;