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
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';


export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    async function createUser() {

        navigation.navigate("NovoUsuario")

    };

    async function login() {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user;

                navigation.navigate("Home", { idUser: user.uid })
                console.log(user.uid)
            })
            .catch((error) => {
                setErrorLogin(true)
                let errorCode = error.code;
                let errorMassage = error.message;
            });
    };
    async function sair() {
        await signOut(auth)
            .then(() => {
                console.log('saiu');
            }).catch(error => console.log(error));
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
            <View style={styles.containerLogo}>
                <Image style={{ width: 200, height: 135 }}


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
                    placeholder='Senha'
                    type="password"
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText={(text) => setSenha(text)}
                    value={password}

                />
                {errorLogin === true ?
                    <View style={styles.containerAlert}>
                        <MaterialCommunityIcons
                            name='alert-circle'
                            size={24}
                            color="#BDBDBD"

                        />

                        <Text style={styles.avisoAlerta}> Email ou senha invalidos</Text>
                    </View>
                    :
                    <View />

                }

                {email === "" || password === "" ?

                    <TouchableOpacity style={styles.botao}
                        disabled={true}
                    >
                        <Text style={styles.botaoenvio} >Acesso</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.botao}
                        onPress={login}


                    >
                        <Text style={styles.botaoenvio} >Acesso</Text>
                    </TouchableOpacity>

                }
                <TouchableOpacity style={styles.botaoRegistro}
                    onPress={createUser}
                >
                    <Text style={styles.RegistroText}


                    >Crie uma conta agora</Text>

                </TouchableOpacity>

















            </Animated.View>



        </KeyboardAvoidingView >



    );
}

