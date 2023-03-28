import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import PlayButton from '../../components/PlayButton/PlayButton.js'
import {Library} from "../Library/Library.js";
import { NavigationContainer } from "@react-navigation/native";

export default function HomePage() {
    return (
        <View style={styles.container} >
            <StatusBar />
            <Image source={require('../../../assets/Imagens/pinguim-fone.png')}
                style={{ marginTop: -80 }} />
            <Text style={styles.texto}>PengTunes</Text>

            <Text style={styles.texto2}>Venha ouvir suas musicas no PengTunes, e desbloqueie seu potencial musical.</Text>

            <View>
                <PlayButton onPress={Library}/>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 50
    },
    texto2: {
        fontSize: 15,
        textAlign: 'center',
        margin: 35,
        color: '#fff'
    }
});