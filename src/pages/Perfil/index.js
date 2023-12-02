import React, { useEffect, useState } from 'react';
import { db, storage } from '../../config/firebase';
import { collection, query, where, getDocs, doc, setDoc, onSnapshot } from "firebase/firestore";
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
import Placeholder from '../../../assets/Placeholder.jpg'
import * as ImagePicker from 'expo-image-picker';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'


export default function Perfil({ navigation }) {

        const [data, setData] = useState([]);

        const auth = getAuth();
        const a = auth.currentUser.uid;
       
        const [nome, setNome] = useState("")
        const [sobreNome, setSobreNome] = useState('')
        const [cidade, setCidade] = useState("")
        const [idade, setIdade] = useState('')
        const [image, setImage] = useState('')
        const [progress, setProgress] = useState(0)
     
        useEffect(() => {

             
            info()
       
            
             
         },[])



         async function pickImage (){
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
            
             mediaTypes: ImagePicker.MediaTypeOptions.Images, 
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
        
            
            if (!result.canceled) {
              
                await handlefoto(result.assets[0].uri, "image")
              
            }}
            async function handlefoto(uri, fileType){
                
                const response = await fetch(uri)
                const blob = await response.blob();
                const storageRef = ref(storage, "Stuff/" + new Date().getTime())
                const uploadTask = uploadBytesResumable(storageRef, blob)
    
    
                uploadTask.on("state_changed",
                (snapshot) => {
                    const progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log("Upload is " + progress + "% done");
                    setProgress(progress.toFixed())
                },
                (error) =>{
                        console.log(error)
                },
                () =>{
                    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) =>{
                        console.log("File available at", downloadURL)
                        setImage(downloadURL)
                        
                    });
                }
                )
              }

           


       
            async function info() {

                
              
                const q = query(collection(db, "Perfil"), where("Id", "==", a));


                const querySnapshot = await getDocs(q);

                
                

                try{
                    querySnapshot.forEach((doc) => {
                  
                        const dados = (doc.id, " => ", doc.data());
                          
                          setNome(dados.nome)
                          setSobreNome(dados.sobreNome)
                          setCidade(dados.Cidade)
                          setIdade(dados.Idade)
                          setImage(dados.Image)
                       
                       
                        
                          
                      } 
                      
                      )  ;
                      
      
                      
                      
                } catch{
                   alert('error')
                }
                
                
            }
              
         

            
             
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
                         Image:image
                        };
                     setDoc(docRef, envia)
        
                    .then(
                        alert('Alterado com sucesso'),
                        
                       
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
       
        <TouchableOpacity onPress={pickImage}
                        style={{alignItems:'center',marginTop:0}}
               >
                    { <Image 
                    
                    source={ image? {uri:image}: Placeholder }
                    
                    style={{   width: 88,
                        height:200,
                        width:200,
                        borderRadius: 100,
                        
                        
                        
                        }}
                />}
               </TouchableOpacity>
     
        
        
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
            <Text style={styles.botaoenvio} >Alterar</Text>
        </TouchableOpacity>

    </KeyboardAvoidingView >


    

    );
}