import { addDoc, collection, DocumentData, doc, setDoc, where, getDocs, onSnapshot, query,arrayRemove, serverTimestamp, orderBy, updateDoc,arrayUnion } from 'firebase/firestore'
import React, { useLayoutEffect, useState } from 'react'
import { View, Text, TextInput, Button, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { db } from '../../config/firebase';
import { getAuth } from 'firebase/auth';
import style from './styles';
import { Placeholder } from 'react-admin';
import { useParams } from 'react-router-dom'
import { FlatList } from 'react-native-gesture-handler';
const Grupos = ({ navigation, route }) => {
    const { id, foto } = route.params
    const { nome } = route.params




    const auth = getAuth()
    const user = auth.currentUser
    const idlogado = user.uid
    const [nomeloogado, setNome] = useState()
    const [pessoasnogrupo, setPessoasNoGrupo] = useState([])




    const [messages, setMesseages] = useState<DocumentData[]>([])
    const [message, setMessage] = useState('')

    useLayoutEffect(() => {
        nomelogado()


        const msgcollectionRef = collection(db, `chats/${id}/mensagens`);
        const q = query(msgcollectionRef, orderBy('createdAt'))

        const unsubscribe = onSnapshot(q, (chats: DocumentData) => {
            const messages = chats.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });

            setMesseages(messages)
        })


        return (unsubscribe)

    }, [])
    async function nomelogado() {
        const q = query(collection(db, "Perfil"), where("Id", "==", idlogado ));
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


    const saiirgrupo = async () => {
        const q = query(collection(db, "Perfil"), where("Id", "==", idlogado));

        const querySnapshot = await getDocs(q);
        const list = []
        try {
            querySnapshot.forEach((doc) => {
                const dados = (doc.id, " => ", doc.data());
                setPessoasNoGrupo(dados.participantes)
            }
            );
        } catch {
            alert('error')
        }

       
        const docRef = doc(db, "chats", id);
       
        updateDoc(docRef, {participantes:arrayRemove(idlogado)})
            .then(
                navigation.navigate("Home")
            ).catch((error) => {
                console.log(error)
            })
    }
    const enviaMenssagem = async () => {
//nome


//



        const msg = message.trim();
        if (msg.length === 0) return;
        const msgcollectionRef = collection(db, `chats/${id}/mensagens`);
        addDoc(msgcollectionRef, {
            message: msg,
            envio: idlogado,
            user:nomeloogado,
            createdAt: serverTimestamp(),
        })
        setMessage('')
    }


    const renderMessage = ({ item }: { item: DocumentData }) => {
        const mymessage = item.envio === idlogado
        return (

            <View style={[style.messageContainer, mymessage ? style.userMessageContainer : style.otherMessageContainer]}>

                <Text style={style.messagetext}> {item.message}</Text>
                <View style={style.infomsg}>
                    <Text style={style.time}> {item.user}</Text>
                    <Text style={style.time}> {item.createdAt?.toDate().toLocaleString()}</Text>

                </View>


            </View>
        )

    }



    return (
        <KeyboardAvoidingView style={style.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={20}
        >
            <View style={style.headercontent}>

                <Image
                    style={style.img}

                    source={foto ? { uri: foto } : { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_M9x0L2kFj01CFNFkGHSx7BJY-689TH_r7Q&usqp=CAU' }} />

                <Text> {nome}</Text>

                <TouchableOpacity onPress={saiirgrupo}>
                    <Text> sair</Text>
                </TouchableOpacity>


            </View>

            <FlatList data={messages} keyExtractor={(item) => item.id} renderItem={renderMessage} />
            <View style={style.inputContainer}>
                <TextInput value={message} style={style.messageInput}
                    onChangeText={(text) => setMessage(text)} placeholder="Envie uma mensagem"
                />
                <Button disabled={message === ''} title='Enviar' onPress={enviaMenssagem} />
            </View>

        </KeyboardAvoidingView>
    )
}

export default Grupos