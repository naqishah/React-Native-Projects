import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Context } from './context/BlogContext';

const IndexScreen = ({ navigation }) => {

    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    useEffect(() => {
        getBlogPosts();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        return () => {
            listener.remove();
        };

    }, []);

    return(
        <View>
            <FlatList
            data = {state}
            keyExtractor = {(blogPost) => blogPost.title}
            renderItem = { ({ item }) => {

            return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
            <View style={styles.row}>
                <Text style={styles.textStyle}>{item.title} - {item.id}</Text> 
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Image source={require('../../assets/trash_icon2.png')} style={styles.iconStyle} />
                </TouchableOpacity>
            </View>
            </TouchableOpacity>
            );
            }}
             />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {

    return {
        headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Image source={require('../../assets/plus_icon.png')} style={styles.iconStyle} />
            </TouchableOpacity>
            )
    };
};

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },

    textStyle: {
        fontSize: 18
    },

    iconStyle: {
        width: 25,
        height: 30,
        alignSelf: "center",
        marginRight: 10,
    }

});

export default IndexScreen;
