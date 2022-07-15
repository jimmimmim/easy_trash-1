import ImagePickerComponent from "../../imagePickerComponent";
import callGoogleVisionAsync from "../../helperOCRFunctions";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
function ImageUpload({ navigation }) {
  return (
    <View style={layout.backgroundContainerMain}>
      <ImagePickerComponent onSubmit={callGoogleVisionAsync}/>
    </View>
  );
}

export default ImageUpload;