import { View, Text, Image, TouchableOpacity, SafeAreaView ,Dimensions} from 'react-native';
import React from 'react';
import style from '../styles/style';
import {LinearGradient} from 'react-native-linear-gradient';
const { width ,height} = Dimensions.get('window');
const GetStarted = (props) => {
  const a = () => {
    props.navigation.navigate("Signup")
  }
  return (
    <SafeAreaView style={style.container_main}>

      <View style={{ alignItems: 'center', flex: 0.1 }}>
      
        <Image style={{ width: 134, height: 40,marginTop:30}} source={require('../assests/LOGO.png')} />
      </View>

      <View style={{ alignItems: 'center', flex: 0.6 }} >
      
      <Image style={{ position: 'absolute',width:width,height:height*0.6 ,resizeMode:'cover'}} source={require('../assests/group.png')} />
      <LinearGradient colors={['black', 'transparent']} style={{width:width,height:height*0.5,alignItems:'center'}} start={{ x: 0.8, y: 0 }} end={{ x: 0.8, y: 1 }} />

      <LinearGradient colors={['transparent', 'black']} style={{width:width,height:height*0.1,alignItems:'center'}} start={{ x: 0.8, y: 0}} end={{ x: 0.8, y:1 }} useAngle={true}
  angle={180}/>
      </View>

      <View style={{ alignItems: 'center', flex: 0.3, width: width*0.9, alignSelf: "center", }} >
        <Text style={{ color: "#1ED760", fontSize: 25, fontWeight: 700,marginBottom: 15}}>Music for everyone.</Text>
        <Text style={{ color: "white", fontSize: 14, textAlign: "center",fontFamily:'Montserrat-BoldItalic' }}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </Text>
        <TouchableOpacity style={{ backgroundColor: "#42C83C", padding: 12, borderRadius: 70, marginTop: height*0.04}} onPress={a}>
          <Text style={{ color: "black", fontSize: 18, fontWeight: 600, width: width*0.7, textAlign: 'center', }}>Get Started</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}

export default GetStarted;