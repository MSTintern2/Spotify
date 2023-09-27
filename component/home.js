import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, TextInput, FlatList, Dimensions, ScrollView, Modal, BackHandler, Alert, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from '../styles/style';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import "./global";




const { width, height } = Dimensions.get('window');

const Home = () => {
  const [search, setSearch] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  //-----------------------------OnPress Exit the app.--------------------
  // useEffect(()=> {
  //   const backAction = () =>{
  //     Alert.alert('Exist App!', "Are you sure you want to go back?",[
  //       {
  //         text:'Cancel',
  //         onPress:()=>null,
  //         style: 'cancel'
  //       },
  //       {text:'Yes', 
  //       onPress:()=> BackHandler.exitApp()
  //    }
  //     ]);
  //     return true;
  //   }
  //   const backHandler= BackHandler.addEventListener(
  //     "hardwareBackPress",backAction
  //   )
  //   return ()=> backHandler.remove();
  // },[])

  //-----------------------Navigation---------------------------
  const a = () => {
    setSearch("")
    setIsSearchVisible(true);
  }
  const c = () => {
    setIsSearchVisible(false);
  }

  // -----------------Go to next slide---------------------

  const flatlistRef = useRef(null);

  const [slide, setSlide] = useState(1);

  const onPrevious = () => {
    if (slide === 1) {
      return;
    } else {
      if (flatlistRef.current) {
        flatlistRef.current.scrollToIndex({ index: slide - 2 });
      }
      setSlide(slide - 1); // Update the slide state
    }
  };
  const onNext = () => {
    if (slide === Slider_Data.length) {
      return;
    } else {
      if (flatlistRef.current) {
        flatlistRef.current.scrollToIndex({ index: slide });
      }
      setSlide(slide + 1); 
    }
  };
  
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
          </Modal>
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 65, }}>
            <TouchableOpacity onPress={a}>
              <Icon name={"search"} color={"white"} size={24} />
            </TouchableOpacity>
            <Image style={{ width: 134, height: 40 }} source={require('../assests/LOGO.png')} />
            <Icon name={"settings"} color={"white"} size={24} />
          </View>
        )}

      </View>

      <View style={{ flex: 0.26 }}>

        <FlatList
          ref={flatlistRef}
          data={Slider_Data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={Slider_Data => {
            const offset = Slider_Data.nativeEvent.contentOffset.x / width;
            const hasDecimal = offset - Math.floor(offset) !== 1;
            if (!hasDecimal) {
              const newSlide = offset + 1;
              if (newSlide >= 1 || newSlide <= Slider_Data.length)
                setSlide(newSlide)
            }
          }}
          scrollEventThrottle={0}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{
                width: width,
                height: height / 5,
                justifyContent: "center",
                alignItems: "flex-end",
                display: "flex",
                flexDirection: "row",
              }}>
                <TouchableOpacity disabled={true} style={style.homef} />
                <TouchableOpacity style={{ height: height * 0.1, marginRight: 8 }} onPress={onPrevious}>
                  <Icon name={"chevron-left"} color={"rgba(255, 255, 255, 0.4)"} size={28} />
                </TouchableOpacity>
                <View style={{ flexDirection: "column", width: width * 0.7, alignItems: 'flex-start', height: height / 6, justifyContent: 'center' }}>
                  <Text style={{ fontSize: height * 0.02, color: "white", paddingBottom: 5 }}>{item.first_name}</Text>
                  <Text style={{ fontSize: height * 0.033, fontWeight: 600, color: "white", paddingBottom: 5 }}>{item.Title}</Text>
                  <Text style={{ fontSize: height * 0.025, color: "white", fontWeight: 500, }}>{item.sub}</Text>
                </View>
                <View style={{ position: 'absolute', left: width * 0.52 }}>
                  <Image source={require('../assests/slider.png')} style={{ width: width * 0.4, height: height * 0.2 }} />
                </View>
                <TouchableOpacity style={{ height: height * 0.1 }} onPress={onNext} >
                  <Icon name={"chevron-right"} color={"rgba(255, 255, 255, 0.4)"} size={28} />
                </TouchableOpacity>
              </View>)
          }}
        />
      </View>

      <View style={{ flex: 0.31, paddingLeft: 15 }}>
        <Text style={{ fontSize: height * 0.03, fontWeight: 600, color: "white", textAlign: "left", }}>Today's hits</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={TodayHits}
          renderItem={({item}) => {
            return (
              <View style={{ marginTop: height * 0.01 }} >
                <View >
                  <Image style={[style.grid, { width: width * 0.3, height: height * 0.15, }]} source={item.image} />
                  <TouchableOpacity style={{ width: width * 0.05, height: width * 0.05, backgroundColor: '#818181', borderRadius: width * height, position: 'absolute', transform: [{ translateY: height * 0.118 }, { translateX: width * 0.236 }], justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 7.73, height: 8.15 }} source={require("../assests/Vector.png")} />
                  </TouchableOpacity>
                </View>

                <View style={{ width: width * 0.27, marginLeft: 5 }}>
                  <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <View>
                      <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>{item.heading}</Text>
                      <Text style={{ color: "#888", fontSize: 11, }}>{item.subtitle}</Text>
                    </View>
                  </ScrollView>
                </View>

              </View>

            )
          }} />
      </View>

      <View style={{ flex: 0.33 }}>
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
        style={styles.tab}
        onPress={() => handleTabPress(index)}
      >
        {activeTab === index && <Image style={{ height: width * 0.012, width: width * 0.07 }} source={require('../assests/Bottom.png')} />}
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

      <View style={{ marginTop: 5 }}>
        <LinearGradient colors={['rgba(51, 51, 51, 0.5)', 'rgba(217, 217, 217, 0)']} style={{ width: width, height: height * 0.019, alignItems: 'center' }} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} />
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
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={"chevron-right"} color={"white"} size={26} />
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
    { id: 1, title: 'Adele Panther', views: '54' },
    { id: 2, title: 'Artist Paradise', views: '94' },
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
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={"chevron-right"} color={"white"} size={26} />
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
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={"chevron-right"} color={"white"} size={26} />
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
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={"chevron-right"} color={"white"} size={26} />
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
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={"chevron-right"} color={"white"} size={26} />
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
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
  },
  tabText: {
    paddingLeft: width * 0.05,
    paddingRight: 15,
    color: '#fff',
    fontSize: height * 0.025,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  songItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  songDetails: {
    marginLeft: 25,
    width: '58%',
  },
  songTitle: {
    fontSize: height * 0.020,
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