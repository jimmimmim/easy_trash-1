
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ImageUpload from './pages/ImageUpload';
import LandingScreen from './pages/LandingScreen';
import CreateWalletScreen from './pages/CreateWalletScreen';
import HowtoConnectKakao from './pages/HowtoConnectKakao';
import NoConnectScreen from './pages/NoConnectScreen';
import KakaoConnectScreen from './pages/KakaoConnectScreen';
import InformFunction_Recycle from './pages/InformFunction_Recycle';
import TrashCamScreen from './pages/TrashCamScreen';
import BigTrashScreen from './pages/BigTrashScreen';
import CallScreen from './pages/CallScreen';
import HomeAppTrashScreen from './pages/HomeAppTrashScreen';
import TrashpediaScreen from './pages/TrashpediaScreen';
import TutorialScreen from './pages/TutorialScreen';
import TTSExampleScreen from './pages/TTSExampleScreen';
import MainScreen from './pages/MainScreen';

const Stack = createNativeStackNavigator();

const Flex = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={LandingScreen} />
            <Stack.Screen 
                name="Create Wallet" 
                component={CreateWalletScreen} 
                /*options={{ title: 'Account' }}*/
            />
            {/*
            <Stack.Screen name="InformFunction_Recycle" component={InformFunction_Recycle}/>
            <Stack.Screen name="TrashCamScreen" component={TrashCamScreen}/>
            <Stack.Screen name="HomeAppTrashScreen" component={HomeAppTrashScreen}/>
            <Stack.Screen name="TutorialScreen" component={TutorialScreen}/>
            */}
            <Stack.Screen name="TrashpediaScreen" component={TrashpediaScreen}/>
            <Stack.Screen name="BigTrashScreen" component={BigTrashScreen}/>
            <Stack.Screen name="CallScreen" component={CallScreen}/>
            <Stack.Screen name="TTSExampleScreen" component={TTSExampleScreen}/>
            <Stack.Screen name="HowtoConnectKakao" component={HowtoConnectKakao}/>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="KakaoConnectScreen" component={KakaoConnectScreen}/>
            <Stack.Screen name="NoConnectScreen" component={NoConnectScreen}/> 
            <Stack.Screen name="ImageUpload" component={ImageUpload}/> 
        </Stack.Navigator>
  </NavigationContainer>
    
  );
};

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

export default Flex;