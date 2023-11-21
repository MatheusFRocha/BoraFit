import React from "react"; 
import { useState, useEffect } from "react";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import { Modal, Pressable, View, Text, TextInput, ImageBackground, BackHandler} from 'react-native';
import MapView from "react-native-maps";
import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";



export default function MapCorrida({ navigation }) {


  //mapas


  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [destinationTwo, setDestinationTwo] = useState(null);

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();
    
        if(granted) {
          const currentPosition = await getCurrentPositionAsync();
          setOrigin(currentPosition);
          console.log(currentPosition);

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
              <MapView style={styles.map}
                  initialRegion={{
                      latitude: origin.coords.latitude,
                      longitude: origin.coords.longitude,
                      latitudeDelta: 0.005,
                      longitudeDelta: 0.005
                  }}
                  showsUserLocation={true}
                  loadingEnabled={true}
                  
              />
          }

          <GooglePlacesAutocomplete style={{flex: '25%'}}
              placeholder='Ponto Inicial'
              onPress={(data, details = null) => {
                  setDestination({
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng,
                      latitudeDelta: 0.000922,
                      longitudeDelta: 0.000421
                  })
                  console.log(destination)
                  console.log('o de cima é destination')
              }}
              query={{
                  key: 'AIzaSyAt9VUysj_41O3y1BLWQVR_u7FjUEOTUcI',
                  language: 'pt-br',
                  components: 'country:br',
                 
              }}
              enablePoweredByContainer={false}
              fetchDetails={true}
              
              
          />
          <GooglePlacesAutocomplete style={{flex: 0.2}}
              placeholder='Ponto Final'
              onPress={(data, details = null) => {
                  setDestinationTwo({
                      latitude: details.geometry.location.lat,
                      longitude: details.geometry.location.lng,
                      latitudeDelta: 0.000922,
                      longitudeDelta: 0.000421
                  })
                  console.log(destinationTwo)
                  console.log('o de cima é destinatiotwo')
              }}
              query={{
                  key: 'AIzaSyAt9VUysj_41O3y1BLWQVR_u7FjUEOTUcI',
                  language: 'pt-br',
                  components: 'country:br',
              }}
              enablePoweredByContainer={false}
              fetchDetails={true}
          />
         
          
    </View>

)
};
