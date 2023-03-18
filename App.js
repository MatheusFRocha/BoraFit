import React, { useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard
} from 'react-native';



export default function Bora() {

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));

  const [opacity] = useState(new Animated.Value(0));





  useEffect(() => {


    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,



      })


    ]).start();

  }, [])



  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image style={{ width: 200, height: 135 }}


          source={require('./src/img/logo.png')}
        >

        </Image>

      </View>



      <Animated.View style={[styles.container,
      {

        opacity: opacity,
        transform: [
          {
            translateY: offset.y
          }
        ]
      }




      ]}>

        <TextInput style={styles.input}
          placeholder='Email'
          autoCorrect={false}
          onChangeText={() => { }}
        />



        <TextInput style={styles.input}
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={() => { }}

        />


        <TouchableOpacity style={styles.botao} >
          <Text style={styles.botaoenvio} >Acesso</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoRegistro} >
          <Text style={styles.RegistroText}>Crie uma conta agora</Text>
        </TouchableOpacity>





      </Animated.View>





    </KeyboardAvoidingView >



  );
}
const styles = StyleSheet.create({
  background: {
    flex: 0.9,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',

  },
  container: {
    flex: 1,

    alignItems: 'center',
    width: '90%',
    marginTop: 0,
    paddingBottom: 30,



  },
  input: {
    backgroundColor: '#E1E1E1',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,

  },
  botao: {
    backgroundColor: 'green',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 7,

  },
  botaoenvio: {
    color: '#fff',
    fontSize: 18,

  },
  botaoRegistro: {
    marginTop: 10,
    color: '#fff',

  },
  RegistroText: {
    color: 'green'
  }


});