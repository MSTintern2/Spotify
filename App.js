import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetStarted from './component/GetStarted';
import Continue from './component/Continue';
import Signup from './component/signup';
import Login from './component/login';
import Register from './component/register';
import Home from './component/home';
import Playlist from './component/playlist';
import Profile from './component/Profile';
import History from './component/History';
import NowPlaying from './component/NowPlaying';
import Openplaylist from './component/Openplaylist';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Acon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const { height, width } = Dimensions.get('window');

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (

    <NavigationContainer>
      <StatusBar barStyle="white" backgroundColor="black" />
      <StackNav />
    </NavigationContainer>

  )
}
const Tabnav = () => {
  return (


    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#42C83C',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: { backgroundColor: '#333333', height: height * 0.07,borderTopWidth: 0 },
      
    }}>

      <Tab.Screen options={{
        tabBarLabel:'Home',
        tabBarLabelStyle:{fontSize:width * 0.03},
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="home-account" color={focused ? "#42C83C" : "white"} size={width * 0.08} />
        ),
      }}
        name="Home1" component={Home}   />

      <Tab.Screen name="Playlist" component={Playlist} options={{
        tabBarLabel:'Playlist',
        tabBarLabelStyle:{fontSize:width * 0.03},
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="playlist-music-outline" color={focused ? "#42C83C" : "white"} size={width * 0.08} />
        ),
      }} />

      <Tab.Screen name="History" component={History} options={{
         tabBarLabel:'History',
         tabBarLabelStyle:{fontSize:width * 0.03},
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="history" color={focused ? "#42C83C" : "white"} size={width * 0.08} />
        ),

      }} />

      <Tab.Screen name="Profile" component={Profile} options={{
         tabBarLabel:'Profile',
         tabBarLabelStyle:{fontSize:width * 0.03},
        tabBarIcon: ({ focused }) => (
          <Acon name="user" color={focused ? "#42C83C" : "white"} size={width * 0.08} />
        ),
      }}
      />



    </Tab.Navigator>

  )
}

const StackNav = () => {
  return (

    <Stack.Navigator screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'white',
    }} >

      
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Continue" component={Continue} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Tabnav} />
      <Stack.Screen name='Openplaylist' component={Openplaylist} />
      <Stack.Screen name='NowPlaying' component={NowPlaying} />

    </Stack.Navigator>
  )
}

export default App;
