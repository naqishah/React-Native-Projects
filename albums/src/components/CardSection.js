/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = ({ children }) => {

    return (
        <View style= {styles.containerStyle}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({

    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'flex-start',
        flexDirection: "row",
        position: "relative",
        padding: 5,
        backgroundColor: '#fff'
    }
});


export default CardSection;
