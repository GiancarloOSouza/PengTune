import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar />
            <Image source={require('../../../assets/Imagens/pinguim-fone.png')} style={styles.logo} />
            <Text style={styles.texto}>PengTunes</Text>

            <Text style={styles.texto2}>Venha ouvir suas musicas no PengTunes, e desbloqueie seu potencial musical.</Text>

            <View>

                <TouchableOpacity onPress={() => navigation.navigate('Library')} >
                    <LinearGradient colors={['#2E49A6', '#5D359E', '#921F95']} style={styles.gradient}>
                        <View style={styles.container2} >
                            <Text style={styles.texto3}>        Tocar        </Text>
                        </View>

                    </LinearGradient>
                </TouchableOpacity>


            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5255A8'
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
    },
    gradient: {
        borderRadius: 60,
        height: 50,
        marginTop: 20
    },
    texto3: {
        color: '#fff'
    },
    container2: {
        width: 100,
        height: 43,
        justifyContent: 'center',
        textAlign: 'center'

    },
    logo: {
        width: 150,
        height: 200
    }
});