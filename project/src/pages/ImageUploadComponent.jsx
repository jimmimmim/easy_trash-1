import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View,
  Button, Image, ImageBackground} from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import textStyle from '../styles/Text';
import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
function ImageUpload({navigation,route  }) {
  const [sound, setSound] = React.useState();
  const flag=route.params.flag;
  React.useEffect(() => {
    if(flag==1){
      async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
           require('../assets/4번.mp3')
        );
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
    }
      playSound();
    }
  }, []);

  const stopSound=()=>{
    sound.stopAsync();
  }

async function informHowto(){
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/5번.mp3')
   );
   setSound(sound);
   console.log('Playing Sound');
   await sound.playAsync();
  }

//file name: helperFunctions.js
const API_KEY = 'AIzaSyAx9LPUPnfinGPBv9eO6O6yNGCUJ8kgUOA'; //put your key here.
//this endpoint will tell Google to use the Vision API. We are passing in our key as well.
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
function generateBody(image) {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION', //we will use this API for text detection purposes.
            maxResults: 1,
          },
        ],
      },
    ],
  };
  return body;
}

//file: helperFunctions.js
async function callGoogleVisionAsync(image) {
    const body = generateBody(image); //pass in our image for the payload
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    //console.log(result);

    //add this code to the end of callGoogleVisionAsync function
const detectedText = result.responses[0].fullTextAnnotation;
return detectedText
  ? detectedText
  : { text: "텍스트가 포함되어 있지 않습니다" };
  }




  const [image, setImage] = useState(null);
  const [text, setText] = useState(null);

  

  const showImagePicker = async () => {
    //유저에게 사진첩 접근 권한을 묻는다
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true, //return base64 data.
      //this will allow the Vision API to read this image.
    });
    if (!result.cancelled) { //if the user submits an image,
      setImage(result.uri);
      setText("Loading.."); //set value of text Hook

  const responseData = await callGoogleVisionAsync(result.base64);
  setText(responseData.text);
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true, //return base64 data.
      //this will allow the Vision API to read this image.
    });
    if (!result.cancelled) { //if the user submits an image,
      setImage(result.uri);
      setText("Loading.."); //set value of text Hook
  const responseData = await callGoogleVisionAsync(result.base64);
  setText(responseData.text);
    }
  };


  return (
    <View style={layout.backgroundContainerMain}>
        <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
            <View style={layout.twoButtonContainer}>
                <TouchableOpacity onPress={() => {{navigation.goBack(),stopSound()}}} style={button.buttonBox_yellow}>
                    <Text style={textStyle.buttonText_small}>이전으로</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{stopSound(),informHowto()}} style={button.buttonBox_yellow}>
                    <Text style={textStyle.buttonText_small}>사용 방법</Text>
                </TouchableOpacity>
            </View>
            <View style={[layout.searchContainer, {alignItems: 'center'}]}>
                {/* {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, resizeMode:"contain" }}
            />
          )} */}
                {text && <Text
                style={{
                color: '#FFF',
                fontSize: 20,
                margin: 10,
            }}>이 쓰레기의 분류 타입은{'\n'}{text} 입니다.</Text>}
                <TouchableOpacity onPress={()=>{stopSound(),showImagePicker()}} style={[button.buttonBox_yellow, {width: "70%"}]}>
                    <Text style={textStyle.buttonText_small}>갤러리 열기</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{stopSound(),pickImage()}} style={[button.buttonBox_yellow, {width: "70%"}]}>
                  <Text style={textStyle.buttonText_small}>사진 찍기</Text>
                </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>


  );
}

export default ImageUpload;