import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, TextInput, FlatList, Dimensions, ScrollView, Modal } from 'react-native';
import style from '../styles/style';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';



const { width, height } = Dimensions.get('window');

const Home = () => {
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

      <View style={{ alignItems: 'center', flex: 0.1 }}>

        {isSearchVisible ? (
          <Modal >
            <View style={{flex:1,backgroundColor:'black'}}>
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
                  onChangeText={(text) => {setSearch(text) }}
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
          <View style={{ flexDirection: "row", alignItems: "center", gap: 65 }}>
            <TouchableOpacity onPress={a}>
              <Icon name={"search"} color={"white"} size={24} />
            </TouchableOpacity>
            <Image style={{ width: 134, height: 40 }} source={require('../assests/LOGO.png')} />
            <Icon name={"settings"} color={"white"} size={24} />
          </View>
        )}

      </View>

      <View style={{ flex: 0.24}}>
        <FlatList
          data={[{ id: 1, first_name: "Popular", Title: "Sisa Rassan", image: "../assests/slider.png" },
          { id: 2, first_name: "Semi-Popular", Title: "Green Base", image: "assests\slider.png" },
          { id: 3, first_name: 'Rapster', Title: "Secrets Tribe", image: "assests\slider.png" }]}

          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => {
            return (
              <View style={{
                width: width,
                height: height / 4.6,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",

              }}>

                <TouchableOpacity disabled={true} style={style.homef} />
                
                <View style={{ flexDirection: "column" ,width:width*0.8 }}>
                  <Text style={{ fontSize: height * 0.023, color: "white", paddingBottom: 5,  }}>{item.first_name}</Text>
                  <Text style={{ fontSize: height * 0.033, fontWeight: 600, color: "white",}}>{item.Title}</Text>
                </View>
              <View style={{bottom: 8,position:'absolute',left:width*0.54}}>
                <Image source={require('../assests/slider.png')}  style={{borderBottomRightRadius:20 ,height: height * 0.22,}}/>
                </View>
              </View>)
          }} />
      </View>

      <View style={{ flex: 0.3, paddingLeft: 15 }}>
        <Text style={{ fontSize: height * 0.03, fontWeight: 600, color: "white", textAlign: "left", }}>Today's hits</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 1, 1, 1]}
          renderItem={() => {
            return (
              <View style={{ marginTop: height * 0.01 }} >
                <View>
                  <Image style={[style.grid, { width: width * 0.3, height: height * 0.15 }]} source={require("../assests/Tiara.png")} />
                  <Text style={{ color: "white", fontSize: 14, marginTop: 10 }}>Tiara Adani</Text>
                </View>
                <Text style={{ color: "#888", fontSize: 12, marginTop: 1 }}>Lrti Untuk Yen</Text>
              </View>

            )
          }} />
      </View>

      <View style={{ flex: 0.36 }}>
        <TabNavigator />
      </View>

    </SafeAreaView>
  );
}


const TabNavigator = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  const renderTabs = () => {
    const tabs = ['Albums', 'Artists', 'PodCast', 'Generic', 'Rappers'];

    return tabs.map((tab, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.tab, activeTab === index && styles.activeTab]}
        onPress={() => handleTabPress(index)}
      >
        <Text style={styles.tabText}>{tab}</Text>
      </TouchableOpacity>
    ));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <ChatsTab />;
      case 1:
        return <StatusTab />;
      case 2:
        return <CallsTab />;
      case 3:
        return <ContactsTab />;
      case 4:
        return <SettingsTab />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tabBar}>
            {renderTabs()}
          </View>
        </ScrollView>
      </View>
      <View style={styles.content}>
        {renderTabContent()}
      </View>
    </View>
  );
};

const ChatsTab = () => {
  const playlistData = [
    { id: 1, title: 'Song 1', views: '34' },
    { id: 2, title: 'Song 2', views: '34' },
    { id: 3, title: 'Song 3', views: '34' },
    { id: 4, title: 'Song 4', views: '34' },
  ];

  const renderSongItem = ({ item }) => (
    <View style={styles.songItem}>
      <Image style={styles.img} source={require('../assests/Song.png')} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.viewCount}>{item.views} views</Text>
      </View>
    </View>
  );

  return (

    <View >
      <FlatList
        data={playlistData}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>

  );
};

const StatusTab = () => {
  const playlistData = [
    { id: 1, title: 'Adele', views: '54' },
    { id: 2, title: 'Artist 2', views: '94' },
    { id: 3, title: 'Google Play Artists', views: '104' },
    { id: 4, title: 'Sam Fronk', views: '11.8k' },
  ];

  const renderSongItem = ({ item }) => (
    <View style={styles.songItem}>
      <Image style={styles.img} source={require('../assests/Song.png')} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.viewCount}>{item.views} views</Text>
      </View>
    </View>
  );

  return (
    <View >
      <FlatList
        data={playlistData}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const CallsTab = () => {
  const playlistData = [
    { id: 1, title: 'Night Mare', views: '34' },
    { id: 2, title: 'Song 2', views: '34' },
    { id: 3, title: 'Song 3', views: '34' },
    { id: 4, title: 'Song 4', views: '34' },
  ];

  const renderSongItem = ({ item }) => (
    <View style={styles.songItem}>
      <Image style={styles.img} source={require('../assests/Song.png')} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.viewCount}>{item.views} views</Text>
      </View>
    </View>
  );

  return (
    <View >
      <FlatList
        data={playlistData}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const ContactsTab = () => {
  const playlistData = [
    { id: 1, title: 'Pod Casting After', views: '34' },
    { id: 2, title: 'Song 2', views: '34' },
    { id: 3, title: 'Song 3', views: '34' },
    { id: 4, title: 'Song 4', views: '34' },
  ];

  const renderSongItem = ({ item }) => (
    <View style={styles.songItem}>
      <Image style={styles.img} source={require('../assests/Song.png')} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.viewCount}>{item.views} views</Text>
      </View>
    </View>
  );

  return (
    <View >
      <FlatList
        data={playlistData}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>

  );
};

const SettingsTab = () => {
  const playlistData = [
    { id: 1, title: 'Rappers', views: '34' },
    { id: 2, title: 'Rappers 2', views: '34' },
    { id: 3, title: 'Rappersklmnk m', views: '34' },
    { id: 4, title: 'Sidhu ', views: '34.9M' },
  ];

  const renderSongItem = ({ item }) => (
    <View style={styles.songItem}>
      <Image style={styles.img} source={require('../assests/Song.png')} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.viewCount}>{item.views} views</Text>
      </View>
    </View>
  );

  return (
    <View >
      <FlatList
        data={playlistData}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};



const styles = {
  container: {
    flex: 1,
  },
  tabBar: {
    marginTop: height * 0.01,
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  activeTab: {
    marginLeft: 12,
    borderBottomWidth: 3,
    borderBottomColor: '#42C83C',
  },
  tabText: {
    paddingLeft: width * 0.05,
    paddingRight: 15,
    color: '#fff',
    fontSize: height * 0.027,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  songItem: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 10,
  },
  songDetails: {
    marginTop: 20,
    marginLeft: 30,

  },
  songTitle: {
    fontSize: height * 0.022,
    fontWeight: 'bold',
    color: "white"
  },
  viewCount: {
    fontSize: height * 0.018,
    color: '#888',
  },
  img: {
    width: 80,
    height: 80,
  },
}
export default Home;