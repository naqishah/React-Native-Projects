/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {

    componentDidMount() {

        const firebaseConfig = {
            apiKey: "AIzaSyDmW9yuNB993PigFMiXBOhf-pRFohMYZQk",
            authDomain: "manager-d45c9.firebaseapp.com",
            databaseURL: "https://manager-d45c9.firebaseio.com",
            projectId: "manager-d45c9",
            storageBucket: "manager-d45c9.appspot.com",
            messagingSenderId: "491624422096",
            appId: "1:491624422096:web:a492eb40a97bceb84d9cd5",
            measurementId: "G-KHLD761PRX"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    }

    render() {

        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hello!</Text>
                </View>
            </Provider>
        );
    }
}

export default App;