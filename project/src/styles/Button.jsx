import { StyleSheet } from 'react-native';

const Button = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonBox: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    buttonBox_yellow: {
        backgroundColor: "#FAFF00",
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 50,
        margin: 10,
    },
    buttonBox_white: {
        elevation: 8,
        width: '30%',
        backgroundColor: "#FFF",
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
});


export default Button;