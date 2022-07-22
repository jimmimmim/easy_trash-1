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
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={button.buttonBox_yellow}>
          <Text style={text.buttonText_small}>이전으로</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
          <Text style={text.buttonText_small}>기능 안내</Text>
      </TouchableOpacity>

      <Text style={text.text_yellow}>폐가전제품</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ImageUpload')} style={button.buttonBox_yellow}>
          <Text style={text.buttonText_small}>사용하기</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default HomeAppTrashScreen;