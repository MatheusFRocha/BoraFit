
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, Image, Button, FlatList, SafeAreaView } from 'react-native';
import Placeholder from '../../../assets/Placeholder.jpg'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';


import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection,updateDoc, where, setDoc, doc, getDocs, onSnapshot, DocumentData, documentId, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from '../../config/firebase';
import style from './styles'
import { useLayoutEffect } from 'react';
import { createdAt } from 'expo-updates';
import styles from '../Mensagens/styles';
import { query, orderBy, limit } from "firebase/firestore";
import { List } from 'react-admin';
import {  Pressable} from 'react-native';

const Grupos = ({ navigation, route }) => {

  // const [image, setImage] = useState('')
  const auth = getAuth();
  const [userlog, setUser] = useState('')
  const [msg, setMsg] = useState('')
  const [mensagemtxt, setMensagemtxt] = useState('');
  const [messages, setMessages] = useState([]);
  const { nomesala, idsala, status, foto } = route.params
  const [nome, setNome] = useState('')
  const [pessoasnogrupo, setPessoasNoGrupo] = useState([])


 

  useLayoutEffect(() => {
    const m = query(collection(db, `chats/${idsala}/messages`));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid)


      } else {
        console.log('ninguem logado.')
      }
    }
    );



    nomehandle();
    mensagens();
    verificamembros()
   

  })

  const verificamembros = async () => {
    //
    const colecao = query(collection(db, 'chats'), where("documentId", "==", idsala));
    const querySnapshotteste = await getDocs(colecao)

    querySnapshotteste.forEach((doc) => {
      const dados = (doc.id, " => ", doc.data());

      setPessoasNoGrupo(dados.participantes)

    })



    //
  }


  const nomehandle = async () => {
    const q = query(collection(db, "Perfil"), where("Id", "==", userlog));

    const querySnapshot = await getDocs(q);
    const list = []
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

  const mensagens = async () => {



    const m = query(collection(db, `chats/${idsala}/messages`));
    const q = query(m, orderBy("hora", "asc"))
    const querymsg = await getDocs(q);
    const list = []
    try {
      querymsg.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setMessages(list)
    } catch {
      alert('error')
    }


  }

  const mdandarMensagem = async () => {
    

    const msgref = collection(db, `chats/${idsala}/messages`);

    const envia = {
      message: mensagemtxt,
      envio: userlog,
      hora: serverTimestamp()

    };

    addDoc(msgref, envia)

    setMensagemtxt('')

    




  }
  









  return (

    <View>

      <View style={style.header}>


        <View style={style.headercontent}>
          {<Image

            source={foto ? { uri: foto } : Placeholder}

            style={{
              width: 88,
              height: 50,
              width: 50,
              borderRadius: 25,



            }}
          />}


          <Text> {nomesala}</Text>



          <TouchableOpacity onPress={''}>
            <MaterialCommunityIcons name="account-cog" />
          </TouchableOpacity>
        </View>
      </View>


      <View style={style.mens}>
        <FlatList
          data={
            messages
          }

          renderItem={({ item }) =>
            <View style={[style.messageContainer, item.envio == userlog ? style.userMessageContainer : style.otherMessageContainer]}>
              <Text style={style.messagetext}> {item.message}</Text>
              <Text style={style.time}> {item.hora?.toDate().toLocaleDateString()}</Text>

            </View>

          }



        />
      </View>




      <View style={style.input}>
        <TextInput style={style.text}
          placeholder='escreva uma mensagem'
          type="text"
          autoCorrect={false}
          onChangeText={(text) => setMensagemtxt(text)}
          value={mensagemtxt}

        />

        <Pressable style={style.send} onPress={mdandarMensagem}>
          <Text> Enviar </Text>
        </Pressable>

      </View>











    </View>




  )
}

export default Grupos