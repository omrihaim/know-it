import React from 'react';
//import styles from '../styles.js'
//import { connect } from "react-redux";
//import { login } from "../redux/actions";

import {
  Text,
  View,
  Button
} from 'react-native';

class TracksScreen extends React.Component {
  state = {}

  componentWillMount() {
  }

  render() {
    return (
     <View>
      <Text>Tracks Screen</Text>
      <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
     </View>
    )
  }
}

_signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  
/*function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(Home);
*/
export default TracksScreen;
