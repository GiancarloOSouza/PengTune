import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FindMusic from "./src/components/FindMusic/index.js";
import ListSongs from "./src/components/ListSongs/index.js";
import Teste from './src/components/teste'
const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer >
      <Stack.Navigator style={styles.container}>
        {/* <Stack.Screen name="Teste" component={Teste} options={{ headerShown: false }} /> */}
        <Stack.Screen name="ListSongs" component={ListSongs} options={{ headerShown: false }} />
        <Stack.Screen name="PlaySongs" component={FindMusic} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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
