/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { light_green_700, light_green_100 } from '../styles/Colors';

const Button = ({ buttonMarginTop, title }) => {

    return (
        <>
        <View style={{
            flex: 1,
            alignItems: 'center',
            marginTop: buttonMarginTop,
            }}>
            <TouchableOpacity style={styles.buttonContainerStyle}>
        <Text style={styles.textStyle}>{title}</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};

const styles = StyleSheet.create({

    textStyle: {
        color: light_green_700,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    buttonContainerStyle: {
        backgroundColor: light_green_100,
        height: 50,
        width: 300,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
});



export { Button };
