import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    // TextInput doesn't know it's value, state tells it it's value
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        // Destructuring to use state properties in this method
        const { email, password } = this.state;

        // Resetting state here
        this.setState({ error: '', loading: true });

        // functions below return a promise (in this case it is 'catch'), think of 2 choices, success or fail
        // If the request fails it falls into catch and runs next finction, then sets error state if all cases failed
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginsuccess.bind(this))
            .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginsuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false });
    }

    onLoginsuccess() {
        this.setState({ 
            email: '',
            password: '',
            loading: false,
            error: ''
         });
    }

    // Helper method that returns some JSX
    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry={true}
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;