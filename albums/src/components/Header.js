/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

const Header = ({headerText}) => {

    const { containerStyle, textStyle } = styles;
    return (

        <View style={containerStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};


const styles = {

    //#EBEBEB
    containerStyle: {
        backgroundColor: '#F8F8F8',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        shadowOffset: { width: 0, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 7,
    },

    textStyle: {
        fontSize: 20,
    }
};

export default Header;
