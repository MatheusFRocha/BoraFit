

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    containerLogo: {
        flex: 0.7,
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
    botao: {
        backgroundColor: 'green',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        borderRadius: 7,
        marginTop: 50,

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
    }, RegistroTexttitle: {
        marginBottom: 70,
        color: 'green'
    },
    image:{
        borderRadius:75,
        width:150,
        height:150,
        borderWidth: 5
    }


});
export default styles;
