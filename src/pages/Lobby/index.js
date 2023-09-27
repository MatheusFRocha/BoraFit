import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

 


    export default function Lobby({navigation}) {
        
        async function CriarSala() {
            navigation.navigate("CriarSala")
    
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

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoBuscarCriar}>Buscar Sala</Text>
            </TouchableOpacity>
        </View>
        
        </View>

        
    );
}