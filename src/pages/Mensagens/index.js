import  React from 'react'
import { View, Text, TextInput, Image,Button, TouchableOpacity, ScrollView, Link, RefreshControl } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from'./styles'
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../../config/firebase';
import { collection, where, setDoc,doc, query,getDocs, onSnapshot, DocumentData } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Placeholder from '../../../assets/Placeholder.jpg'

import { FlatList } from 'react-native';



const Mensagens = ({navigation}) => {
        const auth = getAuth()
        const a = auth.currentUser.uid;
        const [nome, setNome] = useState('')
        const [id, setID] = useState()
        const [grupos, setGrupos] = useState([])
        const [image, setImage] = useState('')
        const docRef = doc(db, "chats", 'teste');
        const [att, seAtt] = useState(false)

        
         
   
            
            
        async function nomelogado(){
            const q = query(collection(db, "Perfil"), where("Id", "==", a));
            

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
            console.log(grupos)
           
            
          
                
            
        }

        useEffect(() =>{
            nomelogado()
            chats()
            
        
         
          
        },[])
    

     
        

    const StartChat = async () => {
        
        try{
            const salas = query(collection(db, "chats"));
            
            const querySnapshot2 = await getDocs(salas);
             setID(querySnapshot2.size)
            
            console.log('Iniciando chat')
            console.group(nome)
            
                     
            const docRef = doc(db, "chats", nome+id+a);
            const envia = {nome: 'Daniel',
                Image:'https://s2-g1.glbimg.com/u5k0ayWEWM2DsEFZjP-asx9mr0U=/0x0:1080x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/j/F/p0elVoQZ2CHUrIOuwdYw/297250193-426355525942835-3588685500474085344-n.jpg',
                documentId: id+1,
                status:'Pessoa'
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


        <Text>teste</Text>
         <TouchableOpacity style={styles.fab} onPress={StartChat}>
            
            <Ionicons  name="add" size={30} style={styles.icone}/>
        </TouchableOpacity>
    </View>
   
  )
}

export default Mensagens