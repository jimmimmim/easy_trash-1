import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Button,
  Text, Image,
  SafeAreaView, View,
  StatusBar, ImageBackground,
  FlatList } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import { Audio } from 'expo-av';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView } from 'react-native-gesture-handler';



function LandingScreen({ onPress, navigation}) {
  const [flag,setFlag]=useState(1);
  const [sound, setSound] = React.useState();
  
  React.useEffect(() => {
    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
         require('../assets/1번.mp3')
      );
      setSound(sound);
      console.log('Playing Sound');
      await sound.playAsync();
  }
    if(flag==1){
      playSound();
    }
  }, [flag]);
  const stopSound=()=>{
    
      sound.stopAsync();
    
  }
  const LeftSwipeActions = () => {
    return (
      <View>
        <SafeAreaView style={{backgroundColor:'#FAFF00',
          width:180,
          borderRadius:50,
      }}></SafeAreaView>
      </View>
    );
  };
  const swipeFromLeftOpen = () => {
    setFlag(0);
    
  };
  
  const Item = () => (
    <GestureHandlerRootView>
    <Swipeable
      renderLeftActions={LeftSwipeActions}
      onSwipeableLeftOpen={swipeFromLeftOpen}
      overshootRight={false}
      overshootLeft={false}
    >
      <View
        style={{
          width:50,
          paddingHorizontal: 30,
          paddingVertical: 20,
          backgroundColor: '#427171',
          borderRadius:40,
          margin:10
        }}
      >
      </View>
    </Swipeable>
    </GestureHandlerRootView>
  );

    return (
      <View style={layout.backgroundContainerMain}>
        <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
            <Image style={{marginBottom: 30}} source={require('../styles/braille.png')} />
            <TouchableOpacity onPress={()=>{navigation.navigate('Create Wallet',{flag});stopSound()}} style={button.buttonBox_yellow}>
                <Text style={text.buttonText}>시작하기</Text>
            </TouchableOpacity>
            <Text style={[text.text_yellow, text.text_style] }>쉬운 쓰레기는 시각 장애인을 위해 {"\n"} 음성 안내가 자동 실행됩니다.</Text>
            <Text style={[text.text_yellow]}>아래의 녹색 버튼을 오른쪽으로 옮기시면 중단됩니다.</Text>
            <>
              <StatusBar />
              <SafeAreaView style={[layout.swipebar, {marginTop: 30}]}>
                <Item/>
              </SafeAreaView>
            </>
        </ImageBackground>
      </View>
    );
}
  
export default LandingScreen;