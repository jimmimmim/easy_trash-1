import * as React from "react";
import { Text } from "react-native";
import layout from '../styles/Layout';
import button from '../styles/Button';
import text from '../styles/Text';

import * as Speech from 'expo-speech';

const TTSText = props => {
    return(
        <Text style={text.buttonText_small}>{props.content}</Text>
    );
};

export default TTSText;