import React, { useState } from "react";
import { Text, View, StyleSheet, StatusBar, Image, TextInput, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import Rolagem from "../../components/Rolagem/Rolagem.js";
import songs from "../../../model/data.js"
export default function Library({ navigation }) {
    const [searchword, setSearchWord] = useState('');

    const { width } = Dimensions.get('window');

    const items = [
        { id: 1, image: require('../../../assets/Imagens/cd_cover.jpg') },
        { id: 2, image: require('../../../assets/Imagens/1600w-v4JfrRZCzw0.png') },
        { id: 3, image: require('../../../assets/Imagens/83903-wesley-safadao-banda-garota-safada-safadao-volume-maximo.jpg') },
    ];

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };

    /*     const items2 = [
            { id: 1, image2: require('../../../assets/Imagens/cd_cover.jpg') },
            { id: 2, image2: require('../../../assets/Imagens/1600w-v4JfrRZCzw0.png') },
            { id: 3, image2: require('../../../assets/Imagens/83903-wesley-safadao-banda-garota-safada-safadao-volume-maximo.jpg') },
        ]; */
    const item2 = songs

    const renderItem2 = ({ item, index }) => {
        if (item.liked == false) {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('PlaySongs',  songs)}>
                    <View style={styles.container}>
                        <Image style={styles.image2} source={item.artSongs} />
                    </View>
                </TouchableOpacity>
            );
        }

    };


    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar barStyle='light-contain' />
                <Image source={require('../../../assets/Imagens/pinguim-fone.png')} style={styles.imagem} />
                <TextInput placeholder="Pesquisar"
                    style={styles.barPesquisa}
                    onChangeText={setSearchWord} />

                <View style={styles.container1}>

                    <Text style={styles.texto}>Álbuns  </Text>

                    <Carousel
                        data={items}
                        renderItem={renderItem}
                        sliderWidth={width}
                        itemWidth={width - 305}
                        itemHorizontalMargin={0}
                    />

                </View>

                <View style={styles.container1}>

                    <Text style={styles.texto2}>Favoritas  </Text>

                    <Carousel
                        data={item2}
                        renderItem={renderItem2}
                        sliderWidth={width}
                        itemWidth={width - 260}
                        loop={true}
                    />

                </View>

                <Text style={styles.texto2}>Musicas Recente</Text>

                <Rolagem />






            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0588E8',
        flex: 1

    },

    imagem: {
        flex: 0,
        height: 100,
        width: 100,
        marginTop: 15,

    },
    barPesquisa: {
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 35,
        width: 325,
        height: 52,
        borderRadius: 30,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        marginHorizontal: 20,
        textAlign: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginLeft: -120,
        borderRadius: 20
    },
    texto: {
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 10,
        color: '#fff',
        fontSize: 18
    },
    image2: {
        width: 150,
        height: 150,
        borderRadius: 8,
        marginLeft: -120,
        borderRadius: 20
    },
    texto2: {
        marginTop: -45,
        marginLeft: 20,
        marginBottom: 10,
        color: '#fff',
        fontSize: 20
    },
});