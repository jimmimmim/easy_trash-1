// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>쉬운 쓰레기</Text>
//       <Text style={styles.btnText}>시작하기</Text>
//       <Text style={styles.innerText}>자동으로 음성안내가 실행됩니다.</Text>
//       <Text style={styles.detailText}>아래의 버튼을 왼쪽부터 차례대로 누르시면 중단됩니다.</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2A4747',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titleText: {
//     color: '#E5DF59',
//     fontSize: 40,
//   },
//   btnText: {
//     color: '#E5DF59',
//     fontSize: 30,
//   },
//   innerText: {
//     color: '#E5DF59',
//     fontSize: 20,
//   },
//   detailText: {
//     color: '#E5DF59',
//     fontSize: 15,
//   },
// });

// ++++++++++++++++++++++++++++++

import * as React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




// // 랜딩 화면
// function LandingScreen({ onPress, navigation }) {
//     return (
//       <View style={styles.backgroundContainerMain}>
//         <Text style={[styles.title_yellow]}>쉬운 쓰레기</Text>

//         {/* Landing button */}
//         <TouchableOpacity onPress={() => navigation.navigate('Create Wallet')} style={styles.buttonBox_yellow}>
//             <Text style={styles.buttonText}>시작기</Text>
//         </TouchableOpacity>

//         {/* Create new wallet */}
//         {/* <TouchableOpacity onPress={() => navigation.navigate('Create Wallet')} style={styles.textBtn}>
//             <Text style={styles.textBtn}>Create a new Altza wallet</Text>
//         </TouchableOpacity> */}
//         <Text style={styles.text_yellow}>쉬운 쓰레기는 시각 장애인을 위해 {"\n"} 음성 안내가 자동 실행됩니다.</Text>
//         <Text style={styles.text_yellow}>아래의 녹색 버튼을 오른쪽으로 옮기시면 중단됩니다.</Text>
//       </View>
//     );
// }

// // 계정 연결 페이지 (카카오 계정 연결 / 연결 없이)
// function CreateWalletScreen({ navigation }) {
//   return (
//     <View style={styles.backgroundContainerMain}>
//       <Text style={styles.text_yellow}>대형 쓰레기 수거 등록과 결제를 
// 하려면{"\n"} 카카오 계정 연동이 필요합니다.</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('KakaoConnectScreen')} style={styles.buttonBox_yellow}>
//           <Text style={styles.buttonText_small}>카카오계정 연결하기</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('NoConnectScreen')} style={styles.buttonBox_yellow}>
//           <Text style={styles.buttonText_small}>연결 없이 사용하기</Text>
//       </TouchableOpacity>
//       <Text style={styles.text_yellow}>마이 페이지에서 언제든지 연결 가능해요!</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('HowtoConnectKakao')} style={styles.buttonBox_yellow}>
//           <Text style={styles.buttonText_small}>카카오 계정 연결하는 법이 궁금해요!</Text>
//       </TouchableOpacity>
//       {/* <Text style={styles.text_yellow}>Privacy Policy</Text> */}
//       {/* <TouchableOpacity onPress={() => navigation.navigate('Secure')} style={styles.textBtn}>
//           <Text style={styles.textBtn}>Accept</Text>
//       </TouchableOpacity> */}
//     </View>
//     // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     // </View>
//   );
// }

// //카카오 계정 연결하기 페이지
// function KakaoConnectScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>카카오 로그인 연결 페이지</Text>
//     </View>
//   );
// }

// //카카오 연결 없이 사용하기
// function NoConnectScreen({ navigation }) {
//   return (
//     <View style={styles.backgroundContainerMain}>
//       <TouchableOpacity onPress={() => navigation.navigate('Create Wallet')} style={styles.buttonBox_yellow}>
//           <Text style={styles.buttonText_small}>이전으로</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('MainScreen')} style={styles.buttonBox_yellow}>
//             <Text style={styles.buttonText_small}>화면 안내</Text>
//       </TouchableOpacity>
//       <Text style={styles.title_yellow}>안내 사항</Text>
//       <Text style={styles.text_yellow}>카카오 계정 연결 없이 사용하면{"\n"}이후 결제와 데이터 저장이 되지 않습니다.</Text>
//       <Text style={styles.text_yellow}>마이페이지에서 언제든지 연동할 수 있습니다.</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('KakaoConnection')} style={styles.buttonBox_yellow}>
//             <Text style={styles.buttonText_small}>사용하기</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('KakaoConnectScreen')} style={styles.buttonBox_yellow}>
//             <Text style={styles.buttonText_small}>카카오계정 연결하기</Text>
//       </TouchableOpacity>
   
//     </View>
//   );
// }

// //카카오 계정 연결하는 법이 궁금해요! 페이지
// function HowtoConnectKakao({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>카카오 계정 연결하는 법이 궁금해요! 페이지</Text>
//     </View>
//   );
// }

// function LoginScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Login Screen</Text>
//         <Button
//           title="Go to Main"
//           onPress={() => navigation.navigate('Main')}
//         />
//       </View>
//     );
// }

// //화면안내,메인페이지
// function MainScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={styles.black}>메인페이지</Text>

      
//     </View>
//   );
// }


// function SecureScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text style={styles.black}>어쩌구 저쩌구 안내문</Text>
//         <Text style={styles.black}>Face ID</Text>
//         <Text style={styles.black}>Passcode</Text>
//         <Button
//           title="Go to Main"
//           onPress={() => navigation.navigate('Main')}
//         />
//       </View>
//     );
// }

// // 홈 화면
// function HomeScreen({ onpress, navigation }) {
//     const currency = "USD";
//     const money = "$100,000,000"
//     return (
//         <View style={[styles.container, {
//             // Try setting `flexDirection` to `"row"`.
//             flexDirection: "column"
//             }]}>      
            
//             <View style={styles.backgroundContainer}>
//                 <Text style={styles.title_white}>{currency} {money}</Text>
//                 <Text style={styles.white}>Your main Altza</Text>
//                 <View style={styles.buttonContainer}>
//                 <TouchableOpacity onPress={onpress} style={styles.buttonBox_white}>
//                     <Text style={styles.buttonText}>Send</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={onpress} style={styles.buttonBox_white}>
//                     <Text style={styles.buttonText}>Receive</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={onpress} style={styles.buttonBox_white}>
//                     <Text style={styles.buttonText}>Swap</Text>
//                 </TouchableOpacity>
//                 </View>
//             </View>
//             <View style={styles.bottomSection}>
//                 <Text style={styles.title}>{currency} {money}</Text>
//             </View>
//             <Button
//                 title="Go to Main"
//                 onPress={() => navigation.navigate('Main')}
//             />
//         </View>
//     );
// }



import LandingScreen from './pages/LandingScreen';
import CreateWalletScreen from './pages/CreateWalletScreen';
import HowtoConnectKakao from './pages/HowtoConnectKakao';
import NoConnectScreen from './pages/NoConnectScreen';
import KakoConnectScreen from './pages/KakoConnectScreen';
import MainScreen from './pages/MainScreen';

const Stack = createNativeStackNavigator();

const Flex = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={LandingScreen} />
            {/* <Stack.Screen name="Login" component={<LoginScreen/>} /> */}
            <Stack.Screen 
                name="Create Wallet" 
                component={CreateWalletScreen} 
                /*options={{ title: 'Account' }}*/
            />
            <Stack.Screen name="HowtoConnectKakao" component={HowtoConnectKakao}/>
            <Stack.Screen name="KakaoConnectScreen" component={KakoConnectScreen}/>
            <Stack.Screen name="NoConnectScreen" component={NoConnectScreen}/> 
            <Stack.Screen name="MainScreen" component={MainScreen}/> 
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