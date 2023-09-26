import React, { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import {
    KeyboardAvoidingView,
    Input,
    TextInput,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import styles from './styles';
import { getAuth } from "firebase/auth";



export default function Perfil({ navigation }) {

        const [data, setData] = useState([]);

        const auth = getAuth();
        const a = auth.currentUser.uid;
       
        const [nome, setNome] = useState("")
        const [sobreNome, setSobreNome] = useState('')
        const [cidade, setCidade] = useState("")
        const [idade, setIdade] = useState('')
        
        const [errorLogin, setErrorLogin] = useState("")
            
  

        

       
            async function info() {

                
                
                const q = query(collection(db, "Perfil"), where("Id", "==", a));

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  const dados = (doc.id, " => ", doc.data());

                    setNome(dados.nome)
                    setSobreNome(dados.sobreNome)
                    setCidade(dados.Cidade)
                    setIdade(dados.Idade)


                console.log(dados)


                });

            }
              
            useEffect(() => {

            
               info()
            
            },[])

            
             
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
                        alert('Alterado com sucesso'),
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
    
    return (

        <KeyboardAvoidingView style={styles.background}>


        <View>
            <Text style={styles.RegistroTexttitle}>

                Perfil


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
           
            autoCorrect={false}
            onChangeText={(idade) => setIdade(idade)}
            value={idade}

        />
        <TextInput style={styles.input}
            placeholder='Cidade'
            type="text"
            
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