
import { StyleSheet, TouchableOpacity, Text, View,
Button, Image, ImageBackground} from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import React, { useCallback, useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Audio } from 'expo-av';
function TrashCamScreen({ navigation }) {
  const [sound, setSound] = React.useState();
  
  React.useEffect(() => {
    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
         require('../assets/6번.mp3')
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
  const [image, setImage] = React.useState(null);
  const [status, setStatus] = React.useState(null);


  const API_KEY = 'AIzaSyAx9LPUPnfinGPBv9eO6O6yNGCUJ8kgUOA';
  const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
  
  async function callGoogleVisionAsync(image) {

    const body = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            {
              type: 'LABEL_DETECTION',
              maxResults: 1,
            },
          ],
        },
      ],
    };
  
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    console.log('callGoogleVisionAsync -> result', result);
  
    return result.responses[0].labelAnnotations[0].description;
  }

  const takePictureAsync = async () => {

    const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
      base64: true,
    });

    if (!cancelled) {
      setImage(uri);
      setStatus('Loading...');
      try {
        
        const result = await callGoogleVisionAsync(base64);
setStatus(result);

      } catch (error) {
        setStatus(`Error: ${error.message}`);
      }
    } else {
      setImage(null);
      setStatus(null);
    }
  };
  return (
    
    <View style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
        <TouchableOpacity onPress={takePictureAsync} style={[button.buttonBox_yellow,{flex:0.3}]}>
            <Text style={text.buttonText_small}>사진찍기</Text>
        </TouchableOpacity>
        {image && <Image  style={{ width: 200, height: 200, resizeMode:"contain" }} source={{ uri: image }} />}
        {status && <Text >{status}</Text>}
      </ImageBackground>
    </View>
  );
}

export default TrashCamScreen;