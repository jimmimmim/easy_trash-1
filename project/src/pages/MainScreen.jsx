import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, Text, SafeAreaView, Image, ImageBackground } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import { Audio } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';
// 메인 페이지 (버튼 6개)
function MainScreen({ navigation,route }) {

    const flag=route.params.flag;
    const [sound, setSound] = React.useState();
  
  React.useEffect(() => {
    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
           require('../assets/3번.mp3')
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
   if(flag==1){
      sound.stopAsync();
    }
  }
  return (
    <SafeAreaView style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
        <SafeAreaView style={layout.titleContainer}>
            <Image source={require('../styles/mainpagelogo.png')} />
        </SafeAreaView>
        <SafeAreaView style={layout.container}>
            <SafeAreaView style={layout.innercontainer}>
                <SafeAreaView style={layout.nestedcontainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('ImageUpload',{flag});stopSound()}} style={button.buttonCircle_yellow_left}>
                        <Text style={text.buttonText_small}>분리수거함{"\n"}카메라</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={layout.nestedcontainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('TrashCamScreen',{flag});stopSound()}} style={button.buttonCircle_yellow}>
                        <Text style={text.buttonText_small}>쓰레기{"\n"}카메라</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={layout.innercontainer}>
                <SafeAreaView style={layout.nestedcontainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('HomeAppTrashScreen',{flag});stopSound()}} style={button.buttonCircle_yellow_left}>
                        <Text style={text.buttonText_small}>폐가전제품{"\n"}폐기 신청</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={layout.nestedcontainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('BigTrashScreen',{flag});stopSound()}} style={button.buttonCircle_yellow}>
                        <Text style={text.buttonText_small}>대형쓰레기{"\n"}폐기 신청</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={layout.innercontainer}>
                <SafeAreaView style={layout.nestedcontainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate('TrashpediaScreen');stopSound()}} style={button.buttonCircle_yellow_left}>
                        <Text style={text.buttonText_small}>쓰레기{"\n"}대백과</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={layout.nestedcontainer}>

                    <TouchableOpacity onPress={() => navigation.navigate('EcoEducationScreen')} style={button.buttonCircle_yellow}>

                        <Text style={text.buttonText_small}>환경 사랑</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default MainScreen;