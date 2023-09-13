import React,{useState,useEffect} from 'react';
import { View, Text, SafeAreaView, Dimensions, StatusBar, Image, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import style from '../styles/style';
import Acon from 'react-native-vector-icons/Entypo';
import Econ from 'react-native-vector-icons/AntDesign';
import Mcon from 'react-native-vector-icons/Ionicons';
import './global';
const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';



function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

const renderSongItem = ({ item }) => (
    <View style={styles.songItem}>
        <Image style={styles.img} source={item.imagePath} />
        <View style={styles.songDetails}>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.viewCount}>{item.views} views</Text>
        </View>
    </View>
)

const Profile =() => {
    
    //-----------------fetching data from the asynchorous storage---------------------//
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const [data, setData] = useState({
       follower:'',
       following:''
    })
  
    useEffect(() => {
      const fetchUserData = async () => {
        const storedName = await AsyncStorage.getItem('name');
        const storedEmail = await AsyncStorage.getItem('email');
        const storedfolower = await AsyncStorage.getItem('Follower');
        const storedfolowing = await AsyncStorage.getItem('Following');

        setData(prevData => ({...prevData,
            follower: storedfolower,
            following: storedfolowing
          }));
        setName(storedName);
        setEmail(storedEmail);
      };
  
      fetchUserData();
    }, []);

    return (
        <SafeAreaView style={style.container_main}>

            <View style={{ justifyContent: 'center', flexDirection: "row", flex: 0.1, backgroundColor: '#333333' }} >

                <Text style={{ color: 'white', fontSize: 26, fontWeight: 700, position: 'absolute' }} >Profile</Text>
                <View style={{ left: width * 0.42, marginTop: 6 }}>
                    <Acon name={"dots-three-horizontal"} color={"white"} size={30} />
                </View>
            </View>

            <FocusAwareStatusBar barStyle="light-content" backgroundColor="#333333" />

            <View style={{ flex: 0.44, backgroundColor: '#333333', borderBottomRightRadius: 60, borderBottomLeftRadius: 60, width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', height: height * 0.25, }} >
                    <Image style={{ width: width * 0.4, height: width * 0.4, resizeMode: 'cover', borderRadius: width * height/2 }} source={require('../assests/Profile.jpg')} />
                </View>
                <Text style={{ fontSize: 20, fontWeight: 600, color: "white", }}>{name}</Text>
                <Text style={{ fontSize: 14, fontWeight: 400, color: "white", marginBottom: 30 }}>{email}</Text>
                <View style={{ flexDirection: "row", gap: 100, height: height * 0.13, }}>

                    <View style={{ flexDirection: "column", alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: "white", }}>Followers</Text>
                        <Text style={{ fontSize: 20, fontWeight: 600, color: "white", }}>{data.follower}</Text>
                    </View>
                    <View style={{ flexDirection: "column", alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: 400, color: "white", }}>Following</Text>
                        <Text style={{ fontSize: 20, fontWeight: 600, color: "white", }}>{data.following}</Text>
                    </View>

                </View>
            </View>


            <View style={{ flex: 0.13, flexDirection: "row", gap:width*0.3, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: "column", alignItems: 'center' }}>
                    <Econ name='adduser' color={'white'} size={width*0.08} />
                    <Text style={{ fontSize: 16, fontWeight: 600, color: "white", marginTop: 7 }}>Add Friends</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: 'center' }}>
                    <Mcon name='share-outline' color={'white'} size={width*0.08} />
                    <Text style={{ fontSize: 16, fontWeight: 600, color: "white", marginTop: 7 }}>Share</Text>
                </View>

            </View>

            <View style={{ flex: 0.33, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 600, color: "white" }}>Mostly Played</Text>
                <FlatList
                    data={Mostly}
                    renderItem={renderSongItem}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = {
    songItem: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,

    },
    songDetails: {
        marginTop: 10,
        marginLeft: 30,
    },
    songTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: "white"
    },
    viewCount: {
        fontSize: 16,
        color: '#888',
    },
    img: {
        width: 64,
        height: 64,
        borderRadius: 20
    }
};
export default Profile;