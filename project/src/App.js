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

// 메인 화면
function MainScreen({ onPress, navigation }) {
    return (
      <View style={styles.backgroundContainerMain}>
        <Text style={styles.title_black}>ALT-ZA</Text>

        {/* Log in button */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonBox}>
            <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        {/* Create new wallet */}
        <TouchableOpacity onPress={() => navigation.navigate('Create Wallet')} style={styles.textBtn}>
            <Text style={styles.textBtn}>Create a new Altza wallet</Text>
        </TouchableOpacity>
      </View>
    );
}

function LoginScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
          title="Go to Main"
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    );
}

function CreateWalletScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.black}>어쩌구 저쩌구 안내문</Text>
        <Text style={styles.black}>Terms of Service</Text>
        <Text style={styles.black}>Privacy Policy</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Secure')} style={styles.textBtn}>
            <Text style={styles.textBtn}>Accept</Text>
        </TouchableOpacity>
      </View>
    );
}

function SecureScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.black}>어쩌구 저쩌구 안내문</Text>
        <Text style={styles.black}>Face ID</Text>
        <Text style={styles.black}>Passcode</Text>
        <Button
          title="Go to Main"
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    );
}

// 홈 화면
function HomeScreen({ onpress, navigation }) {
    const currency = "USD";
    const money = "$100,000,000"
    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
            }]}>      
            <View style={styles.backgroundContainer}>
                <Text style={styles.title_white}>{currency} {money}</Text>
                <Text style={styles.white}>Your main Altza</Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onpress} style={styles.buttonBox_white}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onpress} style={styles.buttonBox_white}>
                    <Text style={styles.buttonText}>Receive</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onpress} style={styles.buttonBox_white}>
                    <Text style={styles.buttonText}>Swap</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <Text style={styles.title}>{currency} {money}</Text>
            </View>
            <Button
                title="Go to Main"
                onPress={() => navigation.navigate('Main')}
            />
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
}

const Stack = createNativeStackNavigator();


const Flex = () => {
    
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen 
                name="Create Wallet" 
                component={CreateWalletScreen} 
                options={{ title: 'Legal' }}
            />
            <Stack.Screen 
                name="Secure" 
                component={SecureScreen} 
                options={{ title: 'Secure' }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
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
    backgroundColor: '#FFF',
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
  title_black: {
    color: "#000",
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
  buttonBox_white: {
    elevation: 8,
    width: '30%',
    backgroundColor: "#FFF",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 15,
    color: "#000",
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
});

export default Flex;