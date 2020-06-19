import React, { useState } from 'react';
import {View, Button, StyleSheet, FlatList, Text} from 'react-native';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);
    const [counter, setCounter] = useState(0);

    return (
        <View>
        <Button title="Add a Color" onPress={() => {
            setColors([...colors, randomColor()]);
            setCounter(counter + 1);
        }}/>

        <FlatList
        keyExtractor = {(item) => item}
        data = {colors}
        renderItem = {({ item }) => {
            return (
            <View style={{height:100, width:100, backgroundColor : item }}><Text>{counter}</Text></View>
            );
        }}
        />
    </View>
    );
};

const randomColor = () => {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;