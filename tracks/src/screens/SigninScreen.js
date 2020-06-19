import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from './context/AuthContext';
import AuthForm from './components/AuthForm';
import NavLink from './components/NavLink';

const SigninScreen = ({ navigation }) => {

    const { state, signinUser, clearErrorMessage } = useContext(AuthContext);

    return (
    <View style={styles.container}>
    
     <NavigationEvents onWillBlur={ clearErrorMessage }/>

       <AuthForm
        headerTitle="Sign In for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signinUser}
        submitButtonText="Sign In"
       />

        <NavLink 
        onSubmit={() => navigation.navigate('Signup') }
        linkText="Do not have an account? Signup here"
        />
    </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    }
});

export default SigninScreen;