import React , {Component} from 'react';
import{Text,View,TextInput,TouchableOpacity,TouchableHighlight,TouchableNativeFeedback} from 'react-native';
import styles from '../css/styles';
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends Component{
	constructor(){
		super();
		this.state={
			Htext : {
				color:'white'
			}
		}
	}
	_Login(){
		console.log('ok');
	}
	render(){
		return(
			<View style={styles.container}>

			 <LinearGradient  colors={['#7B1FA2', '#9C27B0']} style={styles.main} >
	            <View style={styles.login} >

	               	  <Text style={styles.centertitle} >ورود</Text>
	                  <View style={styles.box}>
			               <Text style={styles.label}>ایمیل:</Text>
			               <TextInput 
			                placeholder={'لطفا ایمیل خود را وارد کنی'}
			                style={styles.textInput}
			                underlineColorAndroid='transparent'
			               />
		               </View>
		               <View style={styles.box}>
			               <Text style={styles.label}>پسورد:</Text>
			               <TextInput 
			                placeholder={'لطفا پسورد خود را وارد کنید'}
			                style={styles.textInput}
			                secureTextEntry={true}
			                underlineColorAndroid='transparent'
			                style={styles.textInput}
			               />
		               </View>
		               <View style={styles.box}>
					   <TouchableOpacity>
						      <Text style={styles.Button}>ورود به اپلیکیشن</Text>
					   </TouchableOpacity>


					   <TouchableHighlight onShowUnderlay={()=>{
					   	this.setState({
					   		Htext:{
					   			color:'black'
					   		}
					   	});
					   }} 
					   onHideUnderlay={()=>{
					   	this.setState({
					   		Htext:{
					   			color:'white'
					   		}
					   	});
					   }}
					   underlayColor='yellow' onPress={this._Login} style={styles.Hbutton}>
						      <Text style={[styles.Htext , this.state.Htext]}>ورود به اپلیکیشن</Text>
					   </TouchableHighlight>

                       <TouchableNativeFeedback>
                       		<View style={styles.Hbutton}>
						      <Text style={[styles.Htext , this.state.Htext]} >فراموشی رمز عبور</Text>
					   		</View>
					   </TouchableNativeFeedback>

					   <TouchableOpacity>
						      <Text style={styles.forgetPassword}>فراموشی رمز عبور</Text>
					   </TouchableOpacity>
	               </View>
	            </View>
	         </LinearGradient>

            </View>
			);
	}
}