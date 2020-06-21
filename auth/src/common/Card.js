/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => {

    return (
        <View style={styles.containerStyle}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({

    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowOffset: { width: 0, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 7,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
});

export { Card };