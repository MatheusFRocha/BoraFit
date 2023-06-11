import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function Configuracoes({ navigation }) {




    async function Settings() {
        navigation.navigate("Perfil")

    };

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.botaoRegistro}
                onPress={''}
            >


                <Text style={styles.RegistroText}

                >Perfil</Text>

            </TouchableOpacity>

        </View>
    );
}