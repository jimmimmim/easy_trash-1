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
        // marginTop:-300,
        marginBottom: 20,
        // backgroundColor:'none',
        borderColor: '#FAFF00',
        borderWidth: 2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    swipebar:{
        backgroundColor:'#FAFF00',
        width:266,
        borderRadius:50,
        marginTop: 10,
    },
});


export default Layout;