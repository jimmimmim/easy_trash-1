import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import KakaoSDK from '@actbase/react-kakaosdk';

// //카카오 계정 연결하기 페이지
function KakaoConnectScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>카카오 로그인 연결 페이지</Text>
    </View>
  );
}

export default KakaoConnectScreen;