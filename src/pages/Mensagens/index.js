import  React from 'react'
import { View, Text, TextInput, Image,Button, TouchableOpacity, ScrollView, Link, RefreshControl } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from'./styles'
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../../config/firebase';
import { collection, where, setDoc,doc, query,getDocs, onSnapshot, DocumentData } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Placeholder from '../../../assets/Placeholder.jpg'

import { FlatList } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';




const Mensagens = ({navigation}) => {
        
        const [nome, setNome] = useState('')
        const [id, setID] = useState(0)
        const [grupos, setGrupos] = useState([])
        const [image, setImage] = useState('')
        const docRef = doc(db, "chats", 'teste');
        const [att, seAtt] = useState(false)
        const auth = getAuth();
        const  [userlog , setUser] = useState('')
        
         
   
            
            
        async function nomelogado(){
            const q = query(collection(db, "Perfil"), where("Id", "==", userlog));
            

            const querySnapshot = await getDocs(q);
            

            try{
                querySnapshot.forEach((doc) => {
              
                    const dados = (doc.id, " => ", doc.data());
                    setNome(dados.nome)    

                                         
                  }                  
                  )  ;                 
            } catch{
               alert('error')
            }


           

        }


        async function chats() {
           
            const colecao = query(collection(db,'chats'));
            const querySnapshotteste = await getDocs(colecao)
            const list = []

            querySnapshotteste.forEach((doc)=>{
                list.push({...doc.data(), id:doc.id})
            })

            
            setGrupos(list)
            
           
            
          
                
            
        }

        useEffect(() =>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    
                    setUser(user.uid)
                    
                } else {
                    console.log('ninguem logado.')
                }
            }
            );
            nomelogado()
            chats()
            
        
         
          
        })
    

     
        

    const StartChat = async () => {

        
        

        const salas = query(collection(db, "chats"));
            
            const querySnapshot2 = await getDocs(salas);
            if(querySnapshot2.size != 0){
                setID(querySnapshot2.size)
            }
           
         try{
            const salas = query(collection(db, "chats"));
            
            const querySnapshot2 = await getDocs(salas);
             setID(querySnapshot2.size)
            
            console.log('Iniciando chat')
            console.log('nome',nome)
            
                     
            const docRef = doc(db, "chats", nome+userlog+id+1);
            const envia = {nome: 'teste',
                Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXESbTGMa4YLH_sNx3D4AUylVdUaprBuDfCQ&usqp=CAU',
                documentId: nome+userlog+id+1,
                status:'Grupos'
                 };
             setDoc(docRef, envia)
    
            .then(
    
                nomelogado(),
                 chats(),
               
                alert('Criado'),
                
                
               
            ).catch((error) => {
               console.log(error)
            })

            
        }catch(e){
            console.log(e)
        }
       
       
            }

        
        
    
    const paginachat= (status) =>{
        if (status === 'pessoal'){
           // navigation.navigate('')
           console.log(status)
        }
        if(status === 'grupo'){
            //navigation.navigate('')
            console.log(status)
        }

        console.log(status)

    }



  return (
    <View  style={styles.container}> 

       
<FlatList 

                data={
                    grupos
                }
            
              renderItem={({item}) =>
                        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`${item.status}`,{idsala:item.documentId, nomesala:item.nome, status:item.status, foto:item.Image})}>
                        <View >
                        { <Image 
                    
                                source={item.Image? {uri:item.Image}: Placeholder }
                    
                                style={{   width: 88,
                                    height:50,
                                    width:50,
                                    borderRadius: 100,
                                    
                                    
                                    
                                    }}
                            />}

                           
                           
                           
                        </View>
                        <Text>{item.nome}</Text>
                        
                    </TouchableOpacity>
            
            }
            
            

           />

            
        
         <TouchableWithoutFeedback style={styles.fab} onPress={StartChat}>
         
                <Ionicons  name="add" size={30} style={styles.icone}/>
            
            
        </TouchableWithoutFeedback>




      
    </View>
   
  )
}

export default Mensagens