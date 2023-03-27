import React, {useState, useEffect}from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Image, Text } from 'react-native';
import songs from '../../../model/data'


export default function ListSongs({ navigation }) {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ListSongs')}>
          <Image source={require('../../../assets/arrow_2.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity>
          <Image source={require('../../../assets/more.png')} style={styles.moreButton} />
        </TouchableOpacity>
      </View>


      <View key={songs.id} style={styles.containerSong}>
        <Image key={songs.id} source={songs.artSongs} style={styles.image} />
        <View style={styles.padding}>
          <Text style={styles.songTitle}>{songs.title}</Text>
          <Text style={styles.artistName}>{songs.artist}</Text>
        </View>
        <View style={styles.heart}>
          <TouchableOpacity >
            <Image source={require('../../../assets/heart_no_filled.png')} style={styles.imageHeart} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.options}>
            <Image source={require('../../../assets/more.png')} style={styles.moreButton} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5255A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
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
  logo: {
    width: 70,
    height: 70,
  },
  containerSong: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20,
    alignItems: 'center',
    alignContent: 'center',
  },
  containerInfos: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  imageHeart: {
    width: 25,
    height: 25,
    borderRadius: 10,
  },
  padding: {
    padding: 10
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 16,
    color: '#CCD1D1',
  },
  heart: {
    flexDirection: 'row',
    paddingLeft: 60
  },
  options: {
    paddingLeft: 10
  }
})
