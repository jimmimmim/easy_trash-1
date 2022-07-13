import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import TTSText from '../components/TTSText';
import TTSButton from '../components/TTSButton';

import * as Speech from 'expo-speech';

const EXAMPLES = [
  { language: 'en', text: 'Adam Perry ate a pear in pairs in Paris' },
  { language: 'ko', text: '한국말을 배우고 있어요'},
];

const speak = () => {
    Speech.speak("한국말도 할 수 있을까?", {
          language: 'ko',
    });
};

// 사용법
function TTSExampleScreen({ navigation }) {
  
  return (
    <View style={layout.backgroundContainerMain}>
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={button.buttonBox_yellow}>
          <Text style={text.buttonText_small}>이전으로</Text>
      </TouchableOpacity>
      <TTSButton content="TTS 기능 안내" />
      <Text style={text.text_yellow}>사용법</Text>
      <TTSButton content="우왕우왕" />
      <TTSButton content="읽어준당" />
    </View>
  );
}

export default TTSExampleScreen;