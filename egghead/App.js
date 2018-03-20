import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image, 
  TouchableHighlight
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import LogIn from './src/components/LogIn';
import SignIn from './src/components/register/UserDetails'

export default class App extends Component{
  render() {
      return  <Router>
                <Scene key="root" direction="vertical" hideNavBar={true}>
                  <Scene key="LogIn" component={LogIn} title="Login" initial={true} />
                  <Scene key="SignIn" component={SignIn} title="Sign"/>
                </Scene>
              </Router>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21ccc4',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  boton:{
    width:300,
    height: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 10,
    borderRadius: 9,
  }
});
