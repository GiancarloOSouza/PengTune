import React from 'react';
import { StyleSheet, View} from 'react-native';

import FindMusic from "./src/components/FindMusic/index.js";

export default function App() {
  return (
    <View style={styles.container}>
      <FindMusic/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
