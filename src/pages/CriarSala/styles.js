

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    title:{
        marginTop: 15,
        paddingBottom:10,
        fontSize:25,
        textAlign:'center',
        color: 'green'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        width: '50%',
        marginTop: '10%',
        marginLeft: '25%',
        paddingBottom: 10,
    },
    input: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
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
        color: '#fff',
        fontSize: 25

    },
    containerLogo: {
        alignItems: 'center',
        flex: 0.7,
        justifyContent: 'center',

    },
    botao: {
        backgroundColor: 'green',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        borderRadius: 7,
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    botaoBuscarCriar: {
        color: '#fff',
        fontSize: 18,

    }



});
export default styles;
