import React, { useEffect, useState } from 'react';
import { Modal, Pressable, View, Text, FlatList, ImageBackground } from 'react-native';
import styles from './styles';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, storage } from '../../config/firebase';
import { collection, query, where, getDocs, doc, setDoc, onSnapshot } from "firebase/firestore";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SelectCorrida({ navigation }) {

    const auth = getAuth();
    const a = auth.currentUser.uid;
    const [modalVisible, setModalVisible] = useState(false);
    const [corridas, setCorridas] = useState()

    async function Corridas() {

        const colecao = query(collection(db, "Salas", "corrida", "sala"), where('participantes', '!=', a));
        const querySnapshotteste = await getDocs(colecao)
        const list = []

        querySnapshotteste.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id })
        })
        setCorridas(list)
        console.log(list)


    }

    useEffect(() => {


        Corridas()




    }, [])


    return (

        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../img/run_background.jpg')} imageStyle={{ opacity: 0.4, }}>
                <Text style={styles.titleLists}>Selecione uma sala</Text>
                <FlatList

                    data={
                        corridas
                    }

                    renderItem={({ item }) =>
                        <SafeAreaView>

                            <TouchableOpacity style={styles.listaSala} onPress={() => navigation.navigate("SalaSelecionada",{nomeCorrida:item.nomeCorrida, descricao:item.descricao, origin:[item.inicioPercurso.latitude, item.inicioPercurso.longitude], destination:[item.finalPercurso.latitude, item.finalPercurso.longitude], dataGrupo: item.dataGrupo, horaGrupo: item.horaGrupo, membros: item.membros, participantes: item.participantes})}>

                                <Text style={styles.txtBtn}>{item.nomeCorrida}</Text>

                            </TouchableOpacity>
                            
                        </SafeAreaView>
                    }
                />

            </ImageBackground>
        </View>
    )
};