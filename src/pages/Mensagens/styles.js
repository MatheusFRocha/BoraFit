
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({


container:{
    flex:1,
    width: '100%',
    marginLeft:10,
    marginTop:50,
   


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
fab:{
   //position:'absolute',
   alignSelf:'flex-end',
    width: 56,
    height: 56,
    alignItems: 'center',
    justfyContent:'center',
    right: 15,
    bottom: 10,
    backgroundColor: '#03a9f4',
    borderRadius:30,
    elevation:5
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
    },borderStyle: 'solid',
    borderWidth: 3
    },
    txtBtn: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },

icone:{
    marginTop:'15%'
},

card:{
    padding:20,
    height:120,
    backgroundColor:'#fff',
    marginBottom:10,
    flexDirection:'row',
    alignItems:'center',
    gap:30
    
    
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
secondary:{
    //position:'absolute',
    
    width: 40,
    height: 40,
    alignItems: 'center',
    justfyContent:'center',
    right: 22,
   // marginBottom: 80,
    backgroundColor: '#03a9f4',
    borderRadius:30,
    alignSelf:'flex-end'
    //elevation:5

}


 })
 export default styles;