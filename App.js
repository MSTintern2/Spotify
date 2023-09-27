import React, { useEffect } from 'react';
import { TouchableOpacity,View ,Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetStarted from './component/GetStarted';
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
  const CustomTabButton = (props) => (
    <TouchableOpacity
      {...props}
      style={
        props.accessibilityState.selected
          ? [props.style]
          : props.style
      }>
      {props.accessibilityState.selected && <View>
        <Image style={{height:width*0.012,width:width*0.07}} source={require('./assests/Bottom.png')}/>
        </View>}
      {props.children}
      </TouchableOpacity>
  );
  return (

    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#42C83C',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: { backgroundColor: '#333333', height: height * 0.08, borderTopWidth: 0},

    }}>

      <Tab.Screen options={{
        tabBarLabel: 'Home',
        tabBarLabelStyle: { fontSize: width * 0.03,marginTop:-12},
        tabBarButton:CustomTabButton,
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="home-account" color={focused ? "#42C83C" : "white"} size={width * 0.08} />
        ),
      }}
        name="Home1" component={Home} />

      <Tab.Screen name="Playlist" component={Playlist} options={{
        tabBarLabel: 'Playlist',
        tabBarButton:CustomTabButton,
        tabBarLabelStyle: { fontSize: width * 0.03,marginTop:-12 },
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="playlist-music-outline" color={focused ? "#42C83C" : "white"} size={width * 0.08} />
        ),
      }} />

      <Tab.Screen name="History" component={History} options={{
        tabBarLabel: 'History',
        tabBarButton:CustomTabButton,
        tabBarLabelStyle: { fontSize: width * 0.03,marginTop:-12 },
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="history" color={focused ? "#42C83C" : "white"} size={width * 0.08} />
        ),

      }} />

      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarLabel: 'Profile',
        tabBarButton:CustomTabButton,
        tabBarLabelStyle: { fontSize: width * 0.03,marginTop:-12},
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
    }} 
    >
      <Stack.Screen name="GetStarted" component={GetStarted}  options={{
animationTypeForReplace:'push',
animation:'slide_from_right',
      }} />
      <Stack.Screen name="Signup" component={Signup} options={{
animationTypeForReplace:'push',
animation:'slide_from_right',
      }}  />
      <Stack.Screen name="Login" component={Login} options={{
animationTypeForReplace:'push',
animation:'slide_from_right',
      }} />
      <Stack.Screen name="Register" component={Register} options={{
animationTypeForReplace:'push',
animation:'slide_from_right',
      }} />
      <Stack.Screen name="Home" component={Tabnav}  options={{
animationTypeForReplace:'push',
animation:'slide_from_right',
      }} />
      <Stack.Screen name='Openplaylist' component={Openplaylist}  options={{
animationTypeForReplace:'push',
animation:'slide_from_right',
      }} />
      <Stack.Screen name='NowPlaying' component={NowPlaying}   options={{
animationTypeForReplace:'push',
animation:'slide_from_right',
      }}/>

    </Stack.Navigator>
  )
}

export default App;
