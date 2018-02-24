import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

// Use class for handlind state and lifecycle as opposed to const a simpler alternative 
class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() { // Lifecycle method, this is imilar to viewDidAppear
        // Requst is asyncronous so it is a promise, fulfill by calling .then statement 
        // then is called when request is complete
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data })); // passes the response data to albums variable
    }
    // The property names are dictated by the json keys, know the json in order to know the proper keys to use
    renderAlbums() {
        // Reference javascript variable requires { }
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() { // All class based components must have render method to return some JSX
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;