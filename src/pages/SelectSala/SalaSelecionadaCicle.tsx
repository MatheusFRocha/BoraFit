import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import styles from './styles';
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../../config/firebase';
import { collection, query, where, getDocs, doc, setDoc, onSnapshot, updateDoc, arrayUnion, addDoc, documentId } from "firebase/firestore";
import { number } from 'react-admin';
import Home from '../Home';








export default function SalaSelecionadaCicle({ navigation, route }) {

    const { documentooo, inicio, imagems, final, participantes, distancia, esporte, nomeCiclismo, descricao, dataGrupo, horaSala, origin, destination, horaGrupo, membros } = route.params;
    const [dest, setDest] = useState([]);
    const [orig, setOrig] = useState([]);
    const [dataSala, setDataSala] = useState('');
    const [qtdPessoas, setQtdPessoas] = useState<number>();
    const [part, setPart] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [teste, setTeste] = useState('')
    const [idsalassss, setIdsalas] = useState('')
    const auth = getAuth();
    const a = auth.currentUser.uid;

    const mudaTipo = () => {
        var tipoDest = destination.toString()
        console.log(tipoDest)
    }




    const [document, setDocument] = useState()

    useEffect(() => {

        leridsala();
        lerid();

        contaPessoas();
    })

    async function lerid() {
        const q = query(collection(db, "chats"), where("dcid", "==", documentooo));


        const querySnapshot = await getDocs(q);

        try {
            querySnapshot.forEach((doc) => {

                const dados = (doc.id, " => ", doc.data());

                setTeste(doc.id)

            }

            );
        } catch {
            alert('error')
        }
    }

    async function leridsala() {
        const q = query(collection(db, "Salas", "ciclismo", "sala"), where("doc", "==", documentooo));


        const querySnapshot = await getDocs(q);

        try {
            querySnapshot.forEach((doc) => {

                const dados = (doc.id, " => ", doc.data());

                setIdsalas(doc.id)

            }

            );
        } catch {
            alert('error')
        }
    }
    async function verifica() {
        contaPessoas();
        
        if (qtdPessoas > membros) {
            alert('não foi possivel entrar, a sala está cheia'), navigation.navigate("Home")
        } else {
            envia(), alert('você se cadastrou com sucesso, acesse a aba "mensagens" para poder conversar com os demais membros da atividade'), navigation.navigate("Home")

        }
    }

    const incluirParticipante = async () => {




        ////////////////////////////////////////////////////////////////////



        //////









        verifica();
        inseresala();
        envia();





    }



    const envia = async () => {
        const testess = doc(db, "Salas", "ciclismo", "sala", idsalassss)

        await updateDoc(testess, {
            participantes: arrayUnion(a)
        })
    }

    const inseresala = async () => {
        const washingtonRef = doc(db, `chats/${teste}`);
        await updateDoc(washingtonRef, {
            participantes: arrayUnion(a)
        });
    }





    const contaPessoas = async () => {
        const colecao = query(collection(db, "Salas", "ciclismo", "sala"), where('nomeCiclismo', '==', nomeCiclismo));
        const querySnapshotteste = await getDocs(colecao)
        const list = []

        querySnapshotteste.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id })
        })


        querySnapshotteste.forEach((doc) => {
            const dados = (doc.id, '=>', doc.data());
            setPart(dados.participantes)
            const contaP = participantes.length;
            setQtdPessoas(contaP);





        });





    }




    const trocaData = () => {

        var resultado = dataGrupo.split("-");

        var dataformatada: string = resultado[2] + "/" + resultado[1] + "/" + resultado[0];


        setDataSala(dataformatada);


    }

    useEffect(() => {
        // {latitude:String = destination[0]}  {longitude:String = destination[1]}
        //setDest([destination.latitude, destination.longitude]);
        //setOrig([origin.latitude, origin.longitude]);
        trocaData();









    }, []);

    const mapEl = useRef(null);

    return (


        <View style={styles.mapStyle}>


            <MapView
                style={styles.map}
                loadingEnabled={true}
                ref={mapEl}
                showsPointsOfInterest={false}
                zoomEnabled={true}
                showsTraffic={false}
                moveOnMarkerPress={false}
                scrollEnabled={true}
            >

                <MapViewDirections
                    origin={origin.toString()}
                    destination={destination.toString()}
                    apikey="AIzaSyBGnMA5jW1v-LfSfsRUS7YUjkTFvqz5H4A"
                    strokeWidth={4}
                    strokeColor="green"
                    onReady={resultado => {
                        mapEl.current.fitToCoordinates(
                            resultado.coordinates, {
                            edgePadding: {
                                top: 50,
                                bottom: 50,
                                left: 50,
                                right: 50
                            }
                        }
                        )
                    }}
                />

                <Marker
                    coordinate={{ latitude: origin[0], longitude: origin[1] }}
                    title="Início"

                />
                <Marker
                    coordinate={{ latitude: destination[0], longitude: destination[1] }}
                    title="Fim"

                />


            </MapView>
            <View style={styles.titleSala}>
                <Text style={styles.txtBtn}>Percurso: {nomeCiclismo}</Text>
                <Text style={styles.txtBtn}>Data: {dataSala} às {horaGrupo}</Text>
                <Text style={styles.txtBtn}>Participantes: {qtdPessoas} / {membros}</Text>
                <Text style={styles.txtBtn}>Distância: {distancia} M</Text>

            </View>
            <View style={styles.viewBtn}>
                <Pressable
                    style={styles.botao}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.txtBtn} >Descrição</Text>
                </Pressable>


            </View>
            {qtdPessoas < membros ?
                <View style={styles.viewBtn}>

                    <Pressable
                        style={styles.botao}
                        onPress={incluirParticipante}>
                        <Text style={styles.txtBtn} >Participar</Text>
                    </Pressable>
                </View>
                : <>
                    <View style={styles.viewBtn}>
                        <Text style={styles.txtBtn}>Sala Cheia!</Text>

                    </View>
                    <View style={styles.viewBtn}>

                        <Text style={styles.txtBtn}>Não é mais possível participar!</Text>
                    </View>
                </>
            }
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Text style={styles.txtBtn}>{descricao}</Text>

                            <Pressable
                                style={styles.botao}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.txtBtn} >Ok</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>








    )
};