import React, { useState } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SquareDetails from '../screens/components/SquareDetails';

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    
    const COLOR_INCREMENT = 15;

    const setColor = (color, change) => {

        switch(color) {

            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                break;
             case 'green':
                 green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                break;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                break;
            default:
                break;
        }
    };
        
    return(
    <View>
        <SquareDetails 
        onIncrease = {() => setColor('red', COLOR_INCREMENT)}
        onDecrease = {() => setColor('red', -1 * COLOR_INCREMENT)}
         color="Red"
          />
        <SquareDetails 
        onIncrease = {() => setColor('green', COLOR_INCREMENT)}
        onDecrease = {() => setColor('green', -1 * COLOR_INCREMENT)}
         color="Green"
          />
          <SquareDetails 
        onIncrease = {() => setColor('blue', COLOR_INCREMENT)}
        onDecrease = {() => setColor('blue', -1 * COLOR_INCREMENT)}
         color="Blue"
          />

          <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}></View>
    </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;