

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    background: {
        flex: 1,
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
    botaodisable: {
        backgroundColor: 'gray',
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
export default styles;
