import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {

    const [name, setName] = useState('');

    return (
        <View>

        <Text>Enter Password:</Text>
          <TextInput 
          style={styles.input}
          autoCapitalize = "none"
          autoCorrect = {false}
          value = {name}
          onChangeText = {(newValue) => setName(newValue)}
          /> 
        <Text>My name is {name}</Text>
        {name.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    
    input: {
        margin: 15,
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default TextScreen;
