'use strict';

import React from 'react';
import styles from "../styles.js";
//import { connect } from "react-redux";
//import { login } from "../redux/actions";

import Card from "../components/Card";
import NoMoreCards from "../components/NoMoreCards";
import SwipeCards from "../components/SwipeCards";

import {
  StyleSheet,
  AsyncStorage,
  Text,
  View,
  Button
} from 'react-native';

const cards = [
  {name: "name", text: 'C#', image: 'https://cdn3.macworld.co.uk/cmsdata/features/3640347/learn_c_sharp_mac_osx_thumb800.jpg'},
  {name: "name", text: 'Java', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png'},
  {name: "name", text: 'Single Responsibility Principle', image: 'https://image.slidesharecdn.com/bern-designfortestability-di-ioc-101213050554-phpapp01/95/slide-7-1024.jpg'},
  {name: "name", text: 'Dependency Injection', image: 'http://learnfromexamples.com/wp-content/uploads/2017/06/Dependency-Injection-in-Spring-3.png'},
  {name: "name", text: 'Machine Learning', image: 'https://www.coherentnews.com/wp-content/uploads/2018/01/Machine-Learning-Market.jpg'},
  {name: "name", text: 'DevOps', image: 'https://cdn-images-1.medium.com/max/2000/1*EBXc9eJ1YRFLtkNI_djaAw.png'},
  {name: "name", text: 'Continuous Integration', image: 'https://i.ytimg.com/vi/4bbvbyOHfRY/maxresdefault.jpg'},
  {name: "name", text: 'Continuous Delivery', image: 'https://www.klipfolio.com/sites/default/files/blog/CD%20practices.png'},
  {name: "name", text: 'Object Oriented', image: 'https://i.redd.it/rj8raf1riyny.png'},
]

const cards2 = [
  {name: "name", text: 'F#', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Fsharp%2C_Logomark%2C_October_2014.svg/1024px-Fsharp%2C_Logomark%2C_October_2014.svg.png'},
  {name: "name", text: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png'},
  {name: "name", text: 'Docker', image: 'https://teachingwithipad.files.wordpress.com/2018/01/img_0058.jpg?w=1000'},
  {name: "name", text: 'Deep Learning', image: 'http://cvit.iiit.ac.in/deeplearningcourse/images/iiit-2.png'},
]

class ExploreScreen extends React.Component {
  state = {}

  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  componentWillMount() {
  }

  handleYup (card) {
    console.log("yup")
  }

  handleNope (card) {
    console.log("nope")
  }

  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`index at ${index}`);
      console.log(`length is ${this.state.cards.length}`);

      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }
    }
  }

  _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };

  render() {
    return (
        <SwipeCards
          cards={this.state.cards}
          loop={false}

          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          showYup={true}
          showNope={true}

          handleYup={this.handleYup}
          handleNope={this.handleNope}
          cardRemoved={this.cardRemoved.bind(this)}
        />
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
export default ExploreScreen;
