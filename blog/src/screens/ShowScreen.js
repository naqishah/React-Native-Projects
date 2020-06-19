import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Context } from './context/BlogContext';

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            
    <Text>{blogPost.title}</Text>
    <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {

    return {
        headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <Image source={require('../../assets/pencil_icon.png')} style={styles.iconStyle} />
            </TouchableOpacity>
            )
    };
};

const styles = StyleSheet.create({

    iconStyle: {
        width: 50,
        height: 50,
        alignSelf: "center",
        marginRight: 10,
    }

});

export default ShowScreen;