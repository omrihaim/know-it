import React from 'react';
//import styles from '../styles.js'
//import { connect } from "react-redux";
//import { login } from "../redux/actions";

import {
  Text,
  View
} from 'react-native';

class ExpendScreen extends React.Component {
  state = {}

  componentWillMount() {
  }

  render() {
    return (
     <View>
      <Text>Expend Screen</Text>
     </View>
    )
  }
}

/*function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(Home);
*/
export default ExpendScreen;
