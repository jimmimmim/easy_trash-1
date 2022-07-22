import React, { Component } from 'react';
import {
StyleSheet, TouchableOpacity, TextInput, Text, View,
FlatList, ActivityIndicator, Platform, Alert, Button,
ImageBackground
} from "react-native";

import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';



export default class TrashpediaScreen extends Component {
 
  state = {
    text: '',
    inputText: ''
  }
 
  readText = () => {
    this.setState({text: this.state.inputText});
  }
 
  render() {
    return (
      <View style={layout.backgroundContainerMain}>
        <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
        <View style={layout.twoButtonContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')} style={button.buttonBox_yellow}>
                <Text style={text.buttonText_small}>이전으로</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
                <Text style={text.buttonText_small}>사용 방법</Text>
            </TouchableOpacity>
        </View>
        <View style={layout.searchContainer}>
          <TextInput
            style={text.textInput}
            onChangeText={(text) => {this.setState({inputText: text})}}
            placeholder="검색어 입력"
          />
          <TouchableOpacity onPressIn={this.readText} onPress={() => {this.props.navigation.navigate('SearchResultScreen', {value: this.state.text})}} style={button.buttonBox_yellow}>
              <Text style={text.buttonText_small}>검색하기</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
    );
  };
};