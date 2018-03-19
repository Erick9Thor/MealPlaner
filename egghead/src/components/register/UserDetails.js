import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, StatusBar} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';


export default class SignIn extends Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#343f4b' barStyle="light-content" />
          <Text>Register</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21ccc4',
  },
  boton:{
    width:300,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 10,
    borderRadius: 20,
    marginLeft: 50
  },
});
