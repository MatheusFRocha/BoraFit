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

export const Login = () => {
    const [Email, setEmail] = useState("")
    const [Senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {

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
                    onChangeText={(text) => { setEmail(text) }}
                    value={Email}
                />



                <TextInput style={styles.input}
                    placeholder='Senha'
                    type="password"
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText={(text) => { setSenha(text) }}
                    value={Senha}

                />






                <TouchableOpacity style={styles.botao} >
                    <Text style={styles.botaoenvio} >Acesso</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoRegistro} >
                    <Text style={styles.RegistroText}>Crie uma conta agora</Text>
                </TouchableOpacity>




            </Animated.View>


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


        </KeyboardAvoidingView >



    );
}
export default Login;
