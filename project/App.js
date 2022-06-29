import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>쉬운 쓰레기</Text>
      <Text style={styles.btnText}>시작하기</Text>
      <Text style={styles.innerText}>자동으로 음성안내가 실행됩니다.</Text>
      <Text style={styles.detailText}>아래의 버튼을 왼쪽부터 차례대로 누르시면 중단됩니다.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A4747',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#E5DF59',
    fontSize: 40,
  },
  btnText: {
    color: '#E5DF59',
    fontSize: 30,
  },
  innerText: {
    color: '#E5DF59',
    fontSize: 20,
  },
  detailText: {
    color: '#E5DF59',
    fontSize: 15,
  },
});
