import * as React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text,SafeAreaView,
  View,
  StatusBar,
  FlatList } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import {GestureHandlerRootView } from 'react-native-gesture-handler';

const LeftSwipeActions = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }}
    >
      <Text
        style={{
          color: '#40394a',
          paddingHorizontal: 10,
          fontWeight: '600',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Bookmark
      </Text>
    </View>
  );
};
const rightSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: '#ff8303',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <Text
        style={{
          color: '#1b1a17',
          paddingHorizontal: 10,
          fontWeight: '600',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Delete
      </Text>
    </View>
  );
};
const swipeFromLeftOpen = () => {
  alert('Swipe from left');
};
const swipeFromRightOpen = () => {
  alert('Swipe from right');
};

const Item = () => (
  <GestureHandlerRootView>
  <Swipeable
    renderLeftActions={LeftSwipeActions}
    renderRightActions={rightSwipeActions}
    onSwipeableRightOpen={swipeFromRightOpen}
    onSwipeableLeftOpen={swipeFromLeftOpen}
  >
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'white',
      }}
    >
      <Text style={{ fontSize: 24 }}>
        냉
      </Text>
    </View>
  </Swipeable>
  </GestureHandlerRootView>
);

function LandingScreen({ onPress, navigation }) {
    return (
      <View style={layout.backgroundContainerMain}>

        {/* Landing button */}
        <TouchableOpacity onPress={() => navigation.navigate('Create Wallet')} style={button.buttonBox_yellow}>
            <Text style={text.buttonText}>시작하기</Text>
        </TouchableOpacity>
        <Text style={[text.text_yellow, text.text_style] }>쉬운 쓰레기는 시각 장애인을 위해 {"\n"} 음성 안내가 자동 실행됩니다.</Text>
        <Text style={text.text_yellow}>아래의 녹색 버튼을 오른쪽으로 옮기시면 중단됩니다.</Text>
        <>
      <StatusBar />
      <SafeAreaView style={layout.container}>
        <Text style={{ textAlign: 'center', marginVertical: 20 }}>
          Swipe right or left
        </Text>
        <Item/>
      </SafeAreaView>
    </>
     </View>
    );
}
  
export default LandingScreen;