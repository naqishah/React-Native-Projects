import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewStyle1}></View>
            <View style={styles.viewStyle2}></View>
            <View style={styles.viewStyle3}></View>
        </View>
    );
};

const styles = StyleSheet.create({

    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    viewStyle1: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        height: 50,
        width: 50,
    },

    viewStyle2: {
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'green',
        height: 50,
        width: 50,
        top:50
    },

    viewStyle3: {
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'purple',
        height: 50,
        width: 50,
    },

    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
        alignSelf: 'flex-start'
    },

    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
        alignSelf: 'center'
    },

    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 1,
        alignSelf: 'flex-end'
    }
});

export default BoxScreen;


