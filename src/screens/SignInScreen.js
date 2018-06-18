import React from "react";
import * as firebase from "firebase";
import firebaseConfig from "../config/FirebaseConfig";

const firebaseGoogleLoginConfig = {
  androidClientId: "561481040774-pkaq9lpo7meb1gqfutvd6a348tanp336.apps.googleusercontent.com",
  iosClientId: "561481040774-74gcr3fhoatpq9diirr0rilmsabufv71.apps.googleusercontent.com",
  scopes: ['profile', 'email'],
};

firebase.initializeApp(firebaseConfig);

import {
  Button,
  AsyncStorage,
  StyleSheet,
  View,
} from 'react-native';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  componentWillMount() {
    /*firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        //this.props.dispatch(signInWithGoogleAsync(user))
      }
    });*/
  }

  async signInWithGoogleAsync() {
    try {

      const result = await Expo.Google.logInAsync(firebaseGoogleLoginConfig);

      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }

  async successfulLogin(accessToken) {
    console.log(accessToken);
    //await AsyncStorage.setItem('userToken', accessToken);
    this.props.navigation.navigate('App');
  }

  async failedLogin(reason) {
    alert("Can't login");
    alert(reason);
  }

  render() {
    return (
      <View>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    await this.signInWithGoogleAsync()
      .then(accessToken => this.successfulLogin(accessToken))
      .catch(reason => this.failedLogin(reason));
    //this.props.navigation.navigate('App');
  };
}

export default SignInScreen;
