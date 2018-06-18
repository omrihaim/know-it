import React from 'react';
/*import reducers from "./redux/reducers";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
*/
import { StyleSheet, Text, View } from 'react-native';

import RootNavigation from "./src/navigation/RootNavigation";
import OnLoadNavigation from "./src/navigation/OnLoadNavigation";

export default class App extends React.Component {
  render() {
    return (
      <OnLoadNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
