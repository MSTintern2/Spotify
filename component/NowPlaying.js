import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity, StatusBar,  } from 'react-native';
import React, { useEffect } from 'react';
import Econ from 'react-native-vector-icons/AntDesign';
import Fcon from 'react-native-vector-icons/Feather';
import Acon from 'react-native-vector-icons/FontAwesome';
import TrackPlayer, { Capability, usePlaybackState, useProgress, State, AppKilledPlaybackBehavior, useTrackPlayerEvents,Event } from 'react-native-track-player'
import { useIsFocused } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import './global';

const { width, height } = Dimensions.get('window');


// Status Bar Color Change...
function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

const NowPlaying = ({ route, navigation }) => {


    // ----------------Sound ----------------
    const progress = useProgress();
    const playbackState = usePlaybackState();

    useEffect(() => {
        setupPlayer();
    }, [])

    const setupPlayer = async () => {
        try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.updateOptions({
                android: {
                    // This is the default behavior
                    appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
                },
                // Media controls capabilities
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                    Capability.Stop,
                    
                ],
                // Capabilities that will show up when the notification is in the compact form on Android
                compactCapabilities: [Capability.Play, Capability.Pause,],
            });
            await TrackPlayer.add(Local);
        } catch (e) {
            console.log('Error in setupPlayer function:', e)
        }
    }
    const togglePlayback = async playbackState => {
        if (playbackState == State.Paused || playbackState == State.Ready || playbackState == State.Buffering || playbackState == State.Connecting || playbackState == State.Stopped || playbackState == State.None) {
            await TrackPlayer.play()
        } 
        else  {
            await TrackPlayer.pause()
        }
    }

   
    // Data recevied From openplaylist screen..
    const { sindex, song } = route.params;
    const b = () => {
        navigation.navigate("Playlist")
    }
    //--------------Change the Indexes...----------------s
    const goToNextSong = () => {
        const nextSongIndex = sindex + 1;
        if (nextSongIndex < song.length) {
            // Check if there is a next song in the playlist
            navigation.replace('NowPlaying', { sindex: nextSongIndex, song: song });
        }
    }

    const goToPreviousSong = () => {
        const nextSongIndex = sindex - 1;
        if (nextSongIndex >= 0) {
            // Check if there is a next song in the playlist
            navigation.replace('NowPlaying', { sindex: nextSongIndex, song: song });
        } else {
            // If there is no next song, navigate back to the playlist screen
            navigation.navigate('Playlist');
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#333333" }}>
            <View style={{ flex: 0.1, justifyContent: 'center', flexDirection: "row" }} >
                <TouchableOpacity
                    style={{ borderColor: "grey", width: 30, height: 30, borderRadius: 15, borderWidth: 1, justifyContent: "center", alignItems: "center", right: width * 0.4, marginTop: 30 }} onPress={b} >
                    <Image style={{ width: 17, height: 17, left: 0 }} source={require('../assests/back.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 26, color: 'white', fontWeight: 700, position: 'absolute', marginTop: 24 }}>Now Playing</Text>
            </View>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor="#333333" />
            <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{
                    elevation: 70, shadowColor: 'black',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 2,
                }}
                >
                    <Image style={{ width: width * 0.8, height: height * 0.4, resizeMode: 'cover', borderRadius: 20 }} source={{ uri: song[sindex].image }} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: width * 0.4, marginTop: 20 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 24, color: 'white', fontWeight: '700' }}>{song[sindex].title}</Text>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: '400' }}>Netflix Mahalini</Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Econ name={"heart"} color={"#1ED760"} size={30} />
                    </View>
                </View>
            </View>

            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                <Slider
                    style={{ width: width * 0.9 }}
                    value={progress.position}
                    minimumValue={0}
                    maximumValue={progress.duration}
                    minimumTrackTintColor="#A9A9A9"
                    maximumTrackTintColor="grey"
                    thumbTintColor='#A9A9A9'
                    onValueChange={async value => {
                        await TrackPlayer.seekTo(value)
                    }}
                  
                />

                <View style={{ flexDirection: 'row', color: 'white', justifyContent: 'space-between', gap: width * 0.6, }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>{progress.position}</Text>
                    <Text style={{ color: 'white', fontSize: 12 }}>{progress.duration}</Text>
                </View>

                <View style={{ flexDirection: 'row', color: 'white', justifyContent: 'space-between', gap: width * 0.1, marginTop: 30, }}>

                {sindex >= 1 ? (
                        <TouchableOpacity onPress={goToPreviousSong}>
                            <Acon name="backward" size={22} color="white" />
                        </TouchableOpacity>
                    ) : (
                        <Acon name="backward" size={22} color="gray" />
                    )}
                    <TouchableOpacity onPress={async () => {
                        await TrackPlayer.seekTo(progress.position - 30);
                    }} >
                        <Fcon name={'skip-back'} color={'white'} size={26} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: width * 0.07 }} onPress={async () => {
                        await TrackPlayer.play();
                        togglePlayback(playbackState);
                    }}>
                        <View style={{ width: width * 0.20, height: width * 0.20, backgroundColor: '#1ED760', borderRadius: width * height / 2, alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
                            <Acon name={playbackState == State.Paused || playbackState == State.Ready || playbackState == State.Buffering || playbackState == State.Connecting || playbackState == State.Stopped || playbackState == State.None ? 'play' : 'pause'} color={'white'} size={width * 0.09}  />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={async () => {
                        await TrackPlayer.seekTo(progress.position + 30);

                    }} >
                        <Fcon name={'skip-forward'} color={'white'} size={26} />
                    </TouchableOpacity>


                    {sindex < song.length - 1 ? (
                        <TouchableOpacity onPress={goToNextSong}>
                            <Acon name="forward" size={22} color="white" />
                        </TouchableOpacity>
                    ) : (
                        <Acon name="forward" size={22} color="gray" />
                    )}
                </View>
            </View>

        </SafeAreaView>
    )
}

export default NowPlaying; 