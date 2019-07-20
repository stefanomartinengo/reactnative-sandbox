import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Log extends Component {
  static navigationOptions = {
      title: 'Log',
      tabBarIcon: ({tintColor}) => {
        return (
          <Ionicons name="ios-clipboard" size={25} color={tintColor}/>
        )
      }
  };

  render(){
      return(
          <View style={styles.wrap}>
              <Text style={{marginBottom: 10}}>Log Screen</Text>
              <TextInput style={styles.input}></TextInput>
          </View>
      )
  }
}

const styles = StyleSheet.create({
  wrap: {
    height: '100%',
    paddingTop: 25,
    paddingLeft: 10,
    fontSize: 30,
    backgroundColor: 'rgba(254,245,150, .5)'
  },
  input: {
    height: 30,
    width: '30%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF'
  }
});