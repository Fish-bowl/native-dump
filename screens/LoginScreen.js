import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native'

class LoginScreen extends React.Component {

   signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        behavior: 'android',
        androidClientId: '97072770701-8cesv9ll2p0k085k1lissv8f03hku107.apps.googleusercontent.com',
        // iosClientId: '97072770701-mao23poglf3a8mn5d9aamhs3p5ll8lkh.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  render() {
    return(
      <View style={StyleSheet.container}>
        <Button 
          style={styles.button}
          title="sign in with google"
          onPress={() => this.signInWithGoogleAsync()} 
          // onPress={() => alert('youve pressed')}
        />
      </View>
    )
  }
}
export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: '400',
    width: 'auto',
  }
})
