import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {

    const myName = "Syed Ali Naqi";
    return (
        <View>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.textStyleForMyName}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    textStyle: {
        fontSize:45
    },
    textStyleForMyName: {
        fontSize:20
    }
});

export default ComponentsScreen;