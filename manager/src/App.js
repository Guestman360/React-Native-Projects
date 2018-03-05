import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

// Add file path of this file to project index.js file

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyC9w9DEIzzOzXRZ26uUwHtq9y061NGe13Q',
            authDomain: 'manager-2f32d.firebaseapp.com',
            databaseURL: 'https://manager-2f32d.firebaseio.com',
            projectId: 'manager-2f32d',
            storageBucket: 'manager-2f32d.appspot.com',
            messagingSenderId: '766569798599'
          };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;