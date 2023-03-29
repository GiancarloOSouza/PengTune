import React, { useState } from "react";
import { Text, View, StyleSheet, StatusBar, Image, TextInput, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import songs from "../../../model/data.js"

export default function Library({ navigation }) {
    const [searchword, setSearchWord] = useState('');

    const { width } = Dimensions.get('window');

    const items = [
        { id: 1, image: require('../../../assets/artSongs/rosa.png'), album: 1 },
        { id: 2, image: require('../../../assets/artSongs/azul.png'), album: 2 },
        { id: 3, image: require('../../../assets/artSongs/verde.png'), album: 3 },
    ];

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ListSongs', item.album)}>
                <View style={styles.container}>
                    <Image style={styles.image} source={item.image} />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const items2 = songs;

    const renderItem2 = ({ item, index }) => {
        if (item.liked == true) {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('SoundPlay', item)}>
                    <View id={index.id} style={styles.container}>
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
                <Text style={styles.peng}>PengTunes</Text>

                <TouchableOpacity>
                    <Image source={require('../../../assets/more.png')} style={styles.ponto} />
                </TouchableOpacity>

                <TextInput placeholder="Pesquisar"
                    style={styles.barPesquisa}
                    onChangeText={setSearchWord} />

                <Text style={styles.texto}>Álbuns  {">"} </Text>

                <Carousel
                    data={items}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={width - 305}
                    itemHorizontalMargin={0}
                />

                <Text style={styles.texto2}>Favoritas  {">"} </Text>

                <Carousel
                    data={items2}
                    renderItem={renderItem2}
                    sliderWidth={width}
                    itemWidth={width - 260}
                    loop={true}
                />

                <View style={styles.baixo}>

                    <Text style={styles.texto2}>Musicas  {">"}</Text>

                    {songs.map((item) => (
                        <TouchableOpacity style={styles.containerSong2} onPress={() => navigation.navigate('SoundPlay', item)}>
                            <Image key={item.id} source={item.artSongs} style={styles.image3} />
                            <View style={styles.padding}>
                                <Text style={styles.songTitle}>{item.title}</Text>
                                <Text style={styles.artistName}>{item.artist}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}


                </View>




            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5255A8'
    },
    peng: {
        marginLeft: 85,
        marginTop: -48,
        marginBottom: 30,
        color: "#fff"

    },
    containerSong2: {
        flexDirection: 'row',
        flex: 2,
        alignItems: 'center',
        alignContent: 'center',
    },
    image3: {
        width: 80,
        height: 80,
        borderRadius: 10,
        margin: 10,
        marginLeft: 20
    },
    ponto: {
        height: 30,
        width: 30,
        marginLeft: 360,
        marginTop: -70,
        marginBottom: 40

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
    baixo: {
        marginTop: 80

    },
    imagem: {
        flex: 0,
        height: 80,
        width: 80,
        marginTop: 50,

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