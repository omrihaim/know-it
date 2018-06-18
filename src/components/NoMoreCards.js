'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from "../styles";

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}

export default NoMoreCards;
