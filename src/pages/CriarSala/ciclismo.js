import React from "react";
import { useState, useEffect } from "react";
import { Modal, Pressable, View, Text, TextInput, ImageBackground } from 'react-native';
import styles from './styles';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc, collection } from "firebase/firestore";
import { db } from '../../config/firebase';
import DateTimePicker from 'react-native-ui-datepicker';
import { storage } from '../../config/firebase';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { where, query, getDocs } from "firebase/firestore";


export default function Ciclismo({ navigation, route }) {

  const { destino, destinoDois, dist } = route.params;

  const [inicio, setInicio] = useState();
  const [final, setFinal] = useState();
  const [distance, setDistance] = useState();
  const auth = getAuth();
  const [membros, setMembros] = useState(0);
  const [nomeCiclismo, setNomeCiclismo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [value, setValue] = useState();
  const [idSala, setUser] = useState('');
  const [modalCalendarVisible, setModalCalendarVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [dataSala, setDataSala] = useState();
  const [horaSala, setHoraSala] = useState();
  const [image, setImage] = useState('')
  const [progress, setProgress] = useState(0)
  const [nome, setNome] = useState()
  const [idgruposala, setID] = useState(0)

  useEffect(() => {
    setInicio(destino);
    setFinal(destinoDois);
    setDistance(dist);


    verificaid()
    nomelogado()


  })

  const verificaid = async () => {
    console.log('entrou')
    const salas = query(collection(db, "chats"));


    const querySnapshot2 = await getDocs(salas);


    //console.log('snap',querySnapshot2.size)
    setID(querySnapshot2.size + 1)


  }

  const mapChange = () => {
    navigation.navigate('MapCiclismo')

  }


  const showdata = async () => {

    if (value != "") {
      setModalCalendarVisible(!modalCalendarVisible);

      var resultado = value.split(" ");

      var dataRs = resultado[0];
      var horaRs = resultado[1];

      setDataSala(dataRs);
      setHoraSala(horaRs)

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

  // verifica o nome da pessoa logada
  async function nomelogado() {
    const q = query(collection(db, "Perfil"), where("Id", "==", idSala));
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
  //




  const handleverificacampos = async () => {


    if (membros === "" || descricao === "") {
      alert('Por favor verifique os campos')
    } else {

      const docRef = doc(db, "Salas", "ciclismo", "sala", nomeCiclismo);
      const envia = {
        descricao: descricao,
        nomeCiclismo: nomeCiclismo,
        criador: idSala,
        membros: membros,
        dataGrupo: dataSala,
        horaGrupo: horaSala,
        inicioPercurso: inicio,
        finalPercurso: final,
        participantes: [idSala],
        distancia: distance,
        Image: image,







      };

      setDoc(docRef, envia)

        .then(

          alert('Cadastrado com sucesso, tenha uma boa experiência!!!'),
          criargruposala()


        ).catch((error) => {
          setErrorLogin(true)
          let errorCode = error.code;
          let errorMassage = error.message;
        })
    }
  }



  //


  // Imagem grupo 
  async function pickImage() {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({

      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {

      await handlefoto(result.assets[0].uri, "image")

    }
  }
  async function handlefoto(uri, fileType) {

    const response = await fetch(uri)
    const blob = await response.blob();
    const storageRef = ref(storage, "grupo/" + new Date().getTime())
    const uploadTask = uploadBytesResumable(storageRef, blob)


    uploadTask.on("state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed())
      },
      (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL)

        });
      }
    )
  }



  //


  // criargruposala


  const criargruposala = async () => {



    try {


      const docRef = doc(db, `chats/${nome + idSala + idgruposala} `);

      const envia = {
        nome: nomeCiclismo,
        Image: image,
        documentId: nome + idSala + idgruposala,
        participantes: [idSala],
        descricao: descricao,
        status: "Grupos"
      };
      setDoc(docRef, envia)

        .then(



          navigation.navigate("Home")



        ).catch((error) => {
          console.log(error)
        })


    } catch (e) {
      console.log(e)
    }
  }



  //

  return (


    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../img/bike_background.jpg')} imageStyle={{ opacity: 0.4, }}>
        <ScrollView>
          <TextInput style={styles.input}
            onChangeText={setNomeCiclismo}
            value={nomeCiclismo}
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
            <TouchableOpacity style={styles.botao} onPress={mapChange} >
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

            <TouchableOpacity onPress={pickImage} style={styles.botao}>
              <Text style={styles.txtBtn}><MaterialCommunityIcons name="camera" color={"#000"} size={20} /> Imagem</Text>
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
                      locale={'pt_br'}
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