import { View, Text, Image, FlatList, ScrollView, SafeAreaView, TouchableOpacity, Dimensions, Modal, TextInput } from 'react-native';
import Acon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import React, { useState } from 'react'
import style from '../styles/style';
const { width, height } = Dimensions.get('window');


const Openplaylist = ({ route, navigation }) => {
  //--------------Getting Data from Playlist screen----------------
  const { playlist, index } = route.params;

  //--------------Save in variable for passing to new screen---------
  const Newsong_Array = playlist[index].songs;


  // State for Header of Page.
  const [search, setSearch] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const a = () => {
    setSearch("")
    setIsSearchVisible(true);
  }
  const c = () => {
    setIsSearchVisible(false);
  }

  return (
    <SafeAreaView style={style.container_main}>
      <ScrollView showsVerticalScrollIndicator={false} >

        <View style={{ alignItems: 'center', flex: 0.1, height:height*0.07,justifyContent:'center' }}>

          {isSearchVisible ? (
            <Modal >
              <View style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={style.container1}>
                  <View style={style.searchBar__unclicked}>
                    {/* search Icon */}
                    <Icon
                      name="search"
                      size={22}
                      color="white"
                      style={{ marginLeft: 1 }}
                    />
                    {/* Input field */}
                    <TextInput
                      style={style.input}
                      placeholder="Search"
                      placeholderTextColor={"white"}
                      value={search}
                      onChangeText={(text) => { setSearch(text) }}
                    />
                    <TouchableOpacity onPress={c}>
                      <Entypo
                        name="cross"
                        size={30}
                        color='white'
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          ) : (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
              <TouchableOpacity onPress={a}>
                <Icon name={"search"} color={"white"} size={24} />
              </TouchableOpacity>

              <View style={{ width: '60%', alignItems: 'center' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Text style={{ color: 'white', fontSize: 26, fontWeight: 700 }} >{playlist[index].name}</Text>
                </ScrollView>
              </View>

              <Icon name={"plus"} color={"white"} size={28} />

            </View>
          )}
        </View>

        <View style={{ marginLeft: 10, flex: 0.9, marginTop: 10 }}>

          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={playlist[index].songs}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity onPress={() => { navigation.navigate('NowPlaying', { sindex: index, song: Newsong_Array }) }} style={styles.songItem}>

                    <Image style={styles.img} source={{ uri: item.image }} />
                    <View style={styles.songDetails}>
                      <Text style={styles.songTitle}>{item.title}</Text>
                      <Text style={styles.viewCount}>14k views</Text>
                    </View>
                    <View style={styles.btn}>
                      <Acon name="play" size={20} color='white' />
                    </View>
                  </TouchableOpacity>
                  <View style={{
                    borderBottomColor: '#333333',
                    borderBottomWidth: 1, marginTop: 10
                  }} />
                </View>
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
    width: width,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  songDetails: {
    marginLeft: 30,
    width: '60%'
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
  },
  btn: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * height / 2,
    backgroundColor: '#1ED760',
    justifyContent: 'center',
    alignItems: 'center',
  }
};
export default Openplaylist;