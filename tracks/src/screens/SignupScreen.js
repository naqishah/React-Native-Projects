import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from './context/AuthContext';
import AuthForm from './components/AuthForm';
import NavLink from './components/NavLink';

const SignupScreen = ({ navigation }) => {

    const { state, signupUser, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return (
    <View style={styles.container}>
       
       <NavigationEvents onWillBlur={ clearErrorMessage }/>
       <AuthForm
        headerTitle="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={signupUser}
        submitButtonText="Sign Up"
       />

        <NavLink 
        onSubmit={() => navigation.navigate('Signin') }
        linkText="Already have and account? Signin instead"
        />
    </View>
    );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;