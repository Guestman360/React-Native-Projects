import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AlbumDetail from './src/components/AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() { // Lifecycle method, this is imilar to viewDidAppear
        // Requst is asyncronous so it is a promise, fulfill by calling .then statement 
        // then is called when request is complete
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        // Reference javascript variable requires { }
        return this.state.albums.map(album => 
            <Text key={album.title}>{album.title}</Text>
        );
    }

    render() { // All class based components must have render method to return some JSX
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;