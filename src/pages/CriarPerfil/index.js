import React, { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase';
import styles from './styles';
import {
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Text,
    View
} from 'react-native';




export default function CriarPerfil({ navigation }) {

    const auth = getAuth();
    const [nome, setNome] = useState("")
    const [sobreNome, setSobreNome] = useState('')
    const [cidade, setCidade] = useState("")
    const [idade, setIdade] = useState('')
    const [a, setUser] = useState('')
    const [errorLogin, setErrorLogin] = useState("")
   
    


    const handleverificacampos = () => {
        if (nome === "" || sobreNome === "" || idade === "" || cidade === "") {
            alert('Por favor verifique os campos')
        } else {
            addDoc(
                collection(db, 'usuarios/'), { nome: nome, sobreNome: sobreNome, idade: idade, cidade: cidade }
            ).then(
                alert('Alterado com sucesso'),
                navigation.navigate("Home")
            ).catch((error) => {
                setErrorLogin(true)
                let errorCode = error.code;
                let errorMassage = error.message;
            })
        }
    }
    const handleidade = () => {
        if (isNaN(idade)) {
            alert('Digite um idade correta, por favor')
        } else {
            handleverificacampos()
        }
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;

            setUser(user.uid)
        } else {
            console.log('ninguem logado.')

        }
    }
    );

    return (

        <KeyboardAvoidingView style={styles.background}>


            <View>
                <Text style={styles.RegistroTexttitle}>

                    Crie seu perfil


                </Text>
            </View>


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