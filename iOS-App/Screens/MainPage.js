'use strict';

import React, {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Component,
  Dimensions,
  Picker,
  AlertIOS
} from 'react-native';

import Styles from '../Styles/MainPage';
import dismissKeyboard from 'dismissKeyboard';
import Database from '../DB'

class MainPage extends Component {
  componentDidMount() {
    this._LoadFromStorage(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      character: {}
    };
  }

  async _SaveCharacter() {
    Database.character.updateById(this.state.character, 1).then(resp => AlertIOS.alert("Data saved"));
  }

  _LoadFromStorage(a) {
    Database.character.findById(1).then(resp => this._HandleLoadedData(resp)).done();
  }

  _HandleLoadedData(resp) {
    if (resp){
      this.setState({
        character: resp
      });
      return;
    }
    Database.character.add(this.state.character).then(resp => console.log(resp));
  }

  render() {
    return (
      <TouchableOpacity
        style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width}}
        onPress={() => dismissKeyboard()}
        activeOpacity={1}>
        <View style={Styles.content}>
          <View style={Styles.section_info}>
            <View style={Styles.name}>
              <Text>Name</Text>
              <TextInput
                style={{height: 30, paddingLeft: 5, borderColor: 'gray', borderWidth: 1}}
                value={this.state.character.name}
                onChangeText={(text) => this.state.character.name = text}
                multiline={false}
                clearButtonMode={'while-editing'}/>
            </View>
            <View style={Styles.lvl}>
              <Text>LVL</Text>
              <TextInput
                style={{height: 30, paddingLeft: 5, borderColor: 'gray', borderWidth: 1}}
                value={this.state.character.lvl}
                onChangeText={(text) => this.state.character.lvl = text}
                keyboardType={'number-pad'}
                multiline={false}/>
            </View>
          </View>
          <View style={Styles.section_status}>
            <View>
              <Text>STR</Text>
              <TextInput
                style={{height: 30, paddingLeft: 5, width: 40, borderColor: 'gray', borderWidth: 1}}
                value={this.state.character.str}
                onChangeText={(text) => this.state.character.str = text}
                keyboardType={'number-pad'}
                multiline={false}/>
            </View>
            <View>
              <Text>INT</Text>
              <TextInput
                style={{height: 30, paddingLeft: 5, width: 40, borderColor: 'gray', borderWidth: 1}}
                value={this.state.character.int}
                onChangeText={(text) => this.state.character.int = text}
                keyboardType={'number-pad'}
                multiline={false}/>
            </View>
            <View>
              <Text>DEX</Text>
              <TextInput
                style={{height: 30, paddingLeft: 5, width: 40, borderColor: 'gray', borderWidth: 1}}
                value={this.state.character.dex}
                onChangeText={(text) => this.state.character.dex = text}
                keyboardType={'number-pad'}
                multiline={false}/>
            </View>
            <View>
              <Text>STA</Text>
              <TextInput
                style={{height: 30, paddingLeft: 5, width: 40, borderColor: 'gray', borderWidth: 1}}
                value={this.state.character.sta}
                onChangeText={(text) => this.state.character.sta = text}
                keyboardType={'number-pad'}
                multiline={false}/>
            </View>
          </View>
          <View style={Styles.section_skills}>
            <Text>Skills</Text>
            <TextInput
              style={{height: 30, paddingLeft: 5, borderColor: 'gray', borderWidth: 1, marginBottom: 15}}
              value={this.state.character.skill1}
              onChangeText={(text) => this.state.character.skill1 = text}
              placeholder={'Skill 1'}
              multiline={false}
              clearButtonMode={'while-editing'}/>
            <TextInput
              style={{height: 30, paddingLeft: 5, borderColor: 'gray', borderWidth: 1, marginBottom: 15}}
              value={this.state.character.skill2}
              onChangeText={(text) => this.state.character.skill2 = text}
              placeholder={'Skill 2'}
              multiline={false}
              clearButtonMode={'while-editing'}/>
            <TextInput
              style={{height: 30, paddingLeft: 5, borderColor: 'gray', borderWidth: 1}}
              value={this.state.character.skill3}
              onChangeText={(text) => this.state.character.skill3 = text}
              placeholder={'Skill 3'}
              multiline={false}
              clearButtonMode={'while-editing'}/>
          </View>
          <View style={Styles.save_container}>
            <TouchableOpacity
              style={Styles.save}
              onPress={() => this._SaveCharacter()}>
              <Text style={Styles.save_text}>SALVAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

module.exports = MainPage;
