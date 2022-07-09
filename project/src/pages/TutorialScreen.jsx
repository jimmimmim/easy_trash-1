import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

// import Tts from 'react-native-tts';

// 사용법
function BigTrashScreen({ navigation }) {
  return (
    <View style={layout.backgroundContainerMain}>
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={button.buttonBox_yellow}>
          <Text style={text.buttonText_small}>이전으로</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
          <Text style={text.buttonText_small}>기능 안내</Text>
      </TouchableOpacity>

      <Text style={text.text_yellow}>사용법</Text>
      <TouchableOpacity onPress={() => alert('카메라 연결')} style={button.buttonBox_yellow}>
          <Text style={text.buttonText_small}>사용하기</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BigTrashScreen;