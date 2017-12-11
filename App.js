import React , {Component} from 'react';
import {AppRegistry,View} from 'react-native';
import Main from './components/Main';


export default class App extends Component{
render(){
		  
		return(
			
			    <Main />
			
			);
	}
} 
 


AppRegistry.registerComponent('AndroidApp' , () => App);