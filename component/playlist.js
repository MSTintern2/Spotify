import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, TextInput, FlatList, Dimensions, Modal, } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import style from '../styles/style';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const Playlist = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const a = () => {
    setSearch("")
    setIsSearchVisible(true);
  }
  const c = () => {
    setIsSearchVisible(false);
  }

  // Fetching API data:
  const [laylist, setlaylist] = useState({})

  useEffect(() => {
    fetch("https://pkdservers.com/Sharing/Uploads/hamza.json")
      .then(response => response.json())
      .then(result => {
        setlaylist(result);
      })
      .catch(error => console.log('error', error));
  }, []);

  const setAsync = async () => {
    await AsyncStorage.setItem('Follower', laylist.followers)
    await AsyncStorage.setItem('Following', laylist.following)
  }

  return (
    <SafeAreaView style={style.container_main}>

      <View style={{ alignItems: 'center', flex: 0.1, justifyContent: 'center' }}>

        {isSearchVisible ? (
          <Modal >
            <View style={{ flex: 1, backgroundColor: 'black' }}>
              <View style={style.searchBar__unclicked}>
                {/* search Icon */}
                <Icon
                  name="search"
                  size={22}
                  color="white"
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


              <View style={{ flex: 0.9, marginLeft: 15, marginRight: 15 }}>
                <FlatList
                  data={laylist.playlists.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))}
                  numColumns={2}
                  renderItem={({ item, index }) => {
                    return (
                      <View style={{ margin: width * 0.02 }}>

                        <TouchableOpacity onPress={() => {
                          navigation.navigate('Openplaylist', { playlist: laylist.playlists, index: index })
                          setAsync();
                        }} style={{
                          flexDirection: 'column'
                        }}>
                          <View style={[style.grid, {
                            width: width * 0.4, height: height * 0.2, backgroundColor: 'lightgrey', shadowColor: 'white',
                            shadowOffset: {
                              width: 0,
                              height: 1,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 0,
                            elevation: 10,
                          }]}>
                            <Image style={[style.grid, { width: width * 0.4, height: height * 0.2 }]} source={{ uri: item.image }} />
                          </View>
                        </TouchableOpacity>

                        <Text style={{ color: "white", fontSize: 14, marginTop: 9 }}>
                          {item.name}
                        </Text>
                        <Text style={{ color: "#888", fontSize: 12 }}>{item.songs.length} Songs</Text>
                      </View>
                    )
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />

              </View>
            </View>
          </Modal>
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 80 }}>
            <TouchableOpacity onPress={a}>
              <Icon name={"search"} color={"white"} size={24} />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 26, fontWeight: 700 }} >Playlist</Text>
            <Icon name={"plus"} color={"white"} size={28} />
          </View>
        )}
      </View>

      <View style={{ marginTop: 5 }}>
        <LinearGradient colors={['rgba(51, 51, 51, 0.5)', 'rgba(217, 217, 217, 0)']} style={{ width: width, height: height * 0.019, alignItems: 'center' }} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
      </View>

      <View style={{ flex: 0.9, marginLeft: 15, marginRight: 15 }}>

        <FlatList
          data={laylist.playlists}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <View style={{ margin: width * 0.02 }}>

                <TouchableOpacity onPress={() => {
                  navigation.navigate('Openplaylist', { playlist: laylist.playlists, index: index })
                  setAsync();
                }} style={{
                  flexDirection: 'column'
                }}>
                  <View style={[style.grid, {
                    width: width * 0.4, height: height * 0.2, backgroundColor: 'lightgrey', shadowColor: 'white',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 0,
                    elevation: 10,
                  }]}>
                    <Image style={[style.grid, { width: width * 0.4, height: height * 0.2 }]} source={{ uri: item.image }} />
                  </View>
                </TouchableOpacity>

                <Text style={{ color: "white", fontSize: 14, marginTop: 9 }}>
                  {item.name}
                </Text>
                <Text style={{ color: "#888", fontSize: 12 }}>{item.songs.length} Songs</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />


      </View>


    </SafeAreaView>
  )

}
export default Playlist;