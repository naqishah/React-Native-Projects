import React from 'react';
import Spacer from './Spacer';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

const NavLink = ({ onSubmit, linkText }) => {

    return (
    <>
    <TouchableOpacity onPress={onSubmit}>
        <Spacer>
            <Text style={styles.link}>{linkText}</Text>
        </Spacer>
        </TouchableOpacity>
    </>
    );
};

const styles = StyleSheet.create({
    
    link: {
        color: 'blue',
        fontSize: 18
    }
});

export default NavLink;