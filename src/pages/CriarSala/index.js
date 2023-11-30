import React from "react";
import { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Icon, ImageBackground } from 'react-native';
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import styles from './styles';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from '../../config/firebase';
import { Button } from "react-native";


//nao usada mais

export default function CriarSalaCorrida({ navigation }) {

  const image = { uri: './img/run_background' };
  const auth = getAuth();
  const [membros, setMembros] = useState('')
  const [nomeCorrida, setNomeCorrida] = useState('')
  const [descricao, setDescricao] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState(new Date());
  const [idSala, setUser] = useState('')

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true
    });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setUser(user.uid)
    } else {
      console.log('ninguem logado.')
    }
  }
  );

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleverificacampos = async () => {
    if (membros === "" || descricao === "") {
      alert('Por favor verifique os campos')
    } else {

      const docRef = doc(db, "Atividades", idSala, "Corrida", nomeCorrida);
      const envia = {
        descricao: descricao,
        nomeCorrida: nomeCorrida,
        Id: idSala,
        membros: membros
      };
      setDoc(docRef, envia)

        .then(

          alert('Cadastrado com sucesso, tenha uma boa experiência!!!'),


        ).catch((error) => {
          setErrorLogin(true)
          let errorCode = error.code;
          let errorMassage = error.message;
        })
    }
  }



  return (


    <SafeAreaView style={styles.backgroundCorrida}>
      <ScrollView>
      <ImageBackground source={require('../img/run_background.jpg')} resizeMode={'cover'} imageStyle={{ opacity: 0.3, }}>
        <View style={styles.container2}>
          <TextInput style={styles.input}
            onChangeText={setNomeCorrida}
            value={nomeCorrida}
            placeholder="Nome da Sala"
          />

            <TextInput
              style={styles.textArea}
              multiline={true}
              numberOfLines={5}
              onChangeText={setDescricao}
              value={descricao}
              placeholder="Descrição da atividade"
            />
        </View>
        <View style={styles.container3}>
        <View style={styles.teste}>
        <TouchableOpacity style={styles.botao} >
          <Text style={styles.botaoBuscarCriar}><MaterialCommunityIcons name="run" color={"white"} size={20} />Percurso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={showDatepicker} >
          <Text style={styles.botaoBuscarCriar}><MaterialCommunityIcons name="calendar" color={"white"} size={20} />Data</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.teste}>
        <TouchableOpacity style={styles.botao} onPress={showTimepicker}>
          <Text style={styles.botaoBuscarCriar}><MaterialCommunityIcons name="clock" color={"white"} size={20} />Hora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoBuscarCriar}><MaterialCommunityIcons name="human" color={"white"} size={20} />Máx</Text>
        </TouchableOpacity>
        
        </View>
        <TouchableOpacity onPress={handleverificacampos} style={styles.botao}>
          <Text style={styles.botaoBuscarCriar}><MaterialCommunityIcons name="check" color={"white"} size={20} />Criar</Text>
        </TouchableOpacity>
        </View>
        
        </ImageBackground>
        </ScrollView>
    </SafeAreaView>

  )
}
