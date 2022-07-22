import React, { useCallback, useEffect, useState } from 'react';
import ImagePickerComponent from "../../imagePickerComponent";
import callGoogleVisionAsync from "../../helperOCRFunctions";
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground} from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import { Audio } from 'expo-av';
function ImageUpload({ navigation }) {
  const [sound, setSound] = React.useState();
  
  React.useEffect(() => {
    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
         require('../assets/4번.mp3')
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
        <ImagePickerComponent onSubmit={callGoogleVisionAsync}/>
      </ImageBackground>
    </View>
  );
}

export default ImageUpload;