import React, { useState, useCallback } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import { DocumentReference, collection, doc, get} from "firebase/firestore";
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
    const [list, setList] = useState([])
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

    
   
        
         async function item(info) {

            const listaitem = await info.map(
                (l) => {l} 
                )
                
            console.log(listaitem)
          }
        


      const handleinfo = () => {

       const info = doc(db, "Perfil/"+ a)
        
         item(info)
        
      }

    return (

        <TouchableOpacity style={styles.botao}
        onPress={handleinfo}


    >
       

        <Text style={styles.botaoenvio} >Pronto</Text>
    </TouchableOpacity>


        /*
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
        */


    );
}