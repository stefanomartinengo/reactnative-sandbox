import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Forms extends Component {
  static navigationOptions = {
      title: 'Forms',
      tabBarIcon: ({tintColor}) => {
        return (
          <Ionicons name="ios-archive" size={25} color={tintColor}/>
        )
      }
  };

  render(){
      return(
          <View style={styles.wrap}>
              <Text style={{marginBottom: 10}}>Forms Screen</Text>
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
  },
  input: {
    height: 30,
    width: '30%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray'
  }
});