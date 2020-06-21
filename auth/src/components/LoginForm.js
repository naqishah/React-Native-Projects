/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common';

class LoginForm extends Component {

    state = { email: '', password: '', error: '', loading: false };

    buttonPressed() {

        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed!', loading: false });
    }

    onLoginSuccess() {

        this.state({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if(this.state.loading) {
            return <Spinner size="small" />;
        }

        return (
            <Button 
            onPress={this.buttonPressed.bind(this)}
            buttonText="Log in"
            />
        );
    }

    render() {
        return (
            <Card>
            <CardSection>
                <Input 
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                label='Email'
                placeholder = 'john@gmail.com'
                />
            </CardSection>
            
            <CardSection>
                <Input 
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry
                label='Password'
                placeholder = '***********'
                />
            </CardSection>

            { this.state.error ? <Text style={styles.errorTextStyle}>{this.state.error}</Text> : null }

            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
        );
    }

}

const styles = StyleSheet.create({

    errorTextStyle: {
        fontSize: 18,
        alignSelf: "center",
        color: 'red'
    }
});

export default LoginForm;
