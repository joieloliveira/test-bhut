import React, { useEffect, useState } from "react";
import { View, ScrollView, Alert } from "react-native";

import { ConteinerCarro, ImageCarro, ImageLogo, CardCarro, CardCarro_p } from '../../styles/custom_adm';

import ModalCad from '../../component/ModalCad';

import api from '../../config/api';

export default function Home() {

    const [carsData, setCarsData] = useState([]);

    const getDados = async () => {

        await api.get('/cars')
            .then((response) => {
                console.log(response.data);
                setCarsData(response.data)
            }).catch((err) => {
                if (err.response) {
                    //console.log(err.response);
                    Alert.alert("Erro tente mais tarde");
                } else {
                    Alert.alert("erro de servidor");
                }
            });
    }
    var cars = []
    carsData.map((car) => {
        cars.push(
            <CardCarro key={car._id}>
                <View>
                    <CardCarro_p>Nome: {car.title}</CardCarro_p>
                    <CardCarro_p>Marca: {car.brand}</CardCarro_p>
                    <CardCarro_p>Preço: {car.price}R</CardCarro_p>
                    <CardCarro_p>Ano: {car.age}</CardCarro_p>
                </View>
                <ImageCarro source={require('../../../assets/img/images4.png')} />
            </CardCarro>
        )
    })

    useEffect(() => {
        getDados();
    }, []);

    return (
        <ScrollView>
            <ConteinerCarro>
                <ImageLogo source={require('../../../assets/img/images3.png')} />
                <ModalCad/>
                {cars}

            </ConteinerCarro>
        </ScrollView>

    )
}