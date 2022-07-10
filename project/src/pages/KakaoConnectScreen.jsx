import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, TouchableOpacity, Text, View,Alert } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const kakaoOpt = {
  clientId: '6bd2f098170c877766b615079cbf29a4',
  clientSecret: 'sycrKGzlGLmUVw4aK1ipvCS7CGFMQ60u',
  redirectUri: 'http://localhost:19006/ouath/callback/kakao',
  };

// //카카오 계정 연결하기 페이지
function KakaoConnectScreen({ navigation }) {
  
  return (
    <View style={{flex: 1}}>
        <WebView
            originWhitelist={['*']}
            scalesPageToFit={false}
            source = {{uri : 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoOpt.clientId}&redirect_uri=${redirectUri}'}}
            // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
        />
      </View>
  );
}

export default KakaoConnectScreen;