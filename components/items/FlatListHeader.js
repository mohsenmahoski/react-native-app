import React , {Component} from 'react';
import {View , Text , StyleSheet } from 'react-native';

export default class Header extends Component{
	render(){
		return(
             <View style={styles.container}>
             	<Text style={styles.HederText} >مجله آموزشی</Text>
             </View>
			);
	}
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#6b52ae',
		height:50,
		justifyContent:'center',
		alignItems:'center',
	},
	HederText:{
		fontFamily:'IRANSansMobile_Bold',
		fontSize:14,
		color:'white',
	}
});