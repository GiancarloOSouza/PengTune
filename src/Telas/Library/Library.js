import React, { useState } from "react";
import { Text, View, StyleSheet, StatusBar, Image, TextInput, Dimensions, ScrollView } from "react-native";
import Carousel from "react-native-snap-carousel";

export default function Library() {
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

    const items2 = [
        { id: 1, image2: require('../../../assets/Imagens/cd_cover.jpg') },
        { id: 2, image2: require('../../../assets/Imagens/1600w-v4JfrRZCzw0.png') },
        { id: 3, image2: require('../../../assets/Imagens/83903-wesley-safadao-banda-garota-safada-safadao-volume-maximo.jpg') },
    ];

    const renderItem2 = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.image2} source={item.image2} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };


    return (
        <View styles={styles.container}>
            <StatusBar barStyle='light-contain' />
            <Image source={require('../../../assets/Imagens/pinguim-fone.png')} style={styles.imagem} />
            <TextInput placeholder="Pesquisar"
                style={styles.barPesquisa}
                onChangeText={setSearchWord} />

            <Text style={styles.texto}>Álbuns  </Text>

            <Carousel
                data={items}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width - 305}
                itemHorizontalMargin={0}
            />

            <Text style={styles.texto2}>Favoritas  </Text>

            <Carousel
                data={items2}
                renderItem={renderItem2}
                sliderWidth={width}
                itemWidth={width - 260}
            />

            <Text style={styles.texto2}>Musicas Recente</Text>




        </View>

    )
}

const styles = StyleSheet.create({
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