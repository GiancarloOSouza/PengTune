import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Image, Text } from 'react-native';
import songs from '../../../model/data'

export default function ListSongs({ navigation, route}) {

  const album = route.params;
  const [music, setMusic] = useState([])


  /*   const [idSongs, setIdSongs] = useState()
    const [allSongs, setAllSongs] = useState()
   
    setAllSongs(songs)
    console.log(allSongs)
  */


  function liked(id) {
    const newSong = music.map((song) => {
      if (song.id == id) {
        return { ...song, liked: true }
      } else {
        return song
      }

    })
    setMusic(newSong)
  }

  function dislike(id) {
    const newSong = music.map((song) => {
      if (song.id == id) {
        return { ...song, liked: true }
      } else {
        return song
      }

    })
    setMusic(newSong)
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Library')}>
          <Image source={require('../../../assets/arrow_2.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity>
          <Image source={require('../../../assets/more.png')} style={styles.moreButton} />
        </TouchableOpacity>
      </View>

      {songs.map((songs) => {
        if (songs.album == album) {
          return (
            <View key={songs.id} style={styles.containerSong}>
              <TouchableOpacity style={styles.containerSong2} onPress={() => navigation.navigate('PlaySongs', songs)}>
                <Image key={songs.id} source={songs.artSongs} style={styles.image} />
                <View style={styles.padding}>
                  <Text style={styles.songTitle}>{songs.title}</Text>
                  <Text style={styles.artistName}>{songs.artist}</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.heart}>
                {!songs.liked ? <TouchableOpacity>
                  <Image source={require('../../../assets/heart_no_filled.png')} style={styles.imageHeart} />
                </TouchableOpacity> :
                  <TouchableOpacity>
                    <Image source={require('../../../assets/heart_filled.png')} style={styles.imageHeart} />
                  </TouchableOpacity>}
                <TouchableOpacity style={styles.options}>
                  <Image source={require('../../../assets/more.png')} style={styles.moreButton} />
                </TouchableOpacity>
              </View>
            </View>
          )
        }

      })}

      {/* {music.map((songs) => {


        if (songs.liked == true) {
          return (
            <View key={songs.id} style={styles.containerSong}>
              <TouchableOpacity style={styles.containerSong2} onPress={() => navigation.navigate('PlaySongs', songs)}>
                <Image key={songs.id} source={songs.artSongs} style={styles.image} />
                <View style={styles.padding}>
                  <Text style={styles.songTitle}>{songs.title}</Text>
                  <Text style={styles.artistName}>{songs.artist}</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.heart}>
                <TouchableOpacity>
                  <Image key={songs.id} source={require('../../../assets/heart_filled.png')} style={styles.imageHeart} onPress={dislike(songs.id)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.options}>
                  <Image source={require('../../../assets/more.png')} style={styles.moreButton} />
                </TouchableOpacity>
              </View>
            </View>
          )
        } else {
          return (
            <View key={songs.id} style={styles.containerSong}>

              <TouchableOpacity style={styles.containerSong2} onPress={() => navigation.navigate('PlaySongs', songs)} >
                <Image key={songs.id} source={songs.artSongs} style={styles.image} />
                <View style={styles.padding}>
                  <Text style={styles.songTitle}>{songs.title}</Text>
                  <Text style={styles.artistName}>{songs.artist}</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.heart}>
                <TouchableOpacity>
                  <Image key={songs.id} source={require('../../../assets/heart_no_filled.png')} style={styles.imageHeart} onPress={liked(songs.id)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.options}>
                  <Image source={require('../../../assets/more.png')} style={styles.moreButton} />
                </TouchableOpacity>
              </View>

            </View>
          )

        }

      })} */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5255A8',

  },
  container2: {
    flex: 2,

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
  containerSong2: {
    flexDirection: 'row',
    flex: 2,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 14,
    color: '#CCD1D1',
  },
  heart: {
    flexDirection: 'row',
    paddingRight: 10,
  },
  options: {
    paddingLeft: 10
  }
})
