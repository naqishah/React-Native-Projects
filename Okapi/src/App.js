/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Navigator from './navigations';
import SplashScreen from '../src/screens/SplashScreen';

class App extends Component {
      
    state = { showSplashScreen: true };

    showHideSplashScreen() {
       
        if(this.state.showSplashScreen) {
            return <SplashScreen />;
        }
        return (
           <Navigator />
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showSplashScreen: false });
          }, 2000);
      }

    render() {

        return (
            <Provider store={createStore(reducers)}>
               {this.showHideSplashScreen()}
            </Provider>
        );
    }
}

export default App;