

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        width: '50%',
    
        marginLeft: '25%',
        paddingBottom: 10,

    },
    input: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        height: 50,
        padding: 10,
        height: 50,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: "green"

    },

    botaoRegistro: {
        marginTop: 10,
        color: '#fff',

    },
    RegistroText: {
        padding: 40,
        color: 'green',
        fontSize: 25

    },
    containerLogo: {
        alignItems: 'center',
        marginTop:0,
        justifyContent: 'center',

    },
    botao: {
        backgroundColor: 'green',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        borderRadius: 7,
        marginTop: 50,

    },
    botaoBuscarCriar: {
        color: '#fff',
        fontSize: 18,

    }



});
export default styles;
