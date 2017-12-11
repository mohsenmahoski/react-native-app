import React ,{Component} from 'react';
import {View,Text} from 'react-native';

export default class Camera extends Component{
	render(){
		return(
             <View style={{ flex:1,backgroundColor:'#8e44ad',justifyContent:'center',alignItems:'center' }}>
               <Text> Camera </Text>
             </View>
			);
	}
}