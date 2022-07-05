import * as React from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

//카카오 연결 없이 사용하기
function NoConnectScreen({ navigation }) {
  return (
    <View style={layout.backgroundContainerMain}>
      <TouchableOpacity onPress={() => navigation.navigate('Create Wallet')} style={button.buttonBox_yellow}>
          <Text style={text.buttonText_small}>이전으로</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("화면안내")} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>화면 안내</Text>
      </TouchableOpacity>
      <Text style={text.title_yellow}>안내 사항</Text>
      <Text style={text.text_yellow}>카카오 계정 연결 없이 사용하면{"\n"}이후 결제와 데이터 저장이 되지 않습니다.</Text>
      <Text style={text.text_yellow}>마이페이지에서 언제든지 연동할 수 있습니다.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>사용하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('KakaoConnectScreen')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>카카오계정 연결하기</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NoConnectScreen;