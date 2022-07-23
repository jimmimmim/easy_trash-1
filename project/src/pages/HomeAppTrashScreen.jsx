import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import { Audio } from 'expo-av';
// 폐가전제품
function HomeAppTrashScreen({ navigation,route}) {
  const [sound, setSound] = React.useState();
  const flag=route.params.flag;
  React.useEffect(() => {
    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
         require('../assets/8번.mp3')
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
        require('../assets/9번.mp3')
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
                <Text style={text.buttonText_small}>무상수거{"\n"}전화 신청</Text>
            </TouchableOpacity>
          </View>
          <View style={layout.innerCircleContainer}>
            <TouchableOpacity onPress={() => {navigation.navigate('CategorySearchScreen'),stopSound()}} style={button.buttonCircle_yellow_center}>
                <Text style={text.buttonText_small}>무상수거{"\n"}품목 안내</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeAppTrashScreen;