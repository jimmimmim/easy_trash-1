import * as React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//카카오 연결 없이 사용하기
function NoConnectScreen({ navigation }) {
  return (
    <View style={styles.backgroundContainerMain}>
      <TouchableOpacity onPress={() => navigation.navigate('Create Wallet')} style={styles.buttonBox_yellow}>
          <Text style={styles.buttonText_small}>이전으로</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={styles.buttonBox_yellow}>
            <Text style={styles.buttonText_small}>화면 안내</Text>
      </TouchableOpacity>
      <Text style={styles.title_yellow}>안내 사항</Text>
      <Text style={styles.text_yellow}>카카오 계정 연결 없이 사용하면{"\n"}이후 결제와 데이터 저장이 되지 않습니다.</Text>
      <Text style={styles.text_yellow}>마이페이지에서 언제든지 연동할 수 있습니다.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('KakaoConnection')} style={styles.buttonBox_yellow}>
            <Text style={styles.buttonText_small}>사용하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('KakaoConnectScreen')} style={styles.buttonBox_yellow}>
            <Text style={styles.buttonText_small}>카카오계정 연결하기</Text>
      </TouchableOpacity>
   
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
export default NoConnectScreen;