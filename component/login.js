import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, StyleSheet, TouchableHighlight, Dimensions, ScrollView, Modal, } from 'react-native';
import React, { useState, useEffect } from 'react';
import style from '../styles/style';
import Icon from 'react-native-vector-icons/Feather';
import NetInfo from "@react-native-community/netinfo";
const { width, height } = Dimensions.get('window');

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [show, onChangeShow] = useState(true);
  const [modalVisible, setModalVisible] = useState(false)
  const [message, setMassage] = useState('');
  const [Isinternet, setinternet] = useState(false)
  const [IsMobile, setMobile] = useState(false)

  //------------------------------- Fetching API -----------------------

  const handleSubmit = () => {

    if (!email || !password) {
      setModalVisible(true)
      setMassage('All fields are required')
    } 
   else if (Isinternet === true || IsMobile === true) {
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: email,
          password: password,
          // username: 'kminchelle',
          // password: '0lelplR',
        })
      })
        .then(res => res.json())
        .then(result => {
          if (result.id){
           props.navigation.navigate('Home')
            setEmail('')
            setpassword('')
          }
          else {
            setModalVisible(true)
            setMassage(result.message)
          }
        })

    } else {
      setModalVisible(true)
      setMassage('Check the internet connection and then try again.')
    }
  }

  //-----------------internet connection check---------------------------
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setinternet(state.isWifiEnabled);
      setMobile(state.isConnected);
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, []);

  //-----------------------Navigation:-------------------------------
  const b = () => {
    props.navigation.navigate("Signup")
  }
  const a = () => {
    props.navigation.navigate("Register")
  }

  return (

    <SafeAreaView style={style.container_main}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ justifyContent: 'center', flexDirection: "row", flex: 0.1, height: height * 0.2 }} >
          <TouchableOpacity
            style={{ borderColor: "grey", width: 30, height: 30, borderRadius: 15, borderWidth: 1, justifyContent: "center", alignItems: "center", right: width * 0.4, marginTop: 36 }} onPress={b} >
            <Image style={{ width: 17, height: 17, left: 0 }} source={require('../assests/back.png')} />
          </TouchableOpacity>
          <Image style={{ width: 133.26, height: 40, position: 'absolute', marginTop: 30 }} source={require('../assests/LOGO.png')} />
        </View>

        <View style={{ flex: 0.13, height: height * 0.12 }}>
          <Text style={{ color: "white", fontSize: 26, fontWeight: 600, textAlign: 'center', marginBottom: 10 }}>Log In</Text>
          <Text style={{ color: "white", fontSize: 14, fontWeight: 400, textAlign: 'center', }}>If You Need Any Support<TouchableOpacity><Text style={{ color: "#1ED760", fontSize: 14, fontWeight: 400, textAlign: 'center', top: 5 }} > Click Here</Text></TouchableOpacity> </Text>
        </View>

        <View style={{ flex: 0.47, textAlign: "left" }}>
          <View style={{ alignItems: 'center', textAlign: "left" }}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              value={email}
              style={styles.emailInput}
              placeholder="Enter Username or Email"
              placeholderTextColor="#888"
            />
            <TextInput
              onChangeText={(text) => setpassword(text)}
              secureTextEntry={show}
              value={password}
              style={styles.name}
              placeholder="Password"
              placeholderTextColor="#888"
            />
            <TouchableOpacity onPress={() => onChangeShow((ab) => !(ab))} style={{ position: 'absolute', right: width * 0.17, top: height * 0.107 }}>
              <Icon name={show ? 'eye-off' : 'eye'} size={20} color="#888" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 12, fontWeight: '500', marginTop: 15, textAlign: 'left', marginLeft: 40 }}>
              Forgot password?
            </Text>
            <View style={{ borderBottomColor: '#888', borderBottomWidth: 1, width: 100, marginLeft: 38 }}></View>
          </TouchableOpacity>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableHighlight onPress={handleSubmit} style={styles.button}>
              <Text style={{ color: "black", fontSize: 18, fontWeight: 600, textAlign: 'center', }}>Log In</Text>
            </TouchableHighlight>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, width: width * 0.34, marginRight: 6 }} />
            <Text style={{ color: "white", marginRight: 6 }}>Or</Text>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, width: width * 0.35 }} />
          </View>
        </View>

        <View style={{ alignSelf: "center", flex: 0.15, flexDirection: "row", justifyContent: "space-between", gap: width * 0.04, height: height * 0.12, marginTop: 40 }}>
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

        <View style={{ alignItems: 'center', alignSelf: "center", flex: 0.15, marginBottom: 30 }} >
          <Text style={{ color: "white", fontSize: 14, fontWeight: 400, textAlign: 'center', }}>Don't Have An Account?
            <TouchableOpacity onPress={a}><Text style={{ color: "#D7BD1E", fontSize: 14, fontWeight: 400, textAlign: 'center', top: 5 }} > Register </Text></TouchableOpacity> </Text>
        </View>

        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ backgroundColor: '#42C83C', height: '30%', borderRadius: 10, alignItems: 'center', borderBottomEndRadius: 0, borderBottomStartRadius: 0, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 600 }}>Alert</Text>
              </View>

              <View style={{ alignSelf: 'center', justifyContent: 'center', height: '50%', width: '80%' }}>
                <Text style={{ fontSize: 16, fontWeight: 400, color: 'black', textAlign: 'center' }}>{message}</Text>
              </View>

              <TouchableOpacity style={{ backgroundColor: '#42C83C', height: '20%', borderRadius: 10, alignItems: 'center', borderTopEndRadius: 0, borderTopStartRadius: 0, justifyContent: 'center' }} onPress={() => setModalVisible(!modalVisible)} >
                <Text style={styles.textStyle}>Ok</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>
        
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  emailInput: {
    width: width * 0.78,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#888',
    color: "white",
    padding: 10,
    fontSize:16
  },
  name: {
    width: width * 0.78,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    color: "white",
    borderColor: '#888',
    marginTop: 15,
    padding: 10,
    fontSize:16
  },
  button: {
    backgroundColor: '#42C83C',
    borderRadius: 30,
    marginTop: 25,
    padding: 15,
    width: width * 0.78
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    width: '75%',
    height: '25%',
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
    fontSize: 18
  },


});

export default Login;
