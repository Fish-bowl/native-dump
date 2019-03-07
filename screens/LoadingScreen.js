import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import firebase from 'firebase'

class LoadingScreen extends React.Component {

  componentDidMount() {
    this.checkIfLoggedIn()
  }
  
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        this.props.navigation.navigate("DashboardScreen")
      }
      else {
        this.props.navigation.navigate('LoginScreen')
      }
    }.bind(this))
  }

  render() {
    return(
      <View style={StyleSheet.container}>
        <ActivityIndicator size='large' />
        <Text>Hello</Text>
      </View>
    )
  }
}
export default LoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
