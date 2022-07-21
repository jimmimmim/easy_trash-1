import { StyleSheet, TouchableOpacity, Text, View,
Button, Image, ImageBackground} from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';
import * as React from 'react';
import * as ImagePicker from 'expo-image-picker';
function TrashCamScreen({ navigation }) {
  const [image, setImage] = React.useState(null);
  const [status, setStatus] = React.useState(null);


  const API_KEY = 'AIzaSyAx9LPUPnfinGPBv9eO6O6yNGCUJ8kgUOA';
  const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
  
  async function callGoogleVisionAsync(image) {
    const body = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            {
              type: 'LABEL_DETECTION',
              maxResults: 1,
            },
          ],
        },
      ],
    };
  
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    console.log('callGoogleVisionAsync -> result', result);
  
    return result.responses[0].labelAnnotations[0].description;
  }

  const takePictureAsync = async () => {
    const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
      base64: true,
    });

    if (!cancelled) {
      setImage(uri);
      setStatus('Loading...');
      try {
        
        const result = await callGoogleVisionAsync(base64);
setStatus(result);

      } catch (error) {
        setStatus(`Error: ${error.message}`);
      }
    } else {
      setImage(null);
      setStatus(null);
    }
  };
  return (
    <View style={layout.backgroundContainerMain}>
      <ImageBackground source={require('../styles/greengradient.png')} resizeMode="cover" style={layout.image}>
        {image && <Image
        style={{
        width: "100%",
        height: "60%",
        resizeMode:"contain",
        margin: 20,
        }}
        source={{ uri: image }} />}
        {status && <Text
            style={{
            color: '#FFF',
            fontSize: 30,
            margin: 10,
        }}>{status}</Text>}
        <TouchableOpacity onPress={takePictureAsync} style={[button.buttonBox_yellow, {width: "70%"}]}>
          <Text style={text.buttonText_small}>사진 찍기</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default TrashCamScreen;