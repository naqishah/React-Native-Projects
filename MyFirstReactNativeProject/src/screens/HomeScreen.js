import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {

    return(
        <View styles = {styles.applyBottomMarginStyle}>
        <Button
        onPress = {() => navigation.navigate('Components')}
        title = "Go to Components Screen"/>

        <Button 
        onPress = {() => navigation.navigate('List')}
        title = "Go to List Screen"/>

        <Button 
        onPress = {() => navigation.navigate('Image')}
        title = "Go to Image Screen"/>

        <Button 
        onPress = {() => navigation.navigate('Counter')}
        title = "Go to Counter Screen"/>

        <Button 
        onPress = {() => navigation.navigate('Color')}
        title = "Go to Color Screen"/>

        <Button 
        onPress = {() => navigation.navigate('SquareReducer')}
        title = "Go to Square Screen"/>

        <Button 
        onPress = {() => navigation.navigate('Text')}
        title = "Go to Text Screen"/>

        <Button 
        onPress = {() => navigation.navigate('Box')}
        title = "Go to Box Screen"/>
        </View>

    );
};

const styles = StyleSheet.create(
    {
        applyBottomMarginStyle: {
            marginBottom: 10
        }
    });

export default HomeScreen;