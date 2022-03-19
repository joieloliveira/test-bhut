import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import { InputForm, BtnSubmitForm, TxtSubmitForm} from '../../styles/custom_adm';

import api from '../../config/api';

const ModalCad = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [preco, setPreco] = useState("");
    const [ano, setAno] = useState("");

    const addCarro = async e => {
        e.preventDefault();

        const headers = {
            'headers': {
                'Content-Type': 'application/json',
            }
        };

        await api.post('/cars', { title:nome, brand:marca, price:preco, age:ano }, headers)
            .then((response) => {
                console.log(response);
                Alert.alert("Cadastrado com Sucesso");
            }).catch((err) => {
                if (err.response) {
                    Alert.alert("Erro: Tente mais tarde!");
                } else {
                    Alert.alert("Erro: Sem resposta do servidor");
                }
            });

        setModalVisible(!modalVisible)

    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <InputForm style={styles.inputCad}
                            placeholder="Nome"
                            value={nome}
                            onChangeText={text => setNome(text)}
                        />
                        <InputForm style={styles.inputCad}
                            placeholder="Marca"
                            value={marca}
                            onChangeText={text => setMarca(text)}
                        />
                        <InputForm style={styles.inputCad}
                            placeholder="Preço"
                            value={preco}
                            onChangeText={text => setPreco(text)}
                        />
                        <InputForm style={styles.inputCad}
                            placeholder="Ano"
                            value={ano}
                            onChangeText={text => setAno(text)}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text onPress={addCarro} style={styles.textStyle}>CADASTRAR</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <BtnSubmitForm
                onPress={() => setModalVisible(true)}
            >
                <TxtSubmitForm>
                    CADASTRAR CARRO
                </TxtSubmitForm>
            </BtnSubmitForm>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "#272726",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "red",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "#ffffff",
    },
    inputCad: {
        width: 300,
    }
});

export default ModalCad;