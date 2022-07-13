import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

import * as Speech from 'expo-speech';

const speak = props => {

    alert(props.content);

    Speech.speak("한국말도 할 수 있을까?", {
       language: 'ko',
    });
};

const TTSButton = props => {
    return(
        <TouchableOpacity onPress={speak} style={button.buttonBox_yellow}>
           <Text style={text.buttonText_small}>{props.content}</Text>
        </TouchableOpacity>
    );
};

export default TTSButton;