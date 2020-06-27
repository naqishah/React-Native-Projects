/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    HomeScreen,
    CalculatorScreen,
    SettingsScreen,
    HelpScreen
} from '../screens/authTabBarScreens/index';

const TabNavigatorConfig = {
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none',
};

const RouteConfigs = {
    Home: {
        screen: HomeScreen,
    },
    Calculator: {
        screen: CalculatorScreen,
    },
    Settings: {
        screen: SettingsScreen,
    },
    Help: {
        screen: HelpScreen,
    },
};

const AuthNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AuthNavigator;