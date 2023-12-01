

import { StyleSheet } from "react-native";
const style = StyleSheet.create({

   container:{
    flex:1
   },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    header:{
      
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',

      
      

    },
    headercontent:{
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:"#ddd",
    height:100,
    flexDirection:'row',
    maxWidth: '100%',
  
     
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
        
    },
    userMessageContainer:{
        backgroundColor:'#dcf8c6',
        alignSelf:'flex-end'
    },
    messagetext:{
        fontSize:16,
        

    },
    time:{
        fontSize:12,
        color:'#777',
        alignSelf:'flex-end',
       
    },
    infomsg:{
        fontSize:12,
        color:'#777',
        flexDirection:'row'

    },
    inputContainer:{
        flexDirection:'row',
        padding:10,
        gap:10,
        backgroundColor: '#fff'
    },
    messageInput:{
        flex: 1,
        backgroundColor:'white',
        borderColor:'#ddd',
        borderWidth:1,
        borderRadius:10,
        padding:3

    },
    img:{
        width: 88,
        height: 50,
        width: 50,
        borderRadius: 25,
    }
    
   


});
export default style;
