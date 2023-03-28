import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {Library} from "../../Telas/Library/Library";
import { NavigationContainer } from "@react-navigation/native";


const start = { x: '0', y: '0' }
const end = { x: '1', y: '0' }

export default function PlayButton({navigation}) {
    return (
        <NavigationContainer>
        <TouchableOpacity onPress={Library}>
            <LinearGradient colors={['#2E49A6', '#5D359E', '#921F95']} style={styles.gradient}>
                <View style={styles.container} onPress={Library}>
                    <Text style={styles.texto}>        Tocar        </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 43,
        justifyContent: 'center',
        textAlign: 'center'

    },
    gradient: {
        borderRadius: 60,
        height: 50,
        marginTop: 20
    },
    texto: {
        color: '#fff'
    }
});