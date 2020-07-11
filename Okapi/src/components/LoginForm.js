/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet, View, TextInput, ScrollView, Image, Dimensions } from 'react-native';
import { blue_grey_700, login_input_backgroundColor, login_input_borderColor } from '../styles/Colors';
import Spacer from './Spacer';
import { userNameCapsColon, passwordCapsColon, enableFingerprintLogin, loginButtonTitle } from '../Common/Strings';
import Checkbox from './Checkbox';
import Button from './Button';


class LoginForm extends Component {


    moveToEnd() {
        setTimeout(() => {
            this.scrollViewRef.scrollToEnd();
        }, 50);
    }

    render() {

        const { conatinerStyle, textStyle, inputStyle, checkBoxViewStyle, checkboxTextStyle, scrollViewStyle, newLoginScreenImage } = styles;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={scrollViewStyle}
                    pagingEnabled={true}
                    ref={(ref) => { this.scrollViewRef = ref }}
                >

                    <View style={{ flex: 1 }}>
                        <Image source={require('../assets/images/newLoginScreenImage.png')} style={newLoginScreenImage} />
                    </View>

                    <View style={conatinerStyle}>
                        <Text style={textStyle}>{userNameCapsColon}</Text>
                        <TextInput style={inputStyle} />
                        <Spacer />
                        <Text style={textStyle}>{passwordCapsColon}</Text>
                        <TextInput style={inputStyle} secureTextEntry={true} />

                        <View style={checkBoxViewStyle}>
                            <Checkbox />
                            <Text style={checkboxTextStyle}>{enableFingerprintLogin}</Text>
                        </View>
                    </View>
                </ScrollView>

                <Button title={loginButtonTitle} onPress={() => this.moveToEnd()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    conatinerStyle: {
        marginTop: 40,
        width: Dimensions.get('window').width,
    },
    textStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: blue_grey_700,
    },
    inputStyle: {
        color: '#000',
        height: 40,
        width: 300,
        borderColor: login_input_borderColor,
        borderWidth: 1,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: login_input_backgroundColor,
        fontSize: 18
    },
    checkBoxViewStyle: {
        flexDirection: 'row',
        marginLeft: 58,
        marginTop: 10,
    },
    checkboxTextStyle: {
        fontSize: 15,
        alignSelf: 'center',
        color: blue_grey_700,
        marginLeft: 10,
    },
    newLoginScreenImage: {
        marginTop: 10,
        height: 250,
        width: Dimensions.get('window').width,
        resizeMode: 'stretch',
    },
    scrollViewStyle: {
        flex: 1,
    }
});

export { LoginForm };
