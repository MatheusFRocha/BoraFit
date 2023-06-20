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
import { auth } from '../../config/firebase';


export default function NovoUsuario({ navigation, user }) {



    const [email, setEmail] = useState("")
    const [password, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")


    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                navigation.navigate("CriarPerfil")

            })
            .catch((error) => {
                setErrorLogin(true)
                let errorCode = error.code;
                let errorMassage = error.message;
                if (errorCode == "auth/email-already-in-use") {
                    alert('Email ja esta em uso')
                }
                else if (errorCode == "auth/invalid-email") {
                    alert('Email ou senha invalidos')
                }
            });
    }
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
    const [opacity] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            })
        ]).start();
    }, [])
    return (

        <KeyboardAvoidingView style={styles.background}>
<<<<<<< HEAD
            
=======
>>>>>>> 8196591b594f934ae195b281374035ac035ccf92
            <View style={styles.containerLogo}>
                <Image style={{ width: 170, height: 80 }}
                    source={require('../img/logo.png')}
                >
                </Image>
            </View>
            <Animated.View style={[styles.container,
            {

                opacity: opacity,
                transform: [
                    {
                        translateY: offset.y
                    }
                ]
            }
            ]}>
                <TextInput style={styles.input}
                    placeholder='Email'
                    type="email"
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput style={styles.input}
                    placeholder='Senha de 1 a 6 caracteres'
                    type="password"
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText={(text) => setSenha(text)}
                    value={password}

                />



                {email === "" || password === "" ?
                    <TouchableOpacity style={styles.botaodisable}
                        disabled={true}
                    >
                        <Text style={styles.botaoenvio} >Cadastrar</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.botao}
                        onPress={createUser}
                    >
                        <Text style={styles.botaoenvio} >Cadastrar</Text>
                    </TouchableOpacity>

                }

            </Animated.View>
        </KeyboardAvoidingView >
    );
}