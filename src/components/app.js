import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import * as firebase from "firebase";
import { Spinner } from './common';
import Nav from './Nav';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import fire from './fire';

console.disableYellowBox = true;

class App extends Component {
  state = { loggedIn: null };

componentWillMount() {
    fire.auth().onAuthStateChanged((user) => {
      console.log("USER: ", user);
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Nav />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (

    <View style={styles.container}>
      <StatusBar
       barStyle="light-content"
      />
      {this.renderContent()}
    </View>

    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  status: {
    backgroundColor: '#1a1a1a'
  }
};


const mapStateToProps = (state) => {
    return {
      ...state
    }
}


export default connect(mapStateToProps)(App);
