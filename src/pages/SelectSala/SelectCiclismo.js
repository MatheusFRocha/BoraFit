import React, { useEffect, useState } from 'react';
import { Modal, Pressable, View, Text, FlatList, ImageBackground } from 'react-native';
import styles from './styles';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, storage } from '../../config/firebase';
import { collection, query, where, getDocs, doc, setDoc, onSnapshot } from "firebase/firestore";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from '@react-navigation/native';
export default function SelectCiclismo({ navigation }) {

    const auth = getAuth();
    const a = auth.currentUser.uid;
    const [modalVisible, setModalVisible] = useState(false);
    const [cicles, setCicles] = useState()

    async function Ciclismos() {

        const colecao = query(collection(db, "Salas", "ciclismo", "sala"), where('criador', '!=', a));
        const querySnapshotteste = await getDocs(colecao)
        const list = []

        querySnapshotteste.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id })
        })
        setCicles(list)



    }

    useEffect(() => {


        Ciclismos()




    }, [])


    return (

        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../img/bike_background.jpg')} imageStyle={{ opacity: 0.4, }}>
                <Text style={styles.titleLists}>Selecione uma sala</Text>
                <FlatList

                    data={
                        cicles
                    }

                    renderItem={({ item }) =>
                        <SafeAreaView>

                            <Link style={styles.listaSala} key={item.id} to={{ screen: 'SalaSelecionadaCicle', params: ({ documentooo: item.doc,inicio:item.inicioPercurso,imagems:item.image, final:item.finalPercurso, participantes:item.participantes,distancia:item.distancia, esporte: item.esporte, nomeCiclismo: item.nomeCiclismo, descricao: item.descricao,dataGrupo:item.dataGrupo, horaSala:item.horaGrupo, origin: [item.inicioPercurso.latitude, item.inicioPercurso.longitude], destination: [item.finalPercurso.latitude,  item.finalPercurso.longitude],  horaGrupo: item.horaGrupo, membros: item.membros }) }}>

                                <TouchableOpacity >



                                    <Text style={styles.txtBtn}>{item.nomeCiclismo}</Text>

                                </TouchableOpacity>


                            </Link>

                        </SafeAreaView>

                    }
                />

            </ImageBackground>
        </View>
    )
};
