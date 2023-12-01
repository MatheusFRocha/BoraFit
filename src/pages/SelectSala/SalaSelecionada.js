import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Pressable, Modal } from 'react-native';
import styles from './styles';
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from '../../config/firebase';
import { collection, query, where, getDocs, doc, setDoc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";







export default function SalaSelecionada({ navigation, route }) {

    const { documentId, esporte, distancia, descricao, origin, destination, nomeCorrida, dataGrupo, horaGrupo, membros, participantes } = route.params;
    const [dest, setDest] = useState();
    const [orig, setOrig] = useState();
    const [dataSala, setDataSala] = useState();
    const [qtdPessoas, setQtdPessoas] = useState();
    const [part, setPart] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const auth = getAuth();
    const a = auth.currentUser.uid;

    console.log(documentId)


    


    const incluirParticipante = async() => {
        

            const colecao = query(collection(db, "Salas", "corrida", "sala"), where ('nomeCorrida', '==', nomeCorrida));
            const querySnapshotteste = await getDocs(colecao)
            const list = []
    
            querySnapshotteste.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            

            querySnapshotteste.forEach((doc) => {
                const dados = (doc.id, '=>', doc.data());
                setPart(dados.participantes)
               
            });

            part.push(a)
            const colec = doc(db, "Salas", "corrida", "sala", nomeCorrida)
            updateDoc(colec, {participantes: arrayUnion(a)}).then(alert('Você está participando da sala!'))

            const ref = query(collection(db, "chats"), where('documentId', '==', documentId));
            updateDoc(ref, {participantes: arrayUnion(a)})

            
            navigation.navigate("Home");
    
    
      

        /*if (usuario == "") {
            alert('Ninguém logado!')
          } else {
      
            const docRef = doc(db, "Salas", esporte ,"sala", nomeCorrida);
            const envia = {

              participantes: [usuario]

            };
      
            setDoc(docRef, envia)
      
              .then(
      
                alert('Agora você faz parte desta sala de atividade!')
      
      
              ).catch((error) => {
                setErrorLogin(true)
                let errorCode = error.code;
                let errorMassage = error.message;
              })
        }*/
    }

    


    const contaPessoas = () => {
        const contaP = participantes.length;
        setQtdPessoas(contaP);
    }

    const trocaData = () => {

        var resultado = dataGrupo.split("-");

        var dataformatada = resultado[2] + "/" + resultado[1] + "/" + resultado[0];


        setDataSala(dataformatada);


    }

    useEffect(() => {
        
        setDest({
            latitude: destination[0],
            longitude: destination[1]
        });
        setOrig({
            latitude: origin[0],
            longitude: origin[1]
        });
        trocaData();
        contaPessoas();
        
        
      
        

        


    },[]);

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
                    origin={orig}
                    destination={dest}
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
                <Text style={styles.txtBtn}>Percurso: {nomeCorrida}</Text>
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