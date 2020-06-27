/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, LinkButton } from '../../components';
import { LoginButton_Title, CustomerSignUp_Button } from '../../Common';
import { okapi_background_color } from '../../styles/Colors';

class LoginScreen extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logosView}>
                    <Image source={require('../../assets/images/pci_logo.png')} style={styles.pciLogo} />
                    <Image source={require('../../assets/images/okapi_logo.png')} style={styles.okapiLogo} />
                    <View />
                </View>

                    <Image source={require('../../assets/images/newLoginScreenImage.png')} style={styles.newLoginScreenImage} />
                    <Button buttonMarginTop={20} title={LoginButton_Title} />
                    <LinkButton title={CustomerSignUp_Button} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: okapi_background_color,
        flex: 1
    },
    logosView: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    pciLogo: {
        height: 70,
        width: 80,
        resizeMode: 'contain',
    },
    okapiLogo: {
        height: 180,
        width: 180,
        resizeMode: 'contain',
        marginRight: 75
    },
    newLoginScreenImage: {
        marginTop: 10,
        height: 250,
        width: null,
        resizeMode: 'stretch',
    },
});

export { LoginScreen };