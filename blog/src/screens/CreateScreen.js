import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from './context/BlogContext';

const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput 
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={styles.input}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput 
            value={content} 
            onChangeText={(text) => setContent(text)}
            style={styles.input}
            />
            <Button 
            title="Add Blog Post"
            onPress={ () => { addBlogPost(title, content, () => {
                navigation.navigate('Index');
            });
         }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        margin: 5,
        padding: 5
    },

    label: {
        fontSize: 20,
        marginLeft: 5,
        marginBottom: 5
    }
});

export default CreateScreen;