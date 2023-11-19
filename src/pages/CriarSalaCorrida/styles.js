import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex:1
    },
    image: {
        flex:1,
        justifyContent:'center'
    },
    input: {
        marginLeft: 'auto',
        padding: 10,
        marginRight: 'auto',
        marginTop: 25,
        width: '85%',
        borderBottomWidth: 3,
        borderBottomColor: "#00bf63"

    },
    textArea: {
        marginTop: 25,
        width: '85%',
        textAlignVertical: 'top',
        height: 150,
        paddingLeft: 10,
        paddingTop: 5,
        borderStyle: "solid",
        borderColor: '#00bf63',
        borderWidth: 3,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20
    },
    txtBtn: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    botao: {
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth: 4,
        borderRadius: 20,
        backgroundColor: '#00bf63',
        marginTop: 25,
        height: 50,
        width: 125,
        alignItems: 'center',
        paddingTop: 8

    },
    viewBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
    }

});
export default styles;
