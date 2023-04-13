import React, { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function Configuracoes({ navigation }) {

    async function Settings() {
        navigation.navigate("Perfil")

    };

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