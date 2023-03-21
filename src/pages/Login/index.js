import React, { useState, useEffect } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Animated,
    Keyboard
} from 'react-native';


import styles from './styles';

export const Login = () => {

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
                    autoCorrect={false}
                    onChangeText={() => { }}
                />



                <TextInput style={styles.input}
                    placeholder='Senha'
                    autoCorrect={false}
                    onChangeText={() => { }}

                />


                <TouchableOpacity style={styles.botao} >
                    <Text style={styles.botaoenvio} >Acesso</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoRegistro} >
                    <Text style={styles.RegistroText}>Crie uma conta agora</Text>
                </TouchableOpacity>





            </Animated.View>





        </KeyboardAvoidingView >



    );
}
export default Login;
