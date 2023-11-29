import React, { useEffect, useState, useRef } from 'react';
import { Modal, Pressable, View, Text, FlatList, ImageBackground } from 'react-native';
import styles from './styles';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, storage } from '../../config/firebase';
import { collection, query, where, getDocs, doc, setDoc, onSnapshot } from "firebase/firestore";
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';


export default function SalaSelecionada({ navigation, route }) {

    const { descricao, origin, destination, nomeCorrida, dataGrupo, horaGrupo, membros, participantes } = route.params;

    const [dest, setDest] = useState();
    const [orig, setOrig] = useState();
    const [dataSala, setDataSala] = useState();
    const [qtdPessoas, setQtdPessoas] = useState();

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
            
            </View>
        </View>
                
              
                
                

                


    )
};