import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import songs from '../../../model/data.js'

const setupPlayer = async () => {
  // Set up the player
  await TrackPlayer.setupPlayer();

  // Add a track to the queue
  await TrackPlayer.add(songs);

  // Start playing it
  await TrackPlayer.play();
}

const togglePlayBack = async(playbackState) => {
  const currentTrack = await TrackPlayer.getActiveTrackIndex()();
  if(currentTrack != null ){
    if(playbackState == State.Paused){
      await TrackPlayer.play()
    } else{
      await TrackPlayer.pause()
    }
  }
}

export default function MusicPlayerScreen({ navigation }) {
  const playbackState = usePlaybackState()

  useEffect(()=>{
    setupPlayer()
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/arrow_2.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity>
          <Image source={require('../../../assets/more.png')} style={styles.moreButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.albumArtContainer}>


        <LinearGradient
          colors={['#1f203f', '#3e407e']}
          locations={[0.2, 0.9]}
          style={styles.albumArtContainer}>
          <Image source={require('../../../assets/artSongs/alok-art.png')} style={styles.albumArt} />
          <View style={styles.songInfo}>
            <Text style={styles.songTitle}>Deep Down</Text>
            <Text style={styles.artistName}>Artista - Alok</Text>
          </View>

        </LinearGradient>

      </View>

      <View style={styles.controls}>
        <TouchableOpacity>
          <Image source={require('../../../assets/shuffle.png')} style={styles.shuffleButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/twice-back.png')} style={styles.twiceBackButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/previous.png')} style={styles.previousButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>togglePlayBack(playbackState)}>
          <Image source={require('../../../assets/play.png')} style={styles.playButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/next.png')} style={styles.backMusicButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/twice-back.png')} style={styles.twice2BackButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/repeat.png')} style={styles.repeatButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5255A8',
    width: 390,

  },
  card: {

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 48,
  },
  backButton: {
    width: 24,
    height: 24,
    transform: [{ rotate: '180deg'}]
  },
  moreButton: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  albumArtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 350,
    margin: 60,
    borderRadius: 20,
  },
  albumArt: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 20,
  },
  logo:{
    width: 70,
    height: 70,
  },
  songInfo: {
    flex: 1,
    alignItems: 'center',
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 18,
    color: '#CCD1D1',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 140,
  },
  shuffleButton: {
    width: 24,
    height: 24,
    margin: 5
  },
  previousButton: {
    width: 24,
    height: 24,
    margin: 5
  },
  twiceBackButton: {
    width: 24,
    height: 24,
    margin: 5
  },
  twice2BackButton: {
    width: 24,
    height: 24,
    margin: 5,
    transform: [{ rotate: '180deg'}]
  },
  playButton: {
    width: 24,
    height: 24,
    margin: 5
  },
  nextMusicButton: {
    width: 24,
    height: 24,
    margin: 5
  },
  backMusicButton: {
    width: 24,
    height: 24,
    margin: 5,
    transform: [{ rotate: '180deg'}]
  },
  repeatButton: {
    width: 24,
    height: 24,
    margin: 5
  },
});
