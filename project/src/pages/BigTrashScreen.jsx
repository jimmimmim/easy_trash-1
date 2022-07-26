import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import { Audio } from 'expo-av';
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
function BigTrashScreen({ navigation ,route}) {
  const [sound, setSound] = React.useState();
  const flag=route.params.flag;
  React.useEffect(() => {
    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
         require('../assets/10번.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
  }
    if(flag==1){
      playSound();
    }
  }, []);

  const stopSound=()=>{
   
    if(flag==1){
 
      sound.stopAsync();
    }
    
  }
  async function informHowto(){
    if(flag==1){
      stopSound();
    }
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/11번.mp3')
   );
   setSound(sound);
   console.log('Playing Sound');
   await sound.playAsync();
   
  }
  return (
    <View style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
      <View style={layout.twoButtonContainer}>
        <TouchableOpacity onPress={() => {navigation.goBack(),stopSound()}} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>이전으로</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {informHowto()}} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>사용 방법</Text>
        </TouchableOpacity>
      </View>
      <View style={layout.twoCircleContainer}>
        <View style={layout.innerCircleContainer}>
          <TouchableOpacity onPress={() => {navigation.navigate('CallScreen'),stopSound()}} style={button.buttonCircle_yellow_center}>
              <Text style={text.buttonText_small}>전화 신청</Text>
          </TouchableOpacity>
        </View>
        <View style={layout.innerCircleContainer}>
          <TouchableOpacity onPress={() => {navigation.navigate('CategorySearchScreen'),stopSound()}} style={button.buttonCircle_yellow_center}>
              <Text style={text.buttonText_small}>품목별 가격 안내</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}

export default BigTrashScreen;