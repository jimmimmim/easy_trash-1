import * as React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import indStyle from '../styles/LandingScreenStyle'
function LandingScreen({ onPress, navigation }) {
    return (
      <View style={styles.backgroundContainerMain}>

        {/* Landing button */}
        <TouchableOpacity onPress={() => navigation.navigate('Create Wallet')} style={styles.buttonBox_yellow}>
            <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
        <Text style={[styles.text_yellow, indStyle.text_style] }>쉬운 쓰레기는 시각 장애인을 위해 {"\n"} 음성 안내가 자동 실행됩니다.</Text>
        <Text style={styles.text_yellow}>아래의 녹색 버튼을 오른쪽으로 옮기시면 중단됩니다.</Text>
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
  
  export default LandingScreen;