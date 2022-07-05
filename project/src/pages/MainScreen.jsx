import * as React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, View, SafeAreaView  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

// 메인 페이지 (버튼 6개)
function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={layout.backgroundContainerMain}>
        <SafeAreaView style={layout.titleContainer}>
        <Text style={text.title_yellow}>메인 페이지{"\n"}암튼 로고</Text>
        </SafeAreaView>
        <SafeAreaView style={layout.container}>
            <SafeAreaView style={layout.innercontainer}>
                <SafeAreaView style={layout.nestedcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('InformFunction_Recycle')} style={styles.buttonCircle_yellow_left}>
                        <Text style={styles.buttonText_small}>분리수거함{"\n"}카메라</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={styles.nestedcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('NoConnectScreen')} style={styles.buttonCircle_yellow}>
                        <Text style={styles.buttonText_small}>쓰레기{"\n"}카메라</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.innercontainer}>
                <SafeAreaView style={styles.nestedcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('NoConnectScreen')} style={styles.buttonCircle_yellow_left}>
                        <Text style={styles.buttonText_small}>폐가전제품{"\n"}폐기 신청</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={styles.nestedcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('NoConnectScreen')} style={styles.buttonCircle_yellow}>
                        <Text style={styles.buttonText_small}>대형쓰레기{"\n"}폐기 신청</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.innercontainer}>
                <SafeAreaView style={styles.nestedcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('NoConnectScreen')} style={styles.buttonCircle_yellow_left}>
                        <Text style={styles.buttonText_small}>쓰레기{"\n"}대백과</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={styles.nestedcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('NoConnectScreen')} style={styles.buttonCircle_yellow}>
                        <Text style={styles.buttonText_small}>사용법</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      width: "80%",
      height: "70%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    
    title_yellow: {
      color: "#FAFF00",
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: "center",
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
    buttonCircle_yellow: {
        width: "40%",
        height: "100%",
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: "auto",
        backgroundColor: "#FAFF00",
        borderRadius: 10000,
        borderColor: "#B7C712",
        borderWidth: 5,
        justifyContent: "center",
    },
    buttonCircle_yellow_left: {
        width: "40%",
        height: "100%",
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: "auto",
        backgroundColor: "#FAFF00",
        borderRadius: 10000,
        borderColor: "#B7C712",
        borderWidth: 5,
        justifyContent: "center",
        // marginRight: 10,
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
      textAlign: "center",
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

  export default MainScreen;