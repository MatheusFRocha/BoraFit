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


export default function NovoUsuario() {
    const [nome, setNome] = useState("")
    const [sobreNome, setSobreNome] = useState("")


    const [email, setEmail] = useState("")
    const [password, setSenha] = useState("")
    const [sexo, setSexo] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [peso, setPeso] = useState("")
    const [alura, setAltura] = useState("")
    const [errorLogin, setErrorLogin] = useState("")


    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(value => {
                console.log('cadastrado com sucesso \n' + value.user.uid)
            })
            .catch(error => console.log(error));
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
                <Image style={{ width: 100, height: 80 }}


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
                    placeholder='Nome '
                    type="text"
                    autoCorrect={false}
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                />
                <TextInput style={styles.input}
                    placeholder='Sobrenome '
                    type="text"
                    autoCorrect={false}
                    onChangeText={(text) => setNome(text)}
                    value={sobreNome}
                />

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


                <TextInput style={styles.input}
                    placeholder='text'
                    type="text"
                    autoCorrect={false}
                    onChangeText={(text) => setSexo(text)}
                    value={sexo}
                />
                <TextInput style={styles.input}
                    placeholder='Data de nascimento'
                    type="datetime"
                    autoCorrect={false}
                    onChangeText={(text) => setNascimento(text)}
                    value={nascimento}
                />
                <TextInput style={styles.input}
                    placeholder='Peso '
                    type="int"
                    autoCorrect={false}
                    onChangeText={(text) => setPeso(text)}
                    value={peso}
                />
                <TextInput style={styles.input}
                    placeholder='Altura em cm '
                    type="int"
                    autoCorrect={false}
                    onChangeText={(text) => setPeso(text)}
                    value={alura}
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
                        <Text style={styles.botaoenvio} >Cadastrar</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.botao}



                    >
                        <Text style={styles.botaoenvio} >Cadastrar</Text>
                    </TouchableOpacity>

                }


















            </Animated.View>



        </KeyboardAvoidingView >



    );
}