/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { LinkButton, LoginForm } from '../../components';
import { customerSignUpButton, forgotPasswordUsernameButton } from '../../Common';
import { okapi_background_color, blue_grey_700 } from '../../styles/Colors';

class LoginScreen extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logosView}>
                    <Image source={require('../../assets/images/pci_logo.png')} style={styles.pciLogo} />
                    <Image source={require('../../assets/images/okapi_logo.png')} style={styles.okapiLogo} />
                    <View style={styles.okapiLogo2}></View>
                    <View />
                </View>
                <View style={{ flex: 3 }}>
                <LoginForm />
                </View>
                <View style={{ flex: 1 }}>
                <LinkButton title={customerSignUpButton} />
                    <LinkButton title={forgotPasswordUsernameButton} />
                </View>
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
    },
    pciLogo: {
        height: 50,
        resizeMode: 'contain',
        flex: 1,
    },
    okapiLogo: {
        height: 150,
        resizeMode: 'contain',
        flex: 1,
    },
    okapiLogo2: {
        flex: 1,
    },
});

export { LoginScreen };