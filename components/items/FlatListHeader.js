import React , {Component} from 'react';
import {View , Text , StyleSheet } from 'react-native';

export default class Header extends Component{
	render(){
		return(
             <View style={styles.container}>
             	<Text style={styles.HederText} >sssss</Text>
             </View>
			);
	}
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'#eaf2f5',
		height:50,
		justifyContent:'center',
		alignItems:'center',
	},
	HederText:{
		color:'white',
	}
});