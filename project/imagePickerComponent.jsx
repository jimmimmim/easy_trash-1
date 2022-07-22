import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import {TouchableOpacity, Image, View, Text,ScrollView } from 'react-native';
import layout from './src/styles/Layout';
import button from './src/styles/Button';
import textstyle from './src/styles/Text';
import { SafeAreaView } from 'react-native-safe-area-context';

function ImagePickerComponent({ onSubmit }) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('Please add an image');

  // 선택한 사진의 path
  const [pickedImagePath, setPickedImagePath] = useState('');

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


  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true, //return base64 data.
      //this will allow the Vision API to read this image.
    });
    if (!result.cancelled) { //if the user submits an image,
      setImage(result.uri);
      setText("Loading.."); //set value of text Hook

  const responseData = await onSubmit(result.base64);
  setText(responseData.text);
    }
  };
  return (
    <View style={{flex:1}}>
        <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={button.buttonBox_yellow}>
            <Text style={textstyle.buttonText_small}>이전으로</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
            <Text style={textstyle.buttonText_small}>사용 방법</Text>
        </TouchableOpacity>
      {image && (
        <Image
          source={{ uri: image }}
          style={{
          width: 300,
          height: "50%",
          resizeMode:"contain",
          marginLeft: 40,
          marginTop: 20,
        }}/>
      )}
      <SafeAreaView
          style={{
              flex: 0.5,
              width: '100%',
              backgroundColor: 'black',
              padding: 30,
              marginTop: 20,
              marginBottom: 10,
          }}>

          <ScrollView>
            <Text style={{color:'white',fontSize:20}}>
              {text}
            </Text>
          </ScrollView>
      </SafeAreaView>
      <TouchableOpacity onPress={showImagePicker} style={button.buttonBox_yellow}>
          <Text style={textstyle.buttonText_small}>갤러리 열기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pickImage} style={[button.buttonBox_yellow]}>
        <Text style={textstyle.buttonText_small}>사진 찍기</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ImagePickerComponent;