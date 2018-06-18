'use strict';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from "../styles";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        //<Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}

export default Card;
