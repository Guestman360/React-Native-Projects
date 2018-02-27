import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBc8RgRvOda0tIZU-xpkeJ5iJm_xsKPFK0",
            authDomain: "auth-11576.firebaseapp.com",
            databaseURL: "https://auth-11576.firebaseio.com",
            projectId: "auth-11576",
            storageBucket: "auth-11576.appspot.com",
            messagingSenderId: "964484583691"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm>

                </LoginForm>
            </View>
        );
    }
}

export default App;