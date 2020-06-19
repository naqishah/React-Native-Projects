import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from '../components/ResultDetails';
import { withNavigation } from 'react-navigation';

const ResultList = ({ title, results, navigation }) => {

    if(!results.length) {

        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data = {results}
                keyExtractor = {result => result.id}
                renderItem = { ({item}) => {
                 return (
                     <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
                         <ResultDetails result={item}/>
                    </TouchableOpacity>
                 )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        marginLeft: 15
    },

    container: {
        marginTop: 10
    }
});

export default withNavigation(ResultList);
