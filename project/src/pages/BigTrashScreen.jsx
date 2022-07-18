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
            Linking.openURL(`tel:01012341234`);
            break;
    };
};

// 대형폐기물
function BigTrashScreen({ navigation }) {
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
          <TouchableOpacity onPress={() => navigation.navigate('CallScreen')} style={button.buttonCircle_yellow_center}>
              <Text style={text.buttonText_small}>전화 신청</Text>
          </TouchableOpacity>
        </View>
        <View style={layout.innerCircleContainer}>
          <TouchableOpacity onPress={() => call('성동종합사회복지관')} style={button.buttonCircle_yellow_center}>
              <Text style={text.buttonText_small}>품목별 가격 안내</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default BigTrashScreen;