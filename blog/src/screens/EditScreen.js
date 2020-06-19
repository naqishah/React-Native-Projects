import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from './context/BlogContext';

const EditScreen = ({ navigation }) => {

    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text style={styles.label}>Enter New Title:</Text>
            <TextInput 
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={styles.input}
            />
            <Text style={styles.label}>Enter New Content:</Text>
            <TextInput 
            value={content} 
            onChangeText={(text) => setContent(text)}
            style={styles.input}
            />
            <Button 
            title="Edit Blog Post"
            onPress={ () => { editBlogPost(blogPost.id, title, content, () => {
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

export default EditScreen;
