import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import bdSongs from '../../../model/data'


export default function MusicPlayerScreen({ navigation , route}) {

  const item  = route.params;

  let chosenSong
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  bdSongs.map((music)=>{
    if(item.id == music.id){
      chosenSong = music
      return chosenSong
    }else{
      return 0
    }
  })

  async function playSound() {

    const { sound } = await Audio.Sound.createAsync(
      chosenSong.url
    );
    setSound(sound);
    setIsPlaying(true);
    await sound.playAsync();
  }

  async function stopSound() {
    setIsPlaying(false);
    await sound.stopAsync();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ListSongs')}>
          <Image source={require('../../../assets/arrow_2.png')} style={styles.backButton}/>
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
          <Image source={item.artSongs} style={styles.albumArt} />
          <View>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.artistName}>Artista - {item.artist}</Text>
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
        {!isPlaying && <TouchableOpacity onPress={playSound} title='Play'>
          <Image source={require('../../../assets/play.png')} style={styles.playButton} />
        </TouchableOpacity>}
        {isPlaying && <TouchableOpacity onPress={stopSound} title='Stop'>
          <Image source={require('../../../assets/pausa.png')} style={styles.backMusicButton} />
        </TouchableOpacity>}
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
    transform: [{ rotate: '180deg' }]
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
  logo: {
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
    transform: [{ rotate: '180deg' }]
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
    transform: [{ rotate: '180deg' }]
  },
  repeatButton: {
    width: 24,
    height: 24,
    margin: 5
  },
});
