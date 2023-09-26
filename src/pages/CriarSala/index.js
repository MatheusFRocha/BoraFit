import React from "react";
import { useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'; 

export default function CriarSalaCorrida() {
    const [membros, setMembros] = useState('')
    const [descricao, setDescricao] = useState('')
    const [horario, setHorario] = useState('')
    const [data, setData] = useState('');


    function handleForm() {
        const dados ={
            membros,
            descricao,
            data,
            horario
        }
    

        console.log(dados);
    }

    return (
        
        <View>
            <Text>Crie sua sala:</Text>
            <TextInput
            onChangeText={setDescricao}
            value={descricao}
            placeholder="Descrição da Atividade"
            />

            <TextInput
            onChangeText={setMembros}
            value={membros}
            placeholder="Participantes"
            keyboardType="numeric"
            maxLength={2}
            />
     
        </View>
    )
}
