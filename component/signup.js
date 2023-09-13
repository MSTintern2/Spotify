import { View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';
import style from '../styles/style';
import { LinearGradient } from 'react-native-linear-gradient';
const { width,height } = Dimensions.get('window');
const Signup = (props) => {
    const b = () => {
        props.navigation.navigate("Continue")
    }
    const a = () => {
        props.navigation.navigate("Login")
    }
    const l = () => {
        props.navigation.navigate("Register")
    }
    return (
        <SafeAreaView style={style.container_main}>


            <View style={{ justifyContent: 'center', flexDirection: "row", flex: 0.1 }} >
                <TouchableOpacity
                    style={{ borderColor: "grey", width: 30, height: 30, borderRadius: 15, borderWidth: 1, justifyContent: "center", alignItems: "center", right: width * 0.4, marginTop: 36 }} onPress={b} >
                    <Image style={{ width: 17, height: 17, left: 0 }} source={require('../assests/back.png')} />
                </TouchableOpacity>
                <Image style={{ width: 133.26, height: 40, position: 'absolute', marginTop: 30 }} source={require('../assests/LOGO.png')} />
            </View>

            <View style={{ alignItems: 'center', flex: 0.57 }} >
                <Image style={{ position: 'absolute' }} source={require('../assests/group.png')} />
                <LinearGradient colors={['black', 'transparent']} style={{ width: width, height: 350, alignItems: 'center', }} start={{ x: 0.4, y: 0 }} end={{ x: 0.4, y: 1 }} />
                <LinearGradient colors={['transparent', 'black']} style={{ width: width, height: height*0.23, alignItems: 'center' }} start={{ x: 0.2, y: 0 }} end={{ x: 0.2, y: 1 }} useAngle={true}
                    angle={180} />
            </View>

            <View style={{ alignItems: 'center', flex: 0.33, alignSelf: "center",width:width }} >

                <TouchableOpacity style={{ backgroundColor: "#42C83C", padding: 9, width: "85%", borderRadius: 70, marginBottom: 9 }} onPress={l}>
                    <Text style={{ color: "black", fontSize: 16, fontWeight: 600, textAlign: 'center', }}>Sign up free</Text>
                </TouchableOpacity>



                <TouchableOpacity style={{ padding: 5, width:"85%", borderRadius: 70, borderColor: 'white', borderWidth: 1, marginBottom: 9, display: 'flex', flexDirection: "row", gap: 35 }} onPress={l}>
                    <Image style={{ width: 17.81, left: 10, }} source={require('../assests/mi.png')} />
                    <Text style={{ color: "white", fontSize: 16, fontWeight: 400, textAlign: 'center', }}>Continue with phone number</Text>

                </TouchableOpacity>


                <TouchableOpacity style={{ padding: 5, width: "85%", borderRadius: 70, borderColor: 'white', borderWidth: 1, marginBottom: 9, display: 'flex', flexDirection: "row", gap: 50 }} onPress={l}>
                    <Image style={{ width: 29.11, left: 10 }} source={require('../assests/Google.png')} />
                    <Text style={{ color: "white", fontSize: 16, fontWeight: 400, textAlign: 'center', }}>Continue with Google</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 5, width: "85%", borderRadius: 70, borderColor: 'white', borderWidth: 1, marginBottom: 9, display: 'flex', flexDirection: "row", gap: 40 }} onPress={l}>
                    <Image style={{ width: 29.11, left: 10 }} source={require('../assests/Facebook.png')} />
                    <Text style={{ color: "white", fontSize: 16, fontWeight: 400, textAlign: 'center', }}>Continue with Facebook</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={a}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: 600, textAlign: 'center', }}>Log In</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}
export default Signup;