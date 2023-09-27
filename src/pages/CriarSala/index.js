import React from "react";
import { useState } from "react";
import {View, Text, SafeAreaView, TextInput, Button} from 'react-native'; 
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import styles from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";


export default function CriarSalaCorrida() {
    const [membros, setMembros] = useState('')
    const [descricao, setDescricao] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


    function handleForm() {
        const dados ={
            membros,
            descricao,
            date,
            time
        }
    

        console.log(dados);
    }



        return (

            
            <SafeAreaView style={styles.background}>
                <View>
                    <Text style={styles.title}>Crie sua sala:</Text>
                    <TextInput 
                    style={styles.input}
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={setDescricao}
                    value={descricao}
                    placeholder="Descrição da Atividade"
                    />
                    <TextInput style={styles.input}
                    onChangeText={setMembros}
                    value={membros}
                    placeholder="Participantes Máx 99"
                    keyboardType="numeric"
                    maxLength={2}
                    />
                </View>
                    <TouchableOpacity style={styles.botao} onPress={showDatepicker}>
                        <Text style={styles.botaoBuscarCriar}>Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={showTimepicker}>
                        <Text style={styles.botaoBuscarCriar}>Hora</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={showTimepicker}>
                        <Text style={styles.botaoBuscarCriar}>Criar</Text>
                    </TouchableOpacity>
            </SafeAreaView>
            
        )
}
