import { StyleSheet } from 'react-native';

const Layout = StyleSheet.create({

    // CONTAINER
    container: {
        width: "80%",
        height: "70%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backgroundContainerMain: {
        flex: 1,
        backgroundColor: '#2A4747',
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
    brailleContainer: {
        width:"70%", 
        height:"25%",
        marginBottom: 20,
        borderColor: '#FAFF00',
        borderWidth: 2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    twoCircleContainer: {
        flex: 1,
        width: "60%",
        marginBottom: 60,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center',
//         borderColor: 'blue',
//         borderWidth: 3,
    },
    innerCircleContainer: {
        flex: 1,
        width: "90%",
        marginBottom: 15,
    },
    twoButtonContainer: {
        flex: 0,
//         borderColor: 'red',
//         borderWidth: 3,
        marginTop: 10,
        marginBottom: 60,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
    },
    swipebar:{
        backgroundColor:'#FAFF00',
        width:266,
        borderRadius:50,
        marginTop: 10,
    },
});


export default Layout;