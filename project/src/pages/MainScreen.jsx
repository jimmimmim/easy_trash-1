import * as React from 'react';
import { TouchableOpacity, Text, SafeAreaView  } from "react-native";
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
                    <TouchableOpacity onPress={() => navigation.navigate('InformFunction_Recycle')} style={button.buttonCircle_yellow_left}>
                        <Text style={text.buttonText_small}>분리수거함{"\n"}카메라</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={layout.nestedcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('TrashCamScreen')} style={button.buttonCircle_yellow}>
                        <Text style={text.buttonText_small}>쓰레기{"\n"}카메라</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={layout.innercontainer}>
                <SafeAreaView style={layout.nestedcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeAppTrashScreen')} style={button.buttonCircle_yellow_left}>
                        <Text style={text.buttonText_small}>폐가전제품{"\n"}폐기 신청</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={layout.nestedcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('BigTrashScreen')} style={button.buttonCircle_yellow}>
                        <Text style={text.buttonText_small}>대형쓰레기{"\n"}폐기 신청</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={layout.innercontainer}>
                <SafeAreaView style={layout.nestedcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('TrashpediaScreen')} style={button.buttonCircle_yellow_left}>
                        <Text style={text.buttonText_small}>쓰레기{"\n"}대백과</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={layout.nestedcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('TTSExampleScreen')} style={button.buttonCircle_yellow}>
                        <Text style={text.buttonText_small}>사용법</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    </SafeAreaView>
  );
}

export default MainScreen;