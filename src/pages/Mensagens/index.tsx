import { DocumentData, collection, onSnapshot, where,query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { db } from '../../config/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ScrollView } from 'react-native-gesture-handler';
import style from './styles';
import { Link } from '@react-navigation/native';



const Mensagens = ({ navigation }) => {
    const [gruposCollection, setgruposCollection] = useState(null)
    const auth = getAuth();
    const user = auth.currentUser;
    const iduser = user.uid
    const [grupos, setGrupos] = useState([])


    useEffect(() => {

       
        const ref = query(collection(db, "chats"), where("participantes", 'array-contains', `${iduser}`));

        const unsubscribe = onSnapshot(ref, (chats: DocumentData) => {
            const grupoData = chats.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            });
            setGrupos(grupoData)

        })
        return unsubscribe;
    }, [])

    return (
        <View style={style.container}>

            <ScrollView>
                {grupos.map((chats) =>
                    <Link  style={style.card}key={chats.id} to={{ screen: 'Grupos', params: ({id:chats.id, nome:chats.nome, foto: chats.Image})}}>
                        
                        <TouchableOpacity >
                            {<Image

                                source={chats.Image ? { uri: chats.Image } : { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_M9x0L2kFj01CFNFkGHSx7BJY-689TH_r7Q&usqp=CAU' }}

                                style={style.img}
                            />}


                            <Text style={style.texto}>{chats.nome}</Text>

                        </TouchableOpacity>


                    </Link>

                )}
            </ScrollView>

        </View>
    )
}

export default Mensagens