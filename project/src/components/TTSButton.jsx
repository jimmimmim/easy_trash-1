import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

import * as Speech from 'expo-speech';

const speak = props => {
    Speech.speak(props.content, {
       language: 'ko',
    });
};

const TTSButton = props => {
    return(
        <TouchableOpacity onPress={speak(props)} style={button.buttonBox_yellow}>
           <Text style={text.buttonText_small}>{props.content}</Text>
        </TouchableOpacity>
    );
};

export default TTSButton;