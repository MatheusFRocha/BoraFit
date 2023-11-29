import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex:1
    },
    mapContainer: {
        flex:1
    },
    map: {
        height: '50%'
        
    },
    mapStyle: {
    
        flex: 1,
    
    

    },

    image: {
        flex:1,
        justifyContent:'center'
    },
    title:{
        marginTop: 15,
        paddingBottom:10,
        fontSize:25,
        textAlign:'center',
        color: 'green'
    },titleSala:{
        alignItems: 'center',
        marginTop:10,
        backgroundColor: '#00bf6370',
        padding: 10,
        marginHorizontal: 16,
        borderRadius: 20
    },
    titleLists:{
        marginTop: 25,
        paddingBottom:10,
        fontSize:25,
        textAlign:'center',
        color: 'green'
    },
    listaSala: {
        alignItems: 'center',

        backgroundColor: '#00bf6370',
        padding: 20,
        marginHorizontal: 16,

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
    search: {
        backgroundColor: '#3CB371',
        height: '40%'
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
