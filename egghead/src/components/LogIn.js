import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableHighlight, StatusBar} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class LogIn extends Component{
  render() {
    return (
      <View style={styles.container}>
          
          <StatusBar backgroundColor='#343f4b' barStyle="light-content" />
          
          <Image style={styles.logo} source={require('../../assets/imagenes/MealPlaningLogo.png')} />  
          
          <Text style={styles.titleW}> Welcome back! </Text>   
          
          <Form>
            <Item floatingLabel last>
              <Label style={styles.titleW2} >Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={styles.titleW2} >Password</Label>
              <Input />
            </Item>
          </Form>
          
          <TouchableHighlight style={styles.boton}>
            <Text style={{color:'#21ccc4', fontSize: 15}}> Log In </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.boton2} >
            <Text style={{color:'#21ccc4', fontSize: 15}} onPress={(this.onSignIn.bind(this))}> Sign In </Text>
          </TouchableHighlight>         

      </View>
    );
  }

  onSignIn(){
    {Actions.SignIn()}
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
    marginLeft: 20
  },
  titleW:{
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
  titleW2: {
    textAlign: 'center',
    color: 'white',
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
  boton2:{
    width:300,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 20,
    marginLeft: 50
  }
});
