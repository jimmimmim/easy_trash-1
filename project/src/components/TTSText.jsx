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

const TTSText = props => {
    return(
        <TouchableOpacity onPress={speak(props)}>
           <Text style={text.text_yellow}>{props.content}</Text>
        </TouchableOpacity>
    );
};

export default TTSText;