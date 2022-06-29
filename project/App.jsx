import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return ( 
        <View style = { styles.container }>
            <Text style={styles.innerText}>냥</Text>
            <StatusBar style = "auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color:"#E5DF59",
        backgroundColor: "#2A4747",
        opacity:'1',
        alignItems: "center",
        justifyContent: "center",
    },
    innerText:{
        color:"#E5DF59",
        fontSize:15
    }
});