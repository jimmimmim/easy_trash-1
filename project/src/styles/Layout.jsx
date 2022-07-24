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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#2A4747",
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
    },
    innerCircleContainer: {
        flex: 1,
        width: "90%",
        marginBottom: 15,
    },
    innerTextContainer: {
        flex: 1,
        width: "90%",
        marginBottom: 15,
    },
    twoButtonContainer: {
        flex: 0,
        width: "90%",
        marginTop: 10,
        marginBottom: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
    },
    searchContainer: {
        flex: 1,
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 30,
    },
    twoVideoContainer: {
        flex: 1,
        width: "90%",
        marginBottom: 30,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center',
    },
    videoContainer: {
        flex: 1,
        width: "100%",
        marginBottom: 30,
    },

    // COMPONENT
    swipebar:{
        backgroundColor:'#FAFF00',
        width:266,
        borderRadius:50,
        marginTop: 10,
    },

    // IMAGE
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: 60,
    },
});


export default Layout;