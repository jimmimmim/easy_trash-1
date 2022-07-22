// App.js 
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button,
ImageBackground,
TouchableOpacity, SafeAreaView } from 'react-native';
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

import TextRecognition from 'react-native-text-recognition';
import * as ImagePicker from 'expo-image-picker';

function ImageUpload() {
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

  // 카메라 열기 버튼
  const openCamera = async () => {
    // 권한 받기
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("카메라 접근 권한을 주세요");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }
// pass the image's path to recognize

  return (
    <View style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
      <View>
        <SafeAreaView style={layout.nestedcontainer}>
        <TouchableOpacity onPress={showImagePicker} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>갤러리 열기</Text>
        </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={layout.nestedcontainer}>
        <TouchableOpacity onPress={openCamera} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>카메라 열기</Text>
        </TouchableOpacity>
        </SafeAreaView>
      </View>

      <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
        }
        {
          resultText !== '' && <Text>{resultText}</Text>
        }
        
         
        
        
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

  imageContainer: {
    padding: 30
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover'
  }
});

export default ImageUpload;