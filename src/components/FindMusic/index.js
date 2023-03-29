import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import bdSongs from '../../../model/data'


export default function MusicPlayerScreen({ navigation, route}) {

  const item = route.params;

  const [soundObject, setSoundObject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(null);

  let chosenSong
  let otherSong

  console.log('Começa aqui')

  bdSongs.map((music) => {
    if (item.id == music.id) {
      chosenSong = music
      return chosenSong
    } else {
      otherSong = music
      return otherSong
    }
  })



  useEffect(() => {
    async function loadAudio() {
      const { sound } = await Audio.Sound.createAsync(
        chosenSong.url
      );
      setSoundObject(sound);
    }
    loadAudio();
  }, []);

  async function playPauseSound() {
    try {
      if (!isPlaying) {
        await soundObject.playAsync();
        setIsPlaying(true);
      } else {
        await soundObject.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    playPauseSound()
  },[soundObject])


  


  useEffect(() => {
    async function updatePosition() {
      const { positionMillis, durationMillis } = await soundObject.getStatusAsync();
      setPosition(positionMillis);
      setDuration(durationMillis);
    }
    const intervalId = setInterval(updatePosition, 1000);
    return () => clearInterval(intervalId);
  }, [soundObject]);

  /*   async function playPauseSound() {
      try {
        if(!isPlaying){
          await soundObject.playAsync();
          setIsPlaying(true);
        } else {
          await soundObject.pauseAsync();
          setIsPlaying(false);
        }
        
      } catch (error) {
        console.log(error);
      }
    } */

  async function pauseSound() {
    try {
      await soundObject.pauseAsync();
      setIsPlaying(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function seekAudio(value) {
    try {
      await soundObject.setPositionAsync(value);
      setPosition(value);
    } catch (error) {
      console.log(error);
    }
  }

  /*   if (!soundObject) {
      return null;
    }
   */
  const progressBarWidth = `${(position / duration) * 100}%`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ListSongs', chosenSong.album)}>
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
          <Image source={require('../../../assets/previous.png')} style={styles.previousButton} />
        </TouchableOpacity>
        {!isPlaying ? (<TouchableOpacity onPress={playPauseSound} title='Play'>
          <Image source={require('../../../assets/play.png')} style={styles.playButton} />
        </TouchableOpacity>) :
          (<TouchableOpacity onPress={playPauseSound} title='Stop'>
            <Image source={require('../../../assets/pausa.png')} style={styles.backMusicButton} />
          </TouchableOpacity>)}
        <TouchableOpacity>
          <Image source={require('../../../assets/next.png')} style={styles.backMusicButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/repeat.png')} style={styles.repeatButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.progressBarCenter}>
        <View style={styles.progressBar}>
          <View style={[styles.progressBarValue, { width: progressBarWidth }]} />
          <TouchableOpacity
            style={[styles.progressBarThumb, { left: progressBarWidth }]}
            onPress={(e) => {
              const position = e.nativeEvent.locationX;
              const newPosition = (position / 200) * duration;
              seekAudio(newPosition);
            }}
          />
        </View>
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
  progressBar: {
    backgroundColor: 'white',
    width: '80%',
    height: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarValue: {
    height: 5,
    backgroundColor: '#8D8EB4',
  },
  progressBarCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  }
});
