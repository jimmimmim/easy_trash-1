
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

  // The path of the picked image
    const [pickedImagePath, setPickedImagePath] = useState('');
    const [resultText, setResultText] = useState('');

    // 이건 사진첩에서 이미지 업로드할 때 코드
    const showImagePicker = async () => {
      //유저에게 사진첩 접근 권한을 묻는다
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert("갤러리 접근 권한을 주세요");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync();
      console.log(result);
      if (!result.cancelled) {
        setPickedImagePath(result.uri);
        console.log(result.uri);
      }
    }

  console.log(status);

  if (status == 'Wood') {
    setStatus('목재');
  } else if (status == 'Furniture') {
    setStatus('가구');
  }

  console.log(status);
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
        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>이전으로</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>사용 방법</Text>
        </TouchableOpacity>
        <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
        {image && <Image
        style={{
        width: "100%",
        height: "60%",
        resizeMode:"contain",
        margin: 20,
        }}
        source={{ uri: image }} />}
        {status && <Text
            style={{
            color: '#FFF',
            fontSize: 20,
            margin: 10,
        }}>이 쓰레기의 분류 타입은{'\n'}{status} 입니다.</Text>}
        <TouchableOpacity onPress={showImagePicker} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>갤러리 열기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={takePictureAsync} style={[button.buttonBox_yellow, {width: "70%"}]}>
          <Text style={text.buttonText_small}>사진 찍기</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default TrashCamScreen;