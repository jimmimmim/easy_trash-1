import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, TouchableOpacity, Text, View,Alert,SafeAreaView, } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;
const REST_API_KEY = '';
const REDIRECT_URI = 'https://localhost:19002/ouath/callback/kakao';

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;
var request_code;
//카카오 계정 연결하기 페이지
function KakaoConnectScreen({ navigation }) {
  function LogInProgress(target){
    // access code는 url에 붙어 장황하게 날아온다.
    // substringd으로 url에서 code=뒤를 substring하면 된다.
    const exp = "code=";
    var condition = target.indexOf(exp);
    if(condition!= -1){
        request_code = target.substring(condition+exp.length);
        console.log("access code :: " + request_code);
      }
    }
  const html = `
  <script>
    function send(){
      window.ReactNativeWebView.postMessage('hello!!');
    }
  </script>
  <button onclick="send()">Send</button>
`;

  // const requestToken = async (givenCode) => {
  //   const requestTokenUrl = 'https://kauth.kakao.com/oauth/token';
  //   console.log("request token!");
  //   const options = qs.stringify({
  //     grant_type: 'authorization_code',
  //     client_id: REST_API_KEY,
  //     redirect_uri: REDIRECT_URI,
  //     code:givenCode,
  //   });
  
  //   try {
  //     const tokenResponse = await axios.post(requestTokenUrl, options);
  //     const ACCESS_TOKEN = tokenResponse.data.access_token;
  //     console.log("애옹");
  //     const body = {
  //       ACCESS_TOKEN,
  //     };
  //     const response = await axios.post(REDIRECT_URI, body);
  //     const value = response.data;
  //     const result = await storeUser(value);
  //     if (result === 'stored') {
  //       const user = await getData('user');
  //       dispatch(read_S(user));
  //       await navigation.navigate('MainScreen');
  //     }
  //   } catch (e) {
  //     console.log(e);
      
  //   }
  // };

  // const getCode = (target) => {
  //   const exp = 'code=';
  //   const condition = target.indexOf(exp);
  //   if (condition !== -1) {
  //     const requestCode = target.substring(condition + exp.length);
  //     console.log("get code!");
  //     requestToken('requestCode');
  //   }
  // };
  
  return (
    <View style={{flex: 1}}>
    <WebView
        originWhitelist={['*']}
        scalesPageToFit={false}
        style={{ marginTop: 30 }}
        source = {{uri : 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=https://localhost:19002/ouath/callback/kakao'}}
        injectedJavaScript = {runFirst}
        onMessage = {(event)=>{ console.log(event.nativeEvent["url"]);
                                LogInProgress(event.nativeEvent["url"]);
                                // navigation.navigate('MainScreen');
                              }}
        // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
    />
  </View>
  );
}

export default KakaoConnectScreen;