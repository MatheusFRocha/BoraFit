import React, { useState} from 'react';
import { View, TouchableOpacity, Text, TextInput, Image,Button } from 'react-native';
import style from './styles.js'
import styles from '../Login/styles.js';
import Placeholder from '../../../assets/Placeholder.jpg'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feather } from '@expo/vector-icons';

export default function Mensagens() {
    const [image, setImage] = useState('')
    const [msg, setMsg] = useState('')

 
    
    return (

       <View>

            <View style={style.header}> 

                
                <View style={style.headercontent}>
                { <Image 
                    
                    source={image? {uri:image}: Placeholder }
                    
                    style={{   width: 88,
                        height:50,
                        width:50,
                        borderRadius: 25,
                        
                        
                        
                        }}
                        />}
                        <Text> Caio</Text>
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
        
        
        
   
    )
}


