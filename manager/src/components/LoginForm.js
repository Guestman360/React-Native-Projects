import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    // these functions call the actions from the index.js actions file
    onEmailChange(text) {
        this.props.emailChanged(this);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(this);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        // IT SEEMS LIKE THIS.PROPS HAS ACCESS TO LOADING SIMPLY BECASUE WE'RE USING MAPSTATETOPROPS WHICH CONNECTS TO
        // AUTH, WHICH IN TURN CONNECTS TO AUTHREDUCER WHICH OWNS LOADING...
        // If loading show spinner
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
    
        // otherwise show button
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

// we tell input what it's value is
// bind(this) calls the function we declared in this file, to this prop
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
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
}

const mapStateToProps = ({ auth }) => {
    // Pulling all properties off of auth reducer - REMEMBER that auth is from index.js/Reducers
    const { email, password, error, loading } = auth; // FROM THE AUTHREDUCER

    return { email, password, error, loading }; 
};
// DON'T FORGET TO ADD NEW ACTIONS TO CONNECT FUNCTION!!!
export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser 
})(LoginForm);