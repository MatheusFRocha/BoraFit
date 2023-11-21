

import { StyleSheet } from "react-native";
const style = StyleSheet.create({

   
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    header:{
      marginTop: 40,
      alignItems: 'center',
      backgroundColor:'#7B7B7B',
      justifyContent: 'center',
      borderWidth: 1,
      
      borderColor:'#00FF47'
      
      

    },
    headercontent:{
     alignItems:'center',
     padding: 15,
     flexDirection: 'row',
     gap: 130,
     
    },
    mens: {
        backgroundColor:'#D9D9D9',
        height: '79.5%'

    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        flexDirection:'row',
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        borderColor:'#00FF47',
        borderWidth:1


    },
    text:{
        width: '80%'
    },
    send:{
        width:'20%',
        marginLeft:40,
     
    },
    
   


});
export default style;
