import React from 'react';
import { View, TouchableOpacity, TextInput, KeyboardAvoidingView, Text, StyleSheet, Image, ImageBackground } from 'react-native';

const Login = () => (



  <ImageBackground style={styles.containerfundo}
    source={require('./src/img/fundo.png')}

  >
    <KeyboardAvoidingView style={styles.containerLogin}>

      <View style={styles.logo}>
        <Image
          source={require('./src/img/logo.png')}

        />

      </View>

      <View style={styles.fundo}>





        <View style={styles.container}>

          <TextInput style={styles.input}

            placeholder="Email"
            autoCorrect={false}
            onChangeText={() => { }}
          />

          <TextInput
            style={styles.input}

            placeholder="Senha"
            autoCorrect={false}
            onChangeText={() => { }}
          />

          <TouchableOpacity>
            <Text> Acessar </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>  Criar Conta </Text>
          </TouchableOpacity>
        </View>


      </View>

    </KeyboardAvoidingView >
  </ImageBackground>


);



const styles = StyleSheet.create({

  containerfundo: {
    flex: 1,
    flexDirection: 'column'



  },
  containerLogin: {

    flex: 1,
    width: '100%'

  },
  fundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blac'
  },
  logo: {
    alignItems: 'center'


  },
  container: {

    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',

  },
  input: {

    backgroundColor: "#FFF",
    color: '#222',
    marginBottom: 15,
    width: '90%',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    marginTop: 10
  }

});
export default Login;