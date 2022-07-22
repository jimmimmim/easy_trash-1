import React, { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, Alert,
Button, StyleSheet, ImageBackground } from "react-native";
import { Audio } from 'expo-av';
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

//카카오 연결 없이 사용하기
function NoConnectScreen({ navigation }) {
  
  return (
    <View style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
        <View style={layout.twoButtonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Create Wallet')} style={button.buttonBox_yellow}>
                <Text style={text.buttonText_small}>이전으로</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{stopSound();}} style={button.buttonBox_yellow}>
                <Text style={text.buttonText_small}>화면 안내</Text>
                <Text style={text.buttonText_hidden}>버튼</Text>
            </TouchableOpacity>
        </View>
        <View style={layout.searchContainer}>
          <Text style={text.title_yellow}>안내 사항</Text>
          <Text style={text.text_yellow}>카카오 계정 연결 없이 사용하면{"\n"}이후 결제와 데이터 저장이 되지 않습니다.</Text>
          <Text style={text.text_yellow}>마이페이지에서 언제든지 연동할 수 있습니다.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={button.buttonBox_yellow}>
                <Text style={text.buttonText_small}>사용하기</Text>
                <Text style={text.buttonText_hidden}>버튼</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('KakaoConnectScreen')} style={button.buttonBox_yellow}>
                <Text style={text.buttonText_small}>카카오계정 연결하기</Text>
                <Text style={text.buttonText_hidden}>버튼</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default NoConnectScreen;