import ImagePickerComponent from "../../imagePickerComponent";
import callGoogleVisionAsync from "../../helperOCRFunctions";
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground} from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
function ImageUpload({ navigation }) {
  return (
    <View style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
      <ImagePickerComponent onSubmit={callGoogleVisionAsync}/>
      </ImageBackground>
    </View>
  );
}

export default ImageUpload;