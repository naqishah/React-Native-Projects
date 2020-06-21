/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const Input = ({ label, secureTextEntry, value, onChangeText, placeholder }) => {

    const { inputStyle, labelStyle, containerStyle } = styles;
    return (

        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            autoCorrect={false}
            style={inputStyle}
            placeholder={placeholder}

             />
        </View>
    );
};


const styles = StyleSheet.create({

    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },

    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },

    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { Input };
