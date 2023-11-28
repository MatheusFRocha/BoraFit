
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({


container:{
    flex:1,
    width: '100%',
    marginLeft:10,
    marginTop:50,
   


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