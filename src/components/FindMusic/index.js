import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function MusicPlayerScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/back.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.title}>Now Playing</Text>
        <TouchableOpacity>
          <Image source={require('../../../assets/more.png')} style={styles.moreButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.albumArtContainer}>
      <LinearGradient
        colors={['#09001F', '#767676']}
        style={styles.albumArtContainer}/>
        {/*         <Image source={require('../../../assets/alok-art.png')} style={styles.albumArt} />
        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>Deep Down</Text>
          <Text style={styles.artistName}>Alok</Text>
        </View> */}
      </View>

      <View style={styles.controls}>
        <TouchableOpacity>
          <Image source={require('../../../assets/shuffle.png')} style={styles.shuffleButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/previous.png')} style={styles.previousButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/play.png')} style={styles.playButton} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../../assets/next.png')} style={styles.nextButton} />
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
    margin: 20
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
    color: '#888',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
  },
  shuffleButton: {
    width: 24,
    height: 24,
    margin: 10
  },
  previousButton: {
    width: 24,
    height: 24,
    margin: 10
  },
  playButton: {
    width: 24,
    height: 24,
    margin: 10
  },
  nextButton: {
    width: 24,
    height: 24,
    margin: 10
  },
  repeatButton: {
    width: 24,
    height: 24,
    margin: 10
  },
});
