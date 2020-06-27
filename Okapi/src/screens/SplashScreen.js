/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const SplashScreen = () => {

    return (
        <View style={styles.backgroundImage}>
            <Image source={require('../assets/images/launch_image.png')} />
        </View>
    );
};

const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SplashScreen;