import React, { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { View } from 'react-native';


export default function Perfil({ navigation, route }) {
    const [perfil, setPerfil] = useState([])
    const database = auth.firestore()



    function criarPerfil(id) {
        database.collection(route.params.idUser).doc(id).create()
    }
    useEffect(() => {
        database.collection(route.params.idUser).onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })

            })
            setPerfil(list)
        })
    }, [])



    return (
        <View></View>
    );
}