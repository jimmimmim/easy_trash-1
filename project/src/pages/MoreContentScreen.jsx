import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

// 더 알아보기
function MoreContentScreen({ navigation }) {
  return (
    <View style={layout.backgroundContainerMain}>
      <View style={layout.twoButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('BigTrashScreen')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>이전으로</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>기능 안내</Text>
        </TouchableOpacity>
      </View>
      <View style={layout.twoCircleContainer}>
        <View style={layout.innerCircleContainer}>
              <Text style={text.text_yellow}>더 알아보기 페이지</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => call()} style={button.buttonBox_yellow}>
        <Text style={text.buttonText_small}>완료</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MoreContentScreen;