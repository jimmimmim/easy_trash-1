import { StyleSheet } from 'react-native';

const Layout = StyleSheet.create({
    swipebar:{
        backgroundColor:'#FAFF00',
        width:266,
        borderRadius:50,
    },
    container: {
        flex: 1,
      },
    backgroundContainerMain: {
        flex: 1,
        backgroundColor: '#2A4747',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#6D0000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSection: {
        flex: 2,
        backgroundColor: '#FFF',
        color: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innercontainer: {
        width: "90%",
        height: "30%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-around",
    },
    nestedcontainer: {
        width: "46%",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
    },
    titleContainer: {
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
      alignContent: "center",
      marginBottom: 20,
    },
});


export default Layout;