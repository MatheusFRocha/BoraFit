import React from "react"; 
import { useState, useEffect, useRef } from "react";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import { Modal, Pressable, View, Text, TextInput, ImageBackground, BackHandler, Button} from 'react-native';
import MapView from "react-native-maps";
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




export default function MapCorrida({ navigation }) {


  //mapas

  const chamaCoord = () => {
    console.log(destination)
    console.log(destinationTwo)
    requestLocationPermissions();
  }

  const mapEl=useRef(null);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [destinationTwo, setDestinationTwo] = useState(null);
  const [distancia, setDistancia] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);


    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();
    
        if(granted) {
          const currentPosition = await getCurrentPositionAsync();
          setOrigin(currentPosition);
          console.log('CURRENT POSITION >>>>>>>> ', currentPosition);

        }
      }
    
      useEffect(() => {
        requestLocationPermissions();
      }, []);
//mapas fim




    return (

        <View style={styles.mapContainer}>

            {
                origin &&
                <MapView
                        style={styles.map}
                        initialRegion={{
                        latitude: origin.coords.latitude,
                        longitude: origin.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}
                    showsUserLocation={true}
                    loadingEnabled={true}
                    ref={mapEl}
                >
                    {destination &&
                        <MapViewDirections
                            origin={destination}
                            destination={destinationTwo}
                            apikey="AIzaSyBGnMA5jW1v-LfSfsRUS7YUjkTFvqz5H4A"
                            strokeWidth={4}
                            strokeColor="green"
                            onReady={resultado => {
                                setDistancia(resultado.distance),
                                
                                mapEl.current.fitToCoordinates(
                                    
                                    resultado.coordinates,{
                                        edgePadding:{
                                            top:50,
                                            bottom:50,
                                            left:50,
                                            right: 50
                                        }
                                    }
                                )
                                
                                setModalVisible(true)
                            }}
                        />
                    }

                </MapView>
            }
<View style={styles.search}>

            <GooglePlacesAutocomplete 
                placeholder='Para onde vamos?'
                onPress={(data, details = null) => {
                    setDestination({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.000922,
                        longitudeDelta: 0.000421
                    });
                }}
                query={{
                    key: 'AIzaSyBGnMA5jW1v-LfSfsRUS7YUjkTFvqz5H4A',
                    language: 'pt-br',
                    components: 'country:br'
                }}
                enablePoweredByContainer={false}
                fetchDetails={true}
                styles={{ listView: { height: 100 } }}
            />
            
            <GooglePlacesAutocomplete
                placeholder='Para onde vamos?'
                onPress={(data, details = null) => {
                    setDestinationTwo({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.000922,
                        longitudeDelta: 0.000421
                    });
                }}
                query={{
                    key: 'AIzaSyBGnMA5jW1v-LfSfsRUS7YUjkTFvqz5H4A',
                    language: 'pt-br',
                    components: 'country:br'
                }}
                enablePoweredByContainer={false}
                fetchDetails={true}
                styles={{ listView: { height: 100 } }}
            />
            </View>

            <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>

                <Text style={styles.txtBtn}>Distância: {distancia} m</Text>

                <Pressable
                  style={styles.botao}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.txtBtn} >OK</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

            <Button onPress={chamaCoord} title="press"></Button>
        </View>

    )
};
