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

  const [logo] = useState(new Animated.ValueXY({ x: 300, y: 135 }));



  useEffect(() => {
    KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', KeyboardDidShow);
    KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);


    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,



      })


    ]).start();

  }, [])
  function KeyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 150,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 135,
        duration: 100,


      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 300,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 135,
        duration: 100,

      })
    ]).start();
  }


  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{ width: logo.x, height: logo.y, }

          }

          source={require('./src/img/logo.png')}
        >

        </Animated.Image>

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