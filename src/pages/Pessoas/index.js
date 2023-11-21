
import React, { useState} from 'react';
import { View, TouchableOpacity, Text, TextInput, Image,Button } from 'react-native';
import style from './styles.js'
import styles from '../Login/styles.js';
import Placeholder from '../../../assets/Placeholder.jpg'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
const Pessoa = ({navigation, route}) => {

    const [image, setImage] = useState('')
    const [msg, setMsg] = useState('')
    const {nomesala, idsala, status,foto} = route.params
    console.log(foto)

    
    return (
        <SafeAreaView>
       <View>

            <View style={style.header}> 

                
                <View style={style.headercontent}>
                { <Image 
                    
                    source={foto? {uri:foto}: Placeholder }
                    
                    style={{   width: 88,
                        height:50,
                        width:50,
                        borderRadius: 25,
                        
                        
                        
                        }}
                        />}

                    
                        <Text> {nomesala}</Text>
                        


                       <TouchableOpacity >
                       <MaterialCommunityIcons name="account-cog"  />
                       </TouchableOpacity>
                </View>
            </View>


            <View style={style.mens}>
                    <Text> teste</Text>
            </View>


            <View style={style.input}>
              <TextInput  style={style.text}
                    placeholder='escreva uma mensagem'
                    type="text"
                    autoCorrect={false}
                    onChangeText={(text) => setMsg(text)}
                    value={msg}

                />
                
                <TouchableOpacity style={style.send}>
                  <Feather name="send" size={24} color="black" />
                </TouchableOpacity>

            </View>

            
                        
            






            
       </View>
     </SafeAreaView>
        
        
   
    )
}

export default Pessoa