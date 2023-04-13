import React, { useState, useEffect } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Animated,

} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import styles from './styles';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase'

export default function Perfil({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")


    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(value => {
                navigation.navigate("Login")
                console.log('cadastrado com sucesso \n' + value.user.uid)
            })
            .catch(error => console.log(error));
    }




    return (
        <KeyboardAvoidingView style={styles.background}>







            <TextInput style={styles.input}
                placeholder='Email'
                type="email"
                autoCorrect={false}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />



            <TextInput style={styles.input}
                placeholder='Senha'
                type="password"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={(text) => setSenha(text)}
                value={password}

            />

























        </KeyboardAvoidingView >



    );
}