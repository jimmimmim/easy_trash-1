import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, TouchableOpacity, Text, View,Alert,SafeAreaView, } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

//카카오 계정 연결하기 페이지
function KakaoConnectScreen({ navigation }) {
  function LogInProgress(data){
    // access code는 url에 붙어 장황하게 날아온다.
    // substringd으로 url에서 code=뒤를 substring하면 된다.
    const exp = "code=";
    var condition = data.indexOf(exp);
    if(condition!= -1){
        var request_code = data.substring(condition+exp.length);
        console.log("access code :: " + request_code);
      }
    }
  return (
    <View style={{flex: 1}}>
        <WebView
            originWhitelist={['*']}
            scalesPageToFit={false}
            source = {{uri : 
              'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=9228e854590e61dd2956da9bf840fb4e&redirect_uri=http://localhost:3000/ouath/callback/kakao'}}
              injectedJavaScript = {runFirst}
              onMessage = {(event)=>{LogInProgress(event.nativeEvent["url"]);}}
        />
      </View>
  );
}

export default KakaoConnectScreen;