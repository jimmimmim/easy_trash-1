import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import { Audio } from 'expo-av';
// 폐가전제품
function HomeAppTrashScreen({ navigation }) {
  const [sound, setSound] = React.useState();
  
  React.useEffect(() => {
    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
         require('../assets/8번.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
  }
    playSound();
  }, []);

  const stopSound=()=>{
    sound.stopAsync();
  }
  return (
    <View style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
        <View style={layout.twoButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={button.buttonBox_yellow}>
              <Text style={text.buttonText_small}>이전으로</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
              <Text style={text.buttonText_small}>사용 방법</Text>
          </TouchableOpacity>
        </View>
        <View style={layout.twoCircleContainer}>
          <View style={layout.innerCircleContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('CallScreen')} style={button.buttonCircle_yellow_center}>
                <Text style={text.buttonText_small}>무상수거{"\n"}전화 신청</Text>
            </TouchableOpacity>
          </View>
          <View style={layout.innerCircleContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('CategorySearchScreen')} style={button.buttonCircle_yellow_center}>
                <Text style={text.buttonText_small}>무상수거{"\n"}품목 안내</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeAppTrashScreen;