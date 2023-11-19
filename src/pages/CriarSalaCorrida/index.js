import React from "react"; 
import { useState, useEffect } from "react";
import { Modal, Pressable, View, Text, TextInput, ImageBackground} from 'react-native';
import styles from './styles';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from '../../config/firebase';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

export default function CriarSalaCorrida({ navigation }) {
 

  const auth = getAuth();
  const [membros, setMembros] = useState(0);
  const [nomeCorrida, setNomeCorrida] = useState('')
  const [descricao, setDescricao] = useState('')
  const [value, setValue] = useState(dayjs());
  const [dataRs, setData] = useState();
  const [horaRs, setHora] = useState();
  const [idSala, setUser] = useState('');
  const [modalCalendarVisible, setModalCalendarVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


    const showdata = () => {
      if (value != "") {
      setModalCalendarVisible(!modalCalendarVisible);

      var resultado = value.split(" ");

      setData(resultado[0]);
      console.log(dataRs);

      setHora(resultado[1]);
      console.log(horaRs);

      } else {

        console.log('nao deu');
      }
    };

  const handleIncrease = () => {
    
    setMembros((valor) => valor + 1);
  };

  const handleDecrease = () => {
    setMembros(membros - 1);
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


  const handleverificacampos = async () => { 
    if (membros === "" || descricao === "") {
      alert('Por favor verifique os campos')
    } else {

      const docRef = doc(db, "Atividades", idSala, "Corrida", nomeCorrida);
      const envia = {
        descricao: descricao,
        nomeCorrida: nomeCorrida,
        Id: idSala,
        membros: membros,
        dataGrupo: dataRs,
        horaGrupo: horaRs

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
    
    
  <View style={styles.container}>
    <ImageBackground style={styles.image} source={require('../img/run_background.jpg')} imageStyle={{ opacity: 0.4, }}>
      <ScrollView>
        <TextInput style={styles.input}
          onChangeText={setNomeCorrida}
          value={nomeCorrida}
          placeholder="Nome da Sala:"
          placeholderTextColor={'#000'}
        />

        <TextInput
          style={styles.textArea}
          multiline={true}
          numberOfLines={5}
          onChangeText={setDescricao}
          value={descricao}
          placeholder="Descrição:"
          placeholderTextColor={'#000'}
        />

        <View style={styles.viewBtn}>
          <TouchableOpacity style={styles.botao} >
            <Text style={styles.txtBtn}><MaterialCommunityIcons name="run" color={"#000"} size={20} /> Percurso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => setModalCalendarVisible(true)}  >
            <Text style={styles.txtBtn}><MaterialCommunityIcons name="calendar" color={"#000"} size={20} /> Data</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewBtn}>

          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.botao}>
            <Text style={styles.txtBtn}><MaterialCommunityIcons name="human" color={"#000"} size={20} /> Máx 10</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewBtn}>
          <TouchableOpacity onPress={handleverificacampos} style={styles.botao}>
            <Text style={styles.txtBtn}><MaterialCommunityIcons name="check" color={"#000"} size={20} /> Criar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleIncrease}>
                  <Text style={styles.txtBtn} ><MaterialCommunityIcons name="plus-box" color={"#00bf63"} size={50} /></Text>
                </Pressable>

                <Text style={styles.txtBtn}>{membros}</Text>


                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handleDecrease}>
                  <Text style={styles.txtBtn} ><MaterialCommunityIcons name="minus-box" color={"#00bf63"} size={50} /></Text>
                </Pressable>

                <Pressable
                  style={styles.botao}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.txtBtn} ><MaterialCommunityIcons name="check" color={"#000"} size={20} />Feito</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalCalendarVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.containerCalendar}>
                  <DateTimePicker
                    locale={'en'}
                    mode={'datetime'}
                    value={value}
                    onValueChange={(date) => setValue(date)}
                  />
                </View>
                <Pressable
                  style={styles.botao}
                  onPress={showdata}>
                  <Text style={styles.txtBtn} ><MaterialCommunityIcons name="check" color={"#000"} size={20} />Feito</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </ImageBackground>
  </View>
)
};
