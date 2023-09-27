import react from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles.js';
import { SafeAreaView} from 'react-native-safe-area-context';

export default function Categorias({navigation}){

  

    async function Lobby() {
        navigation.navigate("Lobby")

    };

    return(

        <SafeAreaView style={styles.background}>

            <View>
                <Text style={styles.title}>Modalidades</Text>
            </View>

            <ScrollView>
            <TouchableOpacity onPress={Lobby} style={styles.containerImg}>
            <Image
              style={styles.imgSports}
              source={require('../img/correr.jpg')} />
            </TouchableOpacity>
      
            <TouchableOpacity onPress={Lobby} style={styles.containerImg}>
            <Image
              style={styles.imgSports}
              source={require('../img/fut.jpg')} />
            </TouchableOpacity>
      
            <TouchableOpacity onPress={Lobby} style={styles.containerImg}>
            <Image
              style={styles.imgSports}
              source={require('../img/muscle.jpg')} />
            </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>

    )

}