import React, { useEffect, createContext, useState } from "react";
import { View, Alert, Text, ScrollView } from "react-native";

import { ConteinerCarro, ImageCarro, ImageLogo, CardCarro, CardCarro_p, ScrollViewBox } from '../../styles/custom_adm';

import ModalCad from '../../component/ModalCad';

import api from '../../config/api';

const Context = createContext();

function Home() {

    const [carsData, setCarsData] = useState([]);

    const [loading, setLoading] = useState(false);

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
        setLoading(false);
    }
    const deletDado = async (id) => {

        await api.delete(`/cars/${id}`)
            .then((response) => {
                console.log(response.data);
                Alert.alert("Item deletado");
            }).catch((err) => {
                if (err.response) {
                    //console.log(err.response);
                    Alert.alert("Erro tente mais tarde");
                } else {
                    Alert.alert("erro de servidor");
                }
            });
        setLoading(true);
    }

    var cars = []
    carsData.map((car) => {
        cars.push(
            <>
                <Text style={{ marginLeft: 15}}>Toque no card para deletar</Text>
                <CardCarro key={car._id} onPress={() => deletDado(car._id)}>
                    <View>
                        <CardCarro_p>Nome: {car.title}</CardCarro_p>
                        <CardCarro_p>Marca: {car.brand}</CardCarro_p>
                        <CardCarro_p>Preço: {car.price}R</CardCarro_p>
                        <CardCarro_p>Ano: {car.age}</CardCarro_p>
                    </View>
                    <ImageCarro source={require('../../../assets/img/images4.png')} />
                </CardCarro>
            </>
        )
    })   

    useEffect(() => {
        getDados();
    }, [loading]);

    return (
        <Context.Provider value={{ loading, setLoading }}>
            <ConteinerCarro>
                <ImageLogo source={require('../../../assets/img/images3.png')} />
                <ModalCad />
                <ScrollView style={{ display: "flex", width: "100%", height: "auto", marginBottom: 1}}>
                    {cars}
                </ScrollView>
            </ConteinerCarro>
        </Context.Provider>
    )
}

export { Context, Home };