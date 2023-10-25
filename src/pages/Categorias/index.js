
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles.js';
import { SafeAreaView} from 'react-native-safe-area-context';

import { FlatList } from 'react-native';
import { useState } from 'react';

export default function Categorias({navigation}){


    const [url, setUrl] = useState ('')
    


    return(

        <SafeAreaView style={styles.background}>

            <View>
                <Text style={styles.title}>Modalidades</Text>
          
            

            <FlatList 
                data={
                    [
                        {id:1 , esporte:'Corrida' , img:'https://pacefit.com.br/wp-content/uploads/2018/02/Meus-primeiros-10km.jpg.webp'},
                        {id:2 , esporte:'Futebol' , img:'https://ecosdanoticia.net/wp-content/uploads/2016/07/futsal-pelada-1-1392x835.jpg'},
                        {id:3 , esporte:'Musculação' , img:'https://alexandrekusabara.com.br/wp-content/uploads/2019/10/musculacao.jpg'},
                        {id:4 , esporte:'Pedal' , img:'https://blog.diasbike.com.br/wp-content/uploads/2021/04/Gravel-3.jpg'},
                        
                       
                    ]
                    
                }
                renderItem={({item} ) => <TouchableOpacity onPress={() => navigation.navigate("Lobby", {id:item.id, esporte:item.esporte} ) } style={styles.containerImg} key={item.id} >
                  

                
                <Image
                style={styles.imgSports}
                source={{ uri: item.img }}
                />



                </TouchableOpacity>
              
            
            }

           />
           

           </View>

          
                

         
           

        </SafeAreaView>

    )

}