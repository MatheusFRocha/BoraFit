import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, setDoc,doc } from "firebase/firestore";
import { db, storage } from '../../config/firebase';
import styles from './styles';
import {
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Text,
    View,
    Plataform,
    Button,
    Image,
    SafeAreaView,
} from 'react-native';
import Placeholder from '../../../assets/Placeholder.jpg'
import * as ImagePicker from 'expo-image-picker';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'


export default function CriarPerfil({ navigation }) {

    const auth = getAuth();
    const [nome, setNome] = useState("")
    const [sobreNome, setSobreNome] = useState('')
    const [cidade, setCidade] = useState("")
    const [idade, setIdade] = useState('')
    const [a, setUser] = useState('')
    const [errorLogin, setErrorLogin] = useState("")
    const [progress, setProgress] = useState(0)
  
    const [image, setImage] = useState(null);

   
        async function pickImage (){
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        
         mediaTypes: ImagePicker.MediaTypeOptions.Images, 
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        
        if (!result.canceled) {
            setImage(result.assets[0].uri);
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
                 Cidade: cidade,
                 Image: image };
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

             
            <SafeAreaView style={{heigth:100, width:100}}>
                
              

               


               <TouchableOpacity onPress={pickImage}
                        style={{alignItems:'center',marginTop:0}}
               >
                    { <Image 
                    
                    source={image? {uri:image}: Placeholder }
                    
                    style={{   width: 88,
                        height:200,
                        width:200,
                        borderRadius: 100,
                        
                        
                        
                        }}
                />}
               </TouchableOpacity>
                    
             
            </SafeAreaView>




            
           

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