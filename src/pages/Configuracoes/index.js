import React from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './styles';
import { getAuth } from "firebase/auth";


export default function Configuracoes({ navigation }) {

    const auth = getAuth();
    const userId = auth.currentUser.uid;
   
    
   
    async function Settings() {
        navigation.navigate("Perfil")

    };

    alert(userId)

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.botaoRegistro}
                onPress={Settings}
            >


                <Text style={styles.RegistroText}

                >Perfil</Text>

            </TouchableOpacity>  

        </View>
    );
}