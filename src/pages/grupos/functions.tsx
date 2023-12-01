import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, TextInput, Image, Button, FlatList, SafeAreaView } from 'react-native';
import style from './styles';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, where, setDoc, doc, query, getDocs, onSnapshot, DocumentData, documentId, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from '../../config/firebase';
import { orderBy, limit } from "firebase/firestore";
import { Placeholder } from 'react-admin';


type Props = {
  status: string,
  idsala: string,
  nomesala: string,
  nome: string,
  foto: string,
  msg: [],
  user; string,
  Place: string

}




const Functions = (props: Props,) => {

  const [messages, setMesseages] = useState([])
  const [message, setMensagemtxt] = useState('');
  const [userlog, setUser] = useState('')
  const [id, setID] = useState(0)
  const auth = getAuth()
  


  useEffect(() => {
    
    const msgcollectionRef = query(collection(db, `chats/${props.idsala}/messages`));

    const unsubscribe = onSnapshot(msgcollectionRef, (chats: DocumentData) => {
      const messages = chats.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setMesseages(messages)
    })


    

  }
  )
 

  const verificaid = async () => {
    
    const salas = query(collection(db, "chats"));


    const querySnapshot2 = await getDocs(salas);


    //console.log('snap',querySnapshot2.size)
    setID(querySnapshot2.size )
    setID(id + 1)


  }

  const enviaMenssagem = async () => {
    verificaid()
    const msg = message.trim();
    if (msg.length === 0) return;

    //const msgcollectionRef = query(collection(db, `chats/${props.idsala}/m`));
    //const docRef = doc(db, `chats/${props.idsala} `);

    const data = {
      message: msg,
      envio: userlog,
      createdAt: serverTimestamp(),
    }

    //await setDoc(doc(db, `chats/ ${props.idsala}/"teste"/${id+1}`), data);
    const docRef = doc(db, `chats/ ${userlog}/message/${id+1}`);
    setDoc(docRef, data)


    
    
    setMensagemtxt('')
    
  }





  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(uid)


    } else {
      console.log('ninguem logado.')
    }
  }
  );

  const renderMessage = ({ item }: { item: DocumentData }) => {

    const mymessage = item.envio === userlog;

    return (
      <View style={[style.messageContainer, mymessage ? style.userMessageContainer : style.otherMessageContainer]}>


        <Text>{item.message}</Text>

      </View>
    )
  }


  return (
   

    <>

      <FlatList

        data={messages}

        keyExtractor={(item) => item.id}

        renderItem={renderMessage}
      />


      
    </>
  )
}

export default Functions