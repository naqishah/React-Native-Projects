/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, buttonText }) => {

    const {buttonStyle, buttonTextStyle} = styles;
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={buttonStyle}>
        <Text style={buttonTextStyle}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = {

    buttonStyle: {
        flex: 1,
        backgroundColor: "#fff",
        alignSelf: "stretch",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },

    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export { Button };