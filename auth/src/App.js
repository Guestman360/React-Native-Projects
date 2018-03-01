import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBc8RgRvOda0tIZU-xpkeJ5iJm_xsKPFK0",
            authDomain: "auth-11576.firebaseapp.com",
            databaseURL: "https://auth-11576.firebaseio.com",
            projectId: "auth-11576",
            storageBucket: "auth-11576.appspot.com",
            messagingSenderId: "964484583691"
        });

        // When auth state changes if user signed in, user object will be used otherwise returns undefined 
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    // Helper method - Technique called conditional rendering
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large"/>
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;