import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../screens/api/yelp';

const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    console.log(id);

    const getResults = async () => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResults(id);
    }, []);

    if(!result) {
        return null;
    }

    return (
    <View>
        <Text>{result.name}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
            return <Image style={styles.imageStyle} source={{uri: item}}/>
        }}
        />
    </View>
    );
};

const styles = StyleSheet.create({

    imageStyle: {
        width: 250,
        height: 250,
        borderRadius: 4,
        marginTop: 5
    }
});

export default ResultsShowScreen;