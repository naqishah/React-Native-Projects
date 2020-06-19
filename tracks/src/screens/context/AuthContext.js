//import { AsyncStorage } from 'react-native';
import  AsyncStorage  from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tarcker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {

    switch (action.type) {

        case 'show_error':
            return { ...state, errorMessage: action.payLoad };
        case 'signup':
            return { token: action.payLoad, errorMessage: '' };
        case 'signin':
            return { token: action.payLoad, errorMessage: '' };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
         case 'signout':
             return { token: null, errorMessage: '' };
            
        default:
            return state;
    }
};


const signupUser = dispatch => async ({ email, password }) => {

    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payLoad: response.data.token });

        navigate('TrackList');

    } catch (err) {
        dispatch({ type: 'show_error', payLoad: 'Oops something went wrong with signup!!!' });
    }
};

const signinUser = dispatch => async ({ email, password }) => {

    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payLoad: response.data.token });

        navigate('TrackList');

    } catch (err) {
        dispatch({ type: 'show_error', payLoad: 'Oops something went wrong with signup!!!' });
    }
};

const signoutUser = dispatch => async () => {

    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout'});
    navigate('Signup');
};

const clearErrorMessage = dispatch => () => {

    dispatch({ type: 'clear_error_message' });
};

const tryLocalSignin = dispatch => async () => {

    const token = await AsyncStorage.getItem('token');

    if (token) {
        dispatch({ type: 'signin', payLoad: token });
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
};


export const { Provider, Context } = createDataContext(
    authReducer,
    { signupUser, signinUser, signoutUser, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);