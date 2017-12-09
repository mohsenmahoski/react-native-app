import {StyleSheet} from 'react-native';

 const styles=StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
  },
  container: {
  	flex:1,
  	justifyContent:'center',
    
  },
  title: {
    fontFamily:'IRANSansMobile_Bold',
    fontSize: 19,
    fontWeight: 'bold',
  },
  item: {
   flexGrow:1,
   height:100,
  },
  login:{
  	  flex:1,
      marginRight:50,
      marginLeft:50,
      backgroundColor:'#fff',
      borderRadius:5,
      elevation:6,
      paddingBottom:50,
  },
  centertitle:{
    fontFamily:'IRANSansMobile_Bold',
  	textAlign:'center',
  	fontSize:19,
  	color:'#333',
  	borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },

 label:{
  fontFamily:'IRANSansMobile_Medium',
 	textAlign:'right',
 	fontSize:15,
 	color:'#2D2C2D',
 	marginRight:20,
 	marginTop:20,
 	marginBottom:5,
 },
 textInput:{
   marginRight:20,
   marginLeft:20,
   borderColor:'#8B8A8B',
   borderWidth:1,
   padding:10,
   textAlign:'right',
   fontFamily:'IRANSansMobile_Light',
 },
 box:{
 	
 },
 Button:{
  fontFamily:'IRANSansMobile',
  marginRight:25,
  marginLeft:25,
  marginTop:30,
  marginBottom:10,
  padding:15,
  textAlign:'center',
  backgroundColor:'#7B1FA2',
  borderRadius:25,
  color:'#FFF',
  elevation:5,
 },
 Hbutton:{
  marginRight:25,
  marginLeft:25,
  marginTop:30,
  marginBottom:10,
  padding:15,
  backgroundColor:'#7B1FA2',
  borderRadius:25,
  elevation:5,
 },
 Htext:{
  textAlign:'center',
  fontFamily:'IRANSansMobile',
 },
 forgetPassword:{
  padding:5,
  textAlign:'center',
  fontFamily:'IRANSansMobile_Light',
 },

});
 export default styles;