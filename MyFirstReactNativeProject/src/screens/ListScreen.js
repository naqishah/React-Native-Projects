import React from 'react';
import { View, Text, StyleSheet , FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ListScreen = () => {

    const officeColleguesArray = [
        { name : "Somi", age: 26 },
        { name : "Junaid", age: 26 },
        { name : "Ali", age:26 },
        { name : "Ajmal", age:28 },
        { name : "Usman", age:28 },
        { name : "Hamid", age:26 },
        { name : "Saad", age:26 },
        { name : "Furrukh", age:29 },
        { name : "Ahtisham", age:26 }
    ];

    return (
        
        <FlatList style = {styles.viewStyle}
        keyExtractor = {(officeCollegue) => officeCollegue.name}
        data = {officeColleguesArray} 
        renderItem = {({item}) => {
        return <Text style = {styles.textStyle}>{item.name} - Age {item.age}</Text>;
        }} />
    );
}

const styles = StyleSheet.create(
    {
        textStyle: {
            marginVertical: 20,
            fontSize: 30
        },

        viewStyle: {
            borderColor: 'black',
            borderWidth: 2
        }
    }
    );

export default ListScreen;