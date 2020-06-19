import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.backgroundStyle}>
            <Image source={require('../../../assets/search_icon.png')} style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize = 'none'
            autoCorrect = {false}
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}/>
        </View>
    );
};

const styles = StyleSheet.create({

    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#E8E8E8',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;