import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, Image, ImageBackground } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import { Audio } from 'expo-av';
import Flag from './LandingScreen';
//import audioFlag from './LandingScreen';
function CreateWalletScreen({ navigation,route }) {
  
  const [sound, setSound] = React.useState();
  const flag=route.params.flag;
  React.useEffect(() => {
    if(flag==1){
      async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
           require('../assets/2번.mp3')
        );
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
    }
      playSound();
    }
  }, [flag]);

  const stopSound=()=>{
    sound.stopAsync();
  }
    return (
      <View style={layout.backgroundContainerMain}>
        <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
        <Image style={layout.logo} source={require('../styles/minilogo.png')} />
        <Text style={text.text_yellow}>카카오 계정 연동을 하면
            {"\n"} 알림톡을 받으실 수 있습니다.</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('MainScreen',{flag});stopSound();}} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>연결 없이 사용</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('KakaoConnectScreen');stopSound();}} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>카카오계정 연결</Text>
        </TouchableOpacity>
        <Text style={text.text_yellow}>마이 페이지에서 언제든지 연결 가능해요!</Text>
        <TouchableOpacity onPress={() => {navigation.navigate('HowtoConnectKakao');stopSound();}} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>카카오 계정 연결하는 법이 궁금해요!</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }

export default CreateWalletScreen;