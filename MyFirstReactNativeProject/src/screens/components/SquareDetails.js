import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SquareDetails = ({color, onIncrease, onDecrease}) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`More ${color}`} />
            <Button onPress={() => onDecrease()} title={`Less ${color}`} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareDetails;
