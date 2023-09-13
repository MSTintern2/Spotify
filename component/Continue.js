import { View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import style from '../styles/style';
import { LinearGradient } from 'react-native-linear-gradient';
import Acon from 'react-native-vector-icons/Fontisto'
const { width, height } = Dimensions.get('window');


const Continue = (props) => {

    const b = () => {
        props.navigation.navigate("GetStarted")
    }
    const a = () => {
        props.navigation.navigate("Signup")
    }

    const [isPressed, setIsPressed] = useState(false);

    return (
        <SafeAreaView style={style.container_main}>

            <View style={{ justifyContent: 'center', flexDirection: "row", flex: 0.1 }} >
                <TouchableOpacity
                    style={{ borderColor: "grey", width: 30, height: 30, borderRadius: 15, borderWidth: 1, justifyContent: "center", alignItems: "center", right: width * 0.4, marginTop: 40 }} onPress={b} >
                    <Image style={{ width: 17, height: 17, left: 0 }} source={require('../assests/back.png')} />
                </TouchableOpacity>
                <Image style={{ width: 133.26, height: 40, position: 'absolute', marginTop: 30 }} source={require('../assests/LOGO.png')} />
            </View>

            <View style={{ alignItems: 'center', flex: 0.55 }} >
                <Image style={{ position: 'absolute', width: '100%' }} source={require('../assests/group.png')} />
                <LinearGradient colors={['black', 'transparent']} style={{ width: width, height: 350, alignItems: 'center', }} start={{ x: 0.4, y: 0 }} end={{ x: 0.4, y: 1 }} />
                <LinearGradient colors={['transparent', 'black']} style={{ width: width, height: height * 0.23, alignItems: 'center' }} start={{ x: 0.2, y: 0 }} end={{ x: 0.2, y: 1 }} useAngle={true}
                    angle={180} />
            </View>

            <View style={{ alignItems: 'center', flex: 0.4, width: 300, alignSelf: "center" }} >
                <Text style={{ color: 'white', fontSize: 22, marginBottom: 37, fontWeight: 500 }}>Choose Mode</Text>

                <View style={{ alignItems: 'center', width: 200, alignSelf: "center", justifyContent: 'space-between', flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => setIsPressed(true)}
                        style={[style.circle, { backgroundColor: isPressed ? 'rgba(240, 240, 240, 0.1)' : '#333333' }]}>
                        <Image style={style.imgmode} source={require('../assests/dark.png')} />

                        <View style={{position:'absolute',top:57}}>
                            {isPressed ? (<Acon name="ellipse" size={width*0.06} color='rgba(30, 215, 96, 1)' />) : (null)}
                            </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setIsPressed(false)}
                        style={[style.circle, { backgroundColor: isPressed ? '#333333' : 'rgba(240, 240, 240,0.1)' }]}>

                            <Image style={style.imgmode} source={require('../assests/Sun.png')} />

                            <View style={{position:'absolute',top:57}}>
                            {isPressed ? (null) : (<Acon name="ellipse" size={width*0.06} color='rgba(30, 215, 96, 1)' />)}
                            </View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', width: 200, alignSelf: "center", justifyContent: 'space-between', flexDirection: "row" }}>
                    <Text style={[style.content, { color: isPressed ? 'rgba(30, 215, 96, 1)' : 'white' }]}>Light Mode</Text>
                    <Text style={[style.content, { color: isPressed ? 'white' : 'rgba(30, 215, 96, 1)' }]}>Dark Mode</Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: "#42C83C", padding: 12, width: 300, borderRadius: 70 }} onPress={a}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 600, textAlign: 'center', }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Continue;

