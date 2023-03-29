import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import songs from '../../model/data'

export default function Teste({navigation}) {

  /* function countUniqueAges(arr) {
    const uniqueAges = new Set(arr.map(obj => obj.album));
    return uniqueAges.size;
  }
  const a = songs
  const val = countUniqueAges(a) */



  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ListSongs', 1)}>
        <Image source={require('../../assets/artSongs/alok-art.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ListSongs', 2)}>
        <Image source={require('../../assets/artSongs/alok-art.png')}/>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
