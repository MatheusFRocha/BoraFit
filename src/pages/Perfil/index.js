import React, { useState, useCallback } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase';

import {
    KeyboardAvoidingView,
    Input,
    TextInput,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import styles from './styles';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Perfil({ navigation }) {
    const auth = getAuth();
    const [nome, setNome] = useState("")
    const [sobreNome, setSobreNome] = useState('')
    const [cidade, setCidade] = useState("")
    const [idade, setIdade] = useState('')
    const [a, setUser] = useState('')
    const usuarios = collection(db, '/usuarios/' );

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            setUser(user.uid)
        } else {
            console.log('ninguem logado.')
        }
    }
    );


    const handleverificacampos = () => {
        if (nome === "" || sobreNome === "" || idade === "" || cidade === "") {
            alert('Por favor verifique os campos')
        } else {
            addDoc(
                FileField(db, 'usuarios'), { nome: nome, sobreNome: sobreNome, idade: idade, cidade: cidade }
            ).then(
                alert('Alterado com sucesso'),
                navigation.navigate("Home")
            ).catch(error => console.log(error))
        }
    }
    const handleidade = () => {
        if (isNaN(idade)) {
            alert('Digite um idade correta, por favor')
        } else {
            handleverificacampos()
        }
    }


    return (
        <KeyboardAvoidingView style={styles.background}>
            <TextInput style={styles.input}
                placeholder='Nome'
                type="text"
                autoCorrect={false}
                onChangeText={(text) => setNome(text)}
                value={nome}
            />
            <TextInput style={styles.input}
                placeholder='Sobre Nome'
                type="text"
                autoCorrect={false}
                onChangeText={(text) => setSobreNome(text)}
                value={sobreNome}
            />
            <TextInput style={styles.input}

                placeholder='Idade'
                type="number"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={(idade) => setIdade(idade)}
                value={idade}
            />
            <TextInput style={styles.input}
                placeholder='Cidade'
                type="text"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={(text) => setCidade(text)}
                value={cidade}
            />
            <TouchableOpacity style={styles.botao}
                onPress={handleidade}
            >
                <Text style={styles.botaoenvio} >Pronto</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView >
    );
}