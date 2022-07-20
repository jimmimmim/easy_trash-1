import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

// 카카오 계정 연결하는 법이 궁금해요! 페이지
function InformFunction_Recycle({ navigation }) {
  return (
    <View style={styles.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={styles.buttonBox_yellow}>
          <Text style={styles.buttonText_small}>이전으로</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('기능안내 음성')} style={styles.buttonBox_yellow}>
          <Text style={styles.buttonText_small}>기능 안내</Text>
      </TouchableOpacity>

      <Text style={styles.text_yellow}>분리수거함 카메라 기능 설명{"\n"}텍스트</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ImageUpload')} style={styles.buttonBox_yellow}>
          <Text style={styles.buttonText_small}>사용하기</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundContainerMain: {
      flex: 1,
      backgroundColor: '#2A4747',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundContainer: {
      flex: 1,
      backgroundColor: '#6D0000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomSection: {
      flex: 2,
      backgroundColor: '#FFF',
      color: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title_yellow: {
      color: "#FAFF00",
      fontSize: 40,
      fontWeight: 'bold',
    },
    title_white: {
      color: "#FFF",
      fontSize: 20,
      fontWeight: 'bold',
    },
    white: {
      color: "#FFFFFF",
    },
    black: {
      color: "#000",
      fontSize: 20,
    },
    textBtn: {
      color: '#009688',
      fontSize: 20,
    },
    buttonContainer: {
      width: '100%',
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    buttonBox: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    buttonBox_yellow: {
      backgroundColor: "#FAFF00",
      borderRadius: 50,
      paddingVertical: 12,
      paddingHorizontal: 50,
      margin: 10,
    },
    buttonBox_white: {
      elevation: 8,
      width: '30%',
      backgroundColor: "#FFF",
      borderRadius: 40,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    buttonText: {
      fontSize: 40,
      color: "#2A4747",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
    buttonText_small: {
      fontSize: 20,
      color: "#2A4747",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
    buttonText_white: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
    text_yellow: {
      color: "#FAFF00",
      alignSelf: "center",
      textAlign: "center",
    },
  });
export default InformFunction_Recycle;