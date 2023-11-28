

import { StyleSheet } from "react-native";
const style = StyleSheet.create({

   
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    header:{
      
      alignItems: 'center',
      backgroundColor:'#7B7B7B',
      justifyContent: 'center',
      borderWidth: 1,
      height: '10%',
      borderColor:'#00FF47',
      
      

    },
    headercontent:{
     alignItems:'center',
     padding: 15,
     flexDirection: 'row',
     gap: 130,
     
     
    },
    mens: {
        backgroundColor:'#D9D9D9',
        height: '83%',

    },
    input: {
        height: '7%',
        backgroundColor: '#fff',
        width: '100%',
        flexDirection:'row',
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 5,
        borderColor:'#00FF47',
        borderWidth:1,
        
        alignItems:"center",

    },
    text:{
        width: '80%'
    },
    send:{
        width:'20%',
        marginLeft:40,
     
    },card:{
        padding:20,
        height:120,
        backgroundColor:'#fff',
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        gap:30
        
        
    },
    messageContainer:{
        padding:10,
        marginTop:10,
        marginHorizontal:10,
        borderRadius:10,
        maxWidth: '80%',
    },
    otherMessageContainer:{
        backgroundColor:'#fff',
        alignSelf:'flex-end'
    },
    userMessageContainer:{
        backgroundColor:'#dcf8c6'
    },
    messagetext:{
        fontSize:16,

    },
    time:{
        fontSize:12,
        color:'#777',
        alignSelf:'flex-end'
    }
    
   


});
export default style;
