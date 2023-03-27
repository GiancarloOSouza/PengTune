import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import songs from '../../model/data'

export default function Teste() {
  return (
    <View style={styles.container}>
      {songs.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
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
