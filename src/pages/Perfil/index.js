import React, { useState, useCallback } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

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


export default function Perfil() {

    const auth = getAuth();
    const [nome, setNome] = useState("")
    const [sobreNome, setSobreNome] = useState('')
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("")
    const [cidade, setCidade] = useState("")




    const [selected, setSelected] = React.useState("");


    const data = [
        { key: '1', value: '', disabled: true },
        { key: '2', value: 'Masculino' },
        { key: '3', value: 'Feminino' },
        { key: '4', value: 'Outro' }

    ]

    const handleSexo = (event) => {

        setSexo(data.value)
    }

    function handlePerfil() {

        firestore()
            .collecetion('perfil')
            .add({
                nome: nome,
                sobre_Nome: sobreNome,
                idade: idade,
                cidade: cidade,
                sexo: sexo,
                created_at: firestore.fieldValue.serverTimestamp()
            })
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;






        } else {
            console.log('ninguem logado.')
        }
    }










    );

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
                onChangeText={(text) => setIdade(text)}
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

            <View style={{
                marginTop: 10, alignItems: 'flex-start', marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 15,

                padding: 10,

                width: 320,

                borderColor: "green"
            }}>
                <SelectList
                    placeholder='sexo'
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    onSelect={handleSexo}
                    save="value"
                />

            </View>

            <TouchableOpacity style={styles.botao}
                onPress={handlePerfil}


            >
                <Text style={styles.botaoenvio} >Acesso</Text>
            </TouchableOpacity>



























        </KeyboardAvoidingView >



    );
}