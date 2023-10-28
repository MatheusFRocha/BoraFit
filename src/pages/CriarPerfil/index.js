import React, { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, setDoc,doc } from "firebase/firestore";
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
   
      


    
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            setUser(user.uid)
        } else {
            console.log('ninguem logado.')
        }
    }
    );

   

    const handleverificacampos = async () => {
        if (nome === "" || sobreNome === "" || idade === "" || cidade === "") {
            alert('Por favor verifique os campos')
        } else {
            
           const docRef = doc(db, "Perfil", a);
            const envia = {nome: nome,
                Id:a,
                sobreNome: sobreNome,
                 Idade: idade, 
                 Cidade: cidade };
             setDoc(docRef, envia)

            .then(
                navigation.navigate("Home"),
                alert('Cadastrado com sucesso, tenha uma boa experiência!!!'),
                console.log(a),
               
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
<<<<<<< HEAD
                type="number"
                
=======
                keyboardType='numeric'
>>>>>>> 3ea47fb71d0e482918b79576b342ac743b5aeff9
                autoCorrect={false}
                onChangeText={(idade) => setIdade(idade)}
                value={idade}



            />
            <TextInput style={styles.input}
                placeholder='Cidade'
                type="text"
<<<<<<< HEAD
                
=======
>>>>>>> 3ea47fb71d0e482918b79576b342ac743b5aeff9
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