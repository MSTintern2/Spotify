import { StyleSheet } from "react-native";



export default StyleSheet.create({
    container_main: {
        flex: 1,
        backgroundColor: 'black',
        color: 'white',
    },
    light_theme: {
        flex:1,
        backgroundColor: 'white',
        color: 'black'
    },
    circle: {
        backgroundColor: "#333333",
        height: 70,
        width: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    imgmode: {
        width: 24.8,
        height: 29.09,
        resizeMode: "contain"
    },
    content: {
        color: "#ffff",
        fontSize: 16,
        marginBottom: 50,
        marginTop: 15
    },
    gradient: {
        width: 300,
        height: 120,
        justifyContent: "center",
        alignSelf: "center"
    },
    homef: {
        width: "93%",
        height: "85%",
        backgroundColor: "#D7BD1E",
        borderRadius: 20,
        position: "absolute"
    },
    grid: {
        marginRight: 10,
        borderRadius: 10,
      
    },
    hj: {
        fontSize: 24,
        color: 'white',
        padding: 12,
    },
    clicked: {
        backgroundColor: "rgba(240, 240, 240, 0.1)",
        height: 70,
        width: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
      searchBar__unclicked: {
        flex:0.1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        backgroundColor: "#333",
        borderRadius: 15,
        margin:10,
      },
      input: {
        fontSize: 16,
        marginLeft: 10,
        width: "75%",
        color:'white',
      },
   
});

