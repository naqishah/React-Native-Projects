/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    UNSAFE_componentWillMount() {

        const firebaseConfig = {
            apiKey: "AIzaSyAu1oMjVmdv5MXTG6n6Ac1fXq64BACqTjY",
            authDomain: "authentication-41041.firebaseapp.com",
            databaseURL: "https://authentication-41041.firebaseio.com",
            projectId: "authentication-41041",
            storageBucket: "authentication-41041.appspot.com",
            messagingSenderId: "986532673974",
            appId: "1:986532673974:web:6e67f9c1dc52fd6b8a6917",
            measurementId: "G-4LQDTCV36Q"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        //firebase.analytics();

        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {

        switch (this.state.loggedIn) {

            case true:
                return <CardSection><Button onPress={() => firebase.auth().signOut()} buttonText="Log Out" /></CardSection>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
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