import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, StatusBar, Text} from 'react-native';


export default class SignIn extends Component {
  render() {
    return (
        <View style={styles.container}>

          <StatusBar backgroundColor='#343f4b' barStyle="light-content" />

          <Text style={styles.titleW}>Register</Text>

          <Text style={styles.titleW}>Progress Bar </Text>

            <View style={styles.square}>
            
            

            </View>


        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21ccc4',
  },
  square: {
    width: 350,
    height: 420,
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 50,
    marginLeft: 30,
    
  },
  titleW:{
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    marginTop: 10,
  },
});
