'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Styles from './Styles/Styles';
import MainPage from './Screens/MainPage';

class RPGSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'sheet'
    };
  }


  render() {
    return (
      <React.NavigatorIOS
        style={Styles.container}
        initialRoute={{
          title: 'RPG Character',
          component: MainPage,
        }}
      />
    );
  }
}

module.exports = RPGSheet;
