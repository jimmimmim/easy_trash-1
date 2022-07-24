import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

// //카카오 계정 연결하는 법이 궁금해요! 페이지
function HowtoConnectKakao({ navigation }) {
  return (
    <View style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
      <Text style={[text.text_yellow, {fontSize: 40, lineHeight: 40, marginBottom: 20,}]}>쉬운 쓰레기</Text>


      {/* Landing button */}
      <TouchableOpacity onPress={() => navigation.navigate('KakaoConnectScreen')} style={button.buttonBox_yellow}>
          <Text style={text.buttonText_small}>카카오계정 연결하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NoConnectScreen')} style={button.buttonBox_yellow}>
          <Text style={text.buttonText_small}>연결 없이 사용하기</Text>
      </TouchableOpacity>

      <Text style={[text.text_yellow, {fontSize: 20, lineHeight: 20, marginTop: 20}]}>마이 페이지에서 언제든지 연결 가능해요!</Text>
      </ImageBackground>
    </View>
  );
}

export default HowtoConnectKakao;