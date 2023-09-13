import React, { useState } from "react";
import { TextInput, Modal,View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions, ScrollView, StyleSheet, TouchableHighlight,Pressable } from 'react-native';
import style from '../styles/style';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');
const Register = ({ navigation }) => {
  const b = () => {
    navigation.navigate("Signup")
  }
  const a = () => {
    navigation.navigate("Login")
  }

  // States:
  const [data, setdata] = useState({
    name: '',
    email: '',
    password: '',
    Repeatpassword: ''
  });
//--------------------------------Asynchrounous Storage------------------------------------
const setAsync= async ()=>{
await AsyncStorage.setItem('name',data.name)
await AsyncStorage.setItem('email',data.email)
}

//----------------Full States-----------------------------

  const [show, onChangeShow] = useState(true);
  const [rshow, onChangerShow] = useState(true);
  const [modalVisible,setModalVisible]=useState(false)
  const [message,setMassage] = useState('');


  const handleOnchange = (text, input) => {
    setdata(prevstate => ({ ...prevstate, [input]: text }));
  };
 
//Main OnCall Register
  const handleSubmit = () => {
   
    if (!data.name || !data.email || !data.password || !data.Repeatpassword) {
      setModalVisible(true)
      setMassage('All fields are required.')
    }
    else if (data.name.length < 3) {
      setModalVisible(true)
      setMassage('Name should be 3 digits long.')
    }
    else if (!data.email.match(/\S+@\S+\.\S+/)) {
      setModalVisible(true)
      setMassage('Invalid Email.')
    }
   else if (data.password.length < 8) {
    setModalVisible(true)
    setMassage('Password must be 8 digit long.')
    }
  else {
    navigation.navigate('Home')
    setAsync();
    setdata({
      name: '',
      email: '',
      password: '',
      Repeatpassword: ''
    })
    
  }
}

  return (


    <SafeAreaView style={style.container_main}>
      <ScrollView>
        <View style={{ justifyContent: 'center', flexDirection: "row", flex: 0.1, height: height * 0.13 }} >
          <TouchableOpacity
            style={{ borderColor: "grey", width: 30, height: 30, borderRadius: 15, borderWidth: 1, justifyContent: "center", alignItems: "center", right: width * 0.4, marginTop: 36 }} onPress={b} >
            <Image style={{ width: 17, height: 17, left: 0 }} source={require('../assests/back.png')} />
          </TouchableOpacity>
          <Image style={{ width: 133.26, height: 40, position: 'absolute', marginTop: 30 }} source={require('../assests/LOGO.png')} />
        </View>

        <View style={{ flex: 0.1, height: height * 0.11 }}>
          <Text style={{ color: "white", fontSize: 26, fontWeight: 600, textAlign: 'center', marginBottom: 10 }}>Register</Text>
          <Text style={{ color: "white", fontSize: 14, fontWeight: 400, textAlign: 'center', }}>If You Need Any Support<TouchableOpacity><Text style={{ color: "#1ED760", fontSize: 14, fontWeight: 400, textAlign: 'center', top: 5 }} > Click Here</Text></TouchableOpacity> </Text>
        </View>

        <View style={{ alignSelf: "center", flex: 0.6, height: height * 0.55,width:width*0.76 }}>

          <TextInput
            onChangeText={(text) => handleOnchange(text, 'name')}
            value={data.name}
            style={styles.emailInput}
            placeholder="Full Name"
            placeholderTextColor="#888"
          />

          <TextInput
            onChangeText={(text) => handleOnchange(text, 'email')}
            value={data.email}
            style={styles.emailInput}
            placeholder="Enter Email"
            placeholderTextColor="#888"
          />

          <View>
            <TextInput
              onChangeText={(text) => handleOnchange(text, 'password')}
              secureTextEntry={show}
              value={data.password}
              style={styles.name}
              placeholder="Password"
              placeholderTextColor="#888"
            />

            <TextInput
              onChangeText={(text) => handleOnchange(text, 'Repeatpassword')}
              secureTextEntry={rshow}
              value={data.Repeatpassword}
              style={styles.name}
              placeholder="Repeat Password"
              placeholderTextColor="#888"
            />
            <TouchableOpacity onPress={() => onChangeShow((ab) => !(ab))} style={{ position: 'absolute', right: 28, top: 29 }}>
              <Icon name={show ? 'eye-off' : 'eye'} size={20} color="#888" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onChangerShow((bc) => !(bc))} style={{ position: 'absolute', right: 28, top: 95 }}>
              <Icon name={rshow ? 'eye-off' : 'eye'} size={20} color="#888" />
            </TouchableOpacity>
          </View>

          <TouchableHighlight onPress={handleSubmit} style={styles.button}>
            
            <Text style={{ color: "black", fontSize: 18, fontWeight: 600, width: 270, textAlign: 'center', }}>Register</Text>
            
          </TouchableHighlight>

          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, width: width*0.34, marginBottom: 8, marginRight: 6 }} />
            <Text style={{ color: "white", marginRight: 6 }}>Or</Text>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, width: width*0.35, marginBottom: 8 }} />
          </View>

        </View>

        <View style={{ alignSelf: "center", flex: 0.1, flexDirection: "row", justifyContent: "space-between", gap: width * 0.04, height: height * 0.12, }}>
          <TouchableOpacity
            style={{ borderColor: "grey", width: 90, height: 45, borderRadius: 10, borderWidth: 1, justifyContent: "center", alignItems: "center" }} onPress={b} >
            <Image style={{ width: 24, height: 25 }} source={require('../assests/Facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ borderColor: "grey", width: 90, height: 45, borderRadius: 10, borderWidth: 1, justifyContent: "center", alignItems: "center" }} onPress={b} >
            <Image style={{ width: 23.64, height: 23.64 }} source={require('../assests/g.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ borderColor: "grey", width: 90, height: 45, borderRadius: 10, borderWidth: 1, justifyContent: "center", alignItems: "center" }} onPress={b} >
            <Image style={{ width: 21.12, height: 26.01 }} source={require('../assests/apple.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center', flex: 0.1, alignSelf: "center", marginBottom: 30, }} >
          <Text style={{ color: "white", fontSize: 14, fontWeight: 400, textAlign: 'center', }}> Have An Account?
            <TouchableOpacity onPress={a}><Text style={{ color: "#D7BD1E", fontSize: 14, fontWeight: 400, textAlign: 'center', top: 5 }} > Login </Text></TouchableOpacity> </Text>
        </View>

        <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        >
          <View style={styles.centeredView}> 
          <View style={styles.modalView}>
            <View style={{backgroundColor:'#42C83C',height:'30%',borderRadius:10,alignItems:'center',borderBottomEndRadius:0,borderBottomStartRadius:0,justifyContent:'center'}}>
            <Text style={{color:'black',fontSize:20,fontWeight:600}}>Alert</Text>
            </View>
            
            <View style={{alignItems:'center',justifyContent:'center',height:'50%'}}>
              <Text style={{fontSize:16,fontWeight:400,color:'black'}}>{message}</Text>
              </View>
              <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
              <View  style={{backgroundColor:'#42C83C',height:'45%',borderRadius:10,alignItems:'center',borderTopEndRadius:0,borderTopStartRadius:0,justifyContent:'center'}} >
              <Text style={styles.textStyle}>Ok</Text>
            </View>
            </Pressable>
          </View>
          </View>
      </Modal>

      </ScrollView>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  emailInput: {

    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#888',
    color: "white",
    padding: 10,
    marginTop: 15,
  },
  name: {
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    color: "white",
    borderColor: '#888',
    marginTop: 15,
    padding: 10,
  },
  button: {
    backgroundColor: '#42C83C',
    borderRadius: 30,
    marginTop: 25,
    padding: 15,
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  modalView: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    width:'80%',
    height:'25%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }, 
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:18
  },

});
export default Register;
