import { View, Text,Image,FlatList,ScrollView,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../styles/style';

const Openplaylist = ({route,navigation}) => {
//--------------Getting Data from Playlist screen----------------
    const {playlist,index} = route.params;
console.log("Playlist index: ",index)
//--------------Save in variable for passing to new screen---------
   const Newsong_Array = playlist[index].songs;

  return (
    <SafeAreaView style={style.container_main}>
       <ScrollView showsVerticalScrollIndicator={false} >
    <View style={{  marginLeft: 10, marginRight: 10, marginTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 600, color: "white" }}>{playlist[index].name}</Text>
                <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={playlist[index].songs}
            renderItem={({ item,index}) => {
              return (
                <TouchableOpacity onPress={() => { navigation.navigate('NowPlaying',{sindex:index, song:Newsong_Array})}} style={styles.songItem}>

                    <Image style={styles.img} source={{uri: item.image}}/>
                  <View style={styles.songDetails}>
                  <Text style={styles.songTitle}>{item.title}</Text>
                  <Text style={styles.viewCount}>14k views</Text>
                </View>
                </TouchableOpacity>
              )
            }} 
            />
            </View>
            </ScrollView>
            </SafeAreaView>
  )
}

const styles = {
    songItem: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,

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
export default Openplaylist;