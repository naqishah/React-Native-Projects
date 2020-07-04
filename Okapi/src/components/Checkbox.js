/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Checkbox extends Component {

    state = { checked: false };

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.setState({ checked: !this.state.checked })}>
                    {this.state.checked ? <Image style={styles.checkboxImageStyle} source={require('../assets/images/checkbox_checked.png')} />
                        : <Image style={styles.checkboxImageStyle} source={require('../assets/images/checkbox_unchecked.png')} />}
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    checkboxImageStyle: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
});

export default Checkbox;
