import * as React from 'react';
import { Button, StyleSheet, TouchableOpacity,
Text, View, ImageBackground, ScrollView } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

import * as Linking from 'expo-linking';
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';


// 환경 사랑
function EcoEducationScreen({ navigation,route }) {

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
      <View style={layout.twoButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>이전으로</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('기능안내 음성')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>사용 방법</Text>
        </TouchableOpacity>
      </View>
          <View style={layout.twoVideoContainer}>
            <View style={layout.videoContainer}>
              <WebView
                    style={{flex:1}}
                    javaScriptEnabled={true}
                    source={{uri: 'https://youtu.be/yYQCHZbrgB4'}}
              />
            </View>
            <View style={layout.videoContainer}>
                <WebView
                      style={{flex:1}}
                      javaScriptEnabled={true}
                      source={{uri: 'https://youtu.be/lliiwxe6quk'}}
                />
            </View>
          </View>
      </ImageBackground>
    </View>
  );
}

export default EcoEducationScreen;