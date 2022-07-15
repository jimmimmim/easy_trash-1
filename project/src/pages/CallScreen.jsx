import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

import * as Linking from 'expo-linking';

// mapping하는 것으로 수정하기

const CONTACT = [
    { name: '성동종합사회복지관', number: 'tel:0222903100' },
    { name: '김지민', number: 'tel:01071529915' }
];

const call = (name) => {
    switch(name){
        case('김지민'):
            Linking.openURL(`tel:01071529915`);
            break;
        case('성동종합사회복지관'):
            Linking.openURL(`tel:0222903100`);
            break;
        default:
            Linking.openURL(`tel:0222481001`);
            break;
    };
};

// 대형폐기물
function CallScreen({ navigation }) {
  return (
    <View style={layout.backgroundContainerMain}>
      <View style={layout.twoButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>이전으로</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>기능 안내</Text>
        </TouchableOpacity>
      </View>
      <View style={layout.twoCircleContainer}>
        <View style={layout.innerCircleContainer}>
              <Text style={text.text_yellow}>전화 절차 안내 텍스트</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => call()} style={button.buttonBox_yellow}>
        <Text style={text.buttonText_small}>신청하기</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CallScreen;