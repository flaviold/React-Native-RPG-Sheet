'use strict';
import React, {
  StyleSheet,
  Dimensions
} from 'react-native';

var sHeight = Dimensions.get('window').height
var sWidth = Dimensions.get('window').width

var styles = StyleSheet.create({
  name: {
    width: sWidth*0.6
  },
  lvl: {
    width: 40
  },
  content: {
    paddingTop: 80,
    backgroundColor: '#eee',
    height: sHeight
  },
  section_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    padding: 15,
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1
  },
  section_status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    padding: 15,
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1
  },
  section_skills: {
    margin: 15,
    padding: 15,
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1
  },
  save_container: {
    alignItems: 'center'
  },
  save: {
    justifyContent: 'center',
    width: 100,
    padding: 10,
    marginTop: 10,
    backgroundColor: 'gray',
    borderColor: '#ddd',
    borderWidth: 1
  },
  save_text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
});

module.exports = styles;
