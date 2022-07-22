import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground, Alert } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

// 더 알아보기
function MoreContentScreen({ navigation }) {
  return (
    <View style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
      <View style={layout.twoButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TrashpediaScreen')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>이전으로</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>사용 방법</Text>
        </TouchableOpacity>
      </View>
      <View style={layout.twoCircleContainer}>
        <View style={layout.innerCircleContainer}>
              <Text style={text.text_yellow}>더 알아보기 페이지</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => Alert.alert('우왕', '완료 버튼을 누르셨군요')} style={button.buttonBox_yellow}>
        <Text style={text.buttonText_small}>완료</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default MoreContentScreen;