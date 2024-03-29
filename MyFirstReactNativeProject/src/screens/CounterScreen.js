import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {

    switch(action.type) {
        case 'change_increment':
            return {...state, count: state.count + action.payload};
        case 'change_decrement':
            return {...state, count: state.count - action.payload};
        default:
            return state;
    }
};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return(

        <View>

            <Button title="Increase" onPress={()=> {
               dispatch({type: 'change_increment', payload: 1})
            }}/>
            <Button title="Decrease" onPress={()=> {
                dispatch({type: 'change_decrement', payload: 1})
            }}/>
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;