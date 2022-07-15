import * as React from 'react';
import { TouchableOpacity, Text, View } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

function CreateWalletScreen({ navigation }) {
    return (
      <View style={layout.backgroundContainerMain}>
        <Text style={text.text_yellow}>대형 쓰레기 수거 등록과 결제를 
  하려면{"\n"} 카카오 계정 연동이 필요합니다.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('KakaoConnectScreen')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>카카오계정 연결 버튼</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('NoConnectScreen')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>연결 없이 사용 버튼</Text>
        </TouchableOpacity>
        <Text style={text.text_yellow}>마이 페이지에서 언제든지 연결 가능해요!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HowtoConnectKakao')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText_small}>카카오 계정 연결하는 법 버튼</Text>
        </TouchableOpacity> 
      </View>
    );
  }

export default CreateWalletScreen;