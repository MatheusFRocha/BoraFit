import react from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles.js';
import { SafeAreaView} from 'react-native-safe-area-context';
import Sports from '../Components/Sports';

export default function Categorias(){

    return(

        <SafeAreaView style={styles.background}>

            <View>
                <Text style={styles.title}>Modalidades</Text>
            </View>

            <ScrollView>
            <View style={{flexDirection: 'column', justifyContent:'space-around'}}>
                <Sports/>
            </View>
            </ScrollView>

        </SafeAreaView>

    )

}