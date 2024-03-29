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

import { blue_grey_700, okapi_background_color } from '../styles/Colors';
import { bottomTabTextMyOkapi, bottomTabTextFindAgent, bottomTabTextServices, bottomTabTextHelp } from '../Common/Strings';

const TabNavigatorConfig = {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none',
    tabBarOptions:{
        activeBackgroundColor: blue_grey_700,
        inactiveBackgroundColor: blue_grey_700,
        activeTintColor: okapi_background_color,
        inactiveTintColor: okapi_background_color,
        labelStyle: { fontSize: 14 }
    },
};

const RouteConfigs = {
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            tabBarLabel: bottomTabTextMyOkapi,
            tabBarIcon: () => (
                <Icon name="lock" type="font-awesome" color={okapi_background_color} style={{marginTop:5}}/>
              )
        },
    },
    FindAgent: {
        screen: FindAgentScreen,
        navigationOptions: {
            tabBarLabel: bottomTabTextFindAgent,
            tabBarIcon: () => (
                <Icon name="map-marker" type="font-awesome" color={okapi_background_color} style={{marginTop:5}}/>
              )
        },
    },
    Services: {
        screen: ServicesScreen,
        navigationOptions: {
            tabBarLabel: bottomTabTextServices,
            tabBarIcon: () => (
                <Icon name="briefcase" type="font-awesome" color={okapi_background_color} style={{marginTop:5}}/>
              )
        },
    },
    Help: {
        screen: HelpScreen,
        navigationOptions: {
            tabBarLabel: bottomTabTextHelp,
            tabBarIcon: () => (
                <Icon name="info" type="font-awesome" color={okapi_background_color} style={{marginTop:5}}/>
              )
        },
    },
};

const UnAuthNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default UnAuthNavigator;