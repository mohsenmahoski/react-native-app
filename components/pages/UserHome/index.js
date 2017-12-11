import React ,{Component} from 'react';
import {View,Text} from 'react-native';

export default class UserHome extends Component{
	render(){
		return(
             <View style={{ flex:1,backgroundColor:'#16a085',justifyContent:'center',alignItems:'center' }}>
               <Text> UserHome </Text>
             </View>
			);
	}
}