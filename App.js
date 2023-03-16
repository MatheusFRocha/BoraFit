import React from 'react';
import { View, TouchableOpacity, TextInput, KeyboardAvoidingView, Text, StyleSheet, Image, Button, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => (



  <View style={styles.containerfundo}
  >

    <StatusBar>

    </StatusBar>
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



          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}

          >
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>






        </View>


      </View>












    </KeyboardAvoidingView >
  </View>


);



const styles = StyleSheet.create({

  containerfundo: {
    flex: 1,
    flexDirection: 'column'



  },
  buttonStyle: {


    backgroundColor: "#145D59",
    padding: 10,
    margin: 10,
    borderRadius: 20
  },
  containerLogin: {

    flex: 1,


  },
  fundo: {

    justifyContent: 'center',
    alignItems: 'center',


  },
  logo: {
    padding: 20,
    alignItems: 'center',




  },
  container: {

    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',

  },
  input: {

    backgroundColor: "#E1E1E1",
    color: '#222',
    marginBottom: 15,
    width: '85%',
    fontSize: 17,
    borderRadius: 20,
    padding: 15,
    marginTop: 30

  }, buttonTextStyle: {
    color: '#FFFFFF',
    fontSize: 18,
    width: 180,
    justifyContent: 'center'


  },


});
export default Login;