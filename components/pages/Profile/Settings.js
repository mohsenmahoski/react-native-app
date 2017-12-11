import React ,{Component} from 'react';
import {View,Text} from 'react-native';


export default class Settings extends Component{
	render(){
		return(
             <View style={{ flex:1,backgroundColor:'#1abc9c',justifyContent:'center',alignItems:'center' }}>
               <Text> Settings </Text>
             </View>
			);
	}
}