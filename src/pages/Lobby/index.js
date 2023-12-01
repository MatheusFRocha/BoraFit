import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

    


    export default function Lobby({navigation , route}) {
        
        const { id, esporte } = route.params;


        async function CriarSala() {

            if (id == 2){
                navigation.navigate("futebol")
            }else if (id ==1) {
                navigation.navigate("MapCorrida")
            }else if (id ==3) {
                navigation.navigate("academia")
            }else if (id ==4) {
                navigation.navigate("MapCiclismo")
            }

    
        };

        async function SelectSala() {

            if (id == 2){
                navigation.navigate("SelectFutebol")
            }else if (id ==1) {
                navigation.navigate("SelectCorrida")
            }else if (id ==3) {
                navigation.navigate("SelectAcademia")
            }else if (id ==4) {
                navigation.navigate("SelectCiclismo")
            }

    
        };
        
    return (
        
     <View>
        <View style={styles.containerLogo}>
            <Text style={styles.RegistroText}>Lobby</Text>
        </View>
        
        <View style={styles.container}>
            <TouchableOpacity onPress={CriarSala} style={styles.botao}>
                <Text style={styles.botaoBuscarCriar}>Criar Sala</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={SelectSala} style={styles.botao}>
                <Text style={styles.botaoBuscarCriar}>Buscar Sala</Text>
            </TouchableOpacity>
        </View>
        
    </View>

        
    );
}