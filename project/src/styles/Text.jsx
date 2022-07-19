import { StyleSheet } from 'react-native';

const Text = StyleSheet.create({

    // TITLE TEXT
    title_yellow: {
        color: "#FAFF00",
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: "center",
    },
    title_white: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: 'bold',
    },

    // TEXT
    text_style: {
        marginTop: 70,
        marginBottom : 10,
    },
    text_yellow: {
        color: "#FAFF00",
        alignSelf: "center",
        textAlign: "center",
    },
    white: {
        color: "#FFFFFF",
    },
    black: {
        color: "#000",
        fontSize: 20,
    },

    // BUTTON TEXT
    buttonText: {
        fontSize: 40,
        color: "#2A4747",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    buttonText_small: {
        fontSize: 20,
        color: "#2A4747",
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        textTransform: "uppercase",
    },
    buttonText_white: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    buttonText_hidden: {
        fontSize: 0,
        color: "#009688",
    },

    // TEXT BUTTON
    textBtn: {
        color: '#009688',
        fontSize: 20,
    },

    // White text
    showText: {
        marginTop: 10,
        fontSize: 25,
        color: '#FFF',
        //alignSelf: 'center',
        margin: 10,
    },

    // Text Input
    textInput: {
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: 20,
        height: 60,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#FFF',
        fontSize: 20,
        color: "#2A4747",
    },
});


export default Text;