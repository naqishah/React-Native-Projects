/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { blue_grey_700 } from '../styles/Colors';

const LinkButton = ({ title }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Text style={styles.textStyle}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: blue_grey_700,
        textDecorationLine: 'underline',
    }
});

export { LinkButton };
