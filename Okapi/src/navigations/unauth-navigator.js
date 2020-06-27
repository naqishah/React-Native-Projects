/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    LoginScreen,
    FindAgentScreen,
    ServicesScreen,
    HelpScreen
} from '../screens/unAuthTabBarScreens/index';

import * as React from 'react';
import { Icon } from 'react-native-elements';

const TabNavigatorConfig = {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none',
    tabBarOptions:{
        activeBackgroundColor: '#293338',
        inactiveBackgroundColor: '#293338',
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#FFFFFF',
        labelStyle: { fontSize: 14 }
    },
};

const RouteConfigs = {
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            tabBarLabel: 'My Okapi',
            tabBarIcon: () => (
                <Icon name="lock" type="font-awesome" color="#FFFFFF" style={{marginTop:5}}/>
              )
        },
    },
    FindAgent: {
        screen: FindAgentScreen,
        navigationOptions: {
            tabBarLabel: 'Find Agent',
            tabBarIcon: () => (
                <Icon name="map-marker" type="font-awesome" color="#FFFFFF" style={{marginTop:5}}/>
              )
        },
    },
    Services: {
        screen: ServicesScreen,
        navigationOptions: {
            tabBarLabel: 'Services',
            tabBarIcon: () => (
                <Icon name="briefcase" type="font-awesome" color="#FFFFFF" style={{marginTop:5}}/>
              )
        },
    },
    Help: {
        screen: HelpScreen,
        navigationOptions: {
            tabBarLabel: 'Help',
            tabBarIcon: () => (
                <Icon name="info" type="font-awesome" color="#FFFFFF" style={{marginTop:5}}/>
              )
        },
    },
};

const UnAuthNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default UnAuthNavigator;