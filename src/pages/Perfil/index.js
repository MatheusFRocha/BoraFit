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
    Image
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
        const [image, setImage] = useState('')
     
            
  
       
           


       
            async function info() {

                
              
                const q = query(collection(db, "Perfil"), where("Id", "==", a));


                const querySnapshot = await getDocs(q);

                
                

                try{
                    querySnapshot.forEach((doc) => {
                  
                        const dados = (doc.id, " => ", doc.data());
                          setImage(dados.Image)
                          setNome(dados.nome)
                          setSobreNome(dados.sobreNome)
                          setCidade(dados.Cidade)
                          setIdade(dados.Idade)
                       
                        console.log(dados.Image)
                        
                          
                      } 
                      
                      )  ;
                      
      
                      
                      
                } catch{
                   alert('error')
                }
                
                
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
                         Cidade: cidade,
                        };
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
       
        {image && <Image  source={{uri:image}} style={{   width: 88,
            height:200,
            width:200,
            borderRadius: 100,
            
            
            
            }}/> }
     
        
        
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