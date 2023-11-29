import React from 'react'
import { View, Modal, Pressable, Text, TextInput, Image, Button, TouchableOpacity, ScrollView, Link, RefreshControl } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles'
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../../config/firebase';
import { collection, where, setDoc, doc, query, getDocs, onSnapshot, DocumentData } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Placeholder from '../../../assets/Placeholder.jpg'

import { FlatList } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ref } from 'firebase/storage';
import { useLoading } from 'react-admin';




const Mensagens = ({ navigation }) => {

    const [nome, setNome] = useState('')
    const [id, setID] = useState(0)
    const [grupos, setGrupos] = useState([])
    const [image, setImage] = useState('')
    const docRef = doc(db, "chats", 'teste');
    const [att, seAtt] = useState(false)
    const auth = getAuth();
    const [userlog, setUser] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [refEmail, setRefEmail] = useState();
    
    // conversas

    const [nomesala, setnomesala] = useState('') 
    const [participantes, setParticipandos] = useState([]) 
    const [amigo, setAmigo] = useState('')

    

    //


    const teste = async () => {
        setModalVisible(true);
    }

    const fechaModal = async () => {
        setModalVisible(false);

    }

    





    async function nomelogado() {
        const q = query(collection(db, "Perfil"), where("Id", "==", userlog ));


        const querySnapshot = await getDocs(q);


        try {
            querySnapshot.forEach((doc) => {

                const dados = (doc.id, " => ", doc.data());
                setNome(dados.nome)


            }
            );
        } catch {
            alert('error')
        }




    }


    async function chats() {

        const colecao = query(collection(db, 'chats'), where("participantes", "array-contains", userlog ));
        const querySnapshotteste = await getDocs(colecao)
        const list = []

        querySnapshotteste.forEach((doc) => {
            list.push({ ...doc.data(), id: doc.id })
        })


        setGrupos(list)


        

        






    }

    useEffect(() => {
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

    const startpessoalchat = async() =>{
        const q = query(collection(db, "Perfil"), where("Id", "==", refEmail));
        console.log(refEmail)

        const querySnapshot = await getDocs(q);

        
        

        try{
            querySnapshot.forEach((doc) => {
          
                const dados = (doc.id, " => ", doc.data());
                     setAmigo(dados.Id)
                     setParticipandos([dados.Id, userlog])
                     setModalVisible(false)    

                     criachat();
              });           
        } catch{
           alert('error')
        }}


        const criachat = async()=>{

            console.log('entrou')
        const salas = query(collection(db, "chats"));

        const querySnapshot2 = await getDocs(salas);
        if (querySnapshot2.size != 0) {
            setID(querySnapshot2.size)
        }

        //

        try {
            const salas = query(collection(db, "chats"));

            const querySnapshot2 = await getDocs(salas);
            setID(querySnapshot2.size)

            const docRef = doc(db, "chats",  userlog + amigo + 1);

            const envia = {
                participantes: participantes,
               
                documentId:  userlog + amigo+ id + 1,
                status: 'Pessoa'
            };
            setDoc(docRef, envia)

                .then(

                    nomelogado(),
                    chats(),

                    alert('Criado'),



                ).catch((error) => {
                    console.log(error)
                })


        } catch (e) {
            console.log(e)
        }

        //
            
        }


       /* const salas = query(collection(db, "chats"));

        const querySnapshot2 = await getDocs(salas);
        if (querySnapshot2.size != 0) {
            setID(querySnapshot2.size)
        }

        try {
            const salas = query(collection(db, "chats"));

            const querySnapshot2 = await getDocs(salas);
            setID(querySnapshot2.size)

            console.log('Iniciando chat')
            console.log('nome', nome)


            const docRef = doc(db, "chats", nome + userlog + id + 1);

            const envia = {
                participantes: [userlog , refEmail],
                documentId: nome + userlog + id + 1,
                status: 'Pessoa'
            };
            setDoc(docRef, envia)

                .then(

                    nomelogado(),
                    chats(),

                    alert('Criado'),



                ).catch((error) => {
                    console.log(error)
                })


        } catch (e) {
            console.log(e)
        }
        */
    



    const StartChat = async () => {




        const salas = query(collection(db, "chats"));

        const querySnapshot2 = await getDocs(salas);
        if (querySnapshot2.size != 0) {
            setID(querySnapshot2.size)
        }

        try {
            const salas = query(collection(db, "chats"));

            const querySnapshot2 = await getDocs(salas);
            setID(querySnapshot2.size)

            console.log('Iniciando chat')
            console.log('nome', nome)


            const docRef = doc(db, "chats", nome + userlog + id + 1);
            const envia = {
                nome: 'teste3',
                Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXESbTGMa4YLH_sNx3D4AUylVdUaprBuDfCQ&usqp=CAU',
                documentId: nome + userlog + id + 1,
                status: 'Grupos',
                participantes: [userlog]
            };
            setDoc(docRef, envia)

                .then(

                    nomelogado(),
                    chats(),

                    alert('Criado'),



                ).catch((error) => {
                    console.log(error)
                })


        } catch (e) {
            console.log(e)
        }


    }




    const paginachat = (status) => {
        if (status === 'pessoal') {
            // navigation.navigate('')
            console.log(status)
        }
        if (status === 'grupo') {
            //navigation.navigate('')
            console.log(status)
        }

        console.log(status)

    }



    return (
        <View style={styles.container}>


            <FlatList

                data={
                    grupos
                }

                renderItem={(  { item }  ) =>
                    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(`${item.status}`, { idsala: item.documentId, nomesala: item.nome, status: item.status, foto: item.Image })}>
                        <View >
                            {<Image

                                source={item.Image ? { uri: item.Image } : Placeholder}
                                
                                style={{
                                    width: 88,
                                    height: 50,
                                    width: 50,
                                    borderRadius: 100,



                                }}
                            />}




                        </View>
                        <Text>{item.nome}</Text>

                    </TouchableOpacity>

                }

            />



            <TouchableOpacity style={styles.fab} onPress={StartChat}>

                <Ionicons name="add" size={30} style={styles.icone} />


            </TouchableOpacity>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TextInput
                                style={styles.input}
                                placeholder='Digite o e-mail do usuário'
                                type="email"
                                autoCorrect={false}
                                onChangeText={(text) => setRefEmail(text)}
                                value={refEmail}>

                                </TextInput>
                            <Pressable style={styles.botao} onPress={ startpessoalchat}>
                                <Text style={styles.txtBtn} >OK</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>

    )
}

export default Mensagens