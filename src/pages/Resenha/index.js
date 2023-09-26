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

import styles from './styles';




import { getAuth, sendPasswordResetEmail } from "firebase/auth";


export default function Ressenha () {

    const auth = getAuth();

    const [email, setEmail] = useState('')
    const [opacity] = useState(new Animated.Value(0));
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
    
    function handlesenha ()  {

        if(email !== ''){
        sendPasswordResetEmail(auth, email)
            .then(function() {
                alert(
                    'Atenção '+
                     'Enviamos um email de recuperação de senha para o seguinte email: '+ email);
            })
            .catch((e) => {

                console.log('Signin: erro em entrar:' + e);
                switch (e.code) {

                    case 'auth/user-not-found':
                        alert('Erro '+ 'usuário não cadastro');
                        break;
                    case 'auth/invalid-email':
                        alert('Erro'+ ' email inválido');
                        break;
                    case 'auth/user-disabled':
                        alert('Erro '+ 'usuario desabilitado')
                        break;
                }
               



            })
        }else{
            alert('Erro' + ' Por favor, digite um email ')
        }


       

    }


    useEffect(() => {


        Animated.parallel([
           
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



           
            <TouchableOpacity style={styles.botaoRegistro}
                onPress={handlesenha}
            >
                <Text style={styles.RegistroText}


                >Recuperar</Text>

            </TouchableOpacity>

















        </Animated.View>



    </KeyboardAvoidingView >



);
}

