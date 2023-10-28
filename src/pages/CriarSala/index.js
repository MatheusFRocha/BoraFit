import React from "react";
import { useState } from "react";
import {View, Text, SafeAreaView, TextInput, Icon} from 'react-native'; 
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import styles from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




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
      is24Hour: true
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
                    <View style={styles.inputArea}>
                      <TextInput 
                      style={styles.textArea}
                      multiline = {true}
                      numberOfLines = {5}
                      onChangeText={setDescricao}
                      value={descricao}
                      placeholder="Descrição da atividade"
                      />
                    </View>
                    <TextInput style={styles.input}
                    onChangeText={setMembros}
                    value={membros}
                    placeholder="Participantes Máx 99"
                    keyboardType="numeric"
                    maxLength={2}
                    />
                </View>
                    <TouchableOpacity style={styles.botao} >
                        <Text style={styles.botaoBuscarCriar}><MaterialCommunityIcons name="run" color={"white"} size={20} />Percurso</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={showDatepicker} >
                        <Text style={styles.botaoBuscarCriar}><MaterialCommunityIcons name="calendar" color={"white"} size={20} />Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={showTimepicker}>
                        <Text style={styles.botaoBuscarCriar}><MaterialCommunityIcons name="clock" color={"white"} size={20} />Hora</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoBuscarCriar}><MaterialCommunityIcons name="check" color={"white"} size={20} />Criar</Text>
                    </TouchableOpacity>
            </SafeAreaView>
            
        )
}
