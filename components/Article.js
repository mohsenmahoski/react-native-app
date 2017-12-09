import React , {Component} from 'react';
import {Image,View, Text ,StyleSheet,Dimensions} from 'react-native';



export default class Article extends Component{
    
	render(){
		const {title,body,image}=this.props;
		return(
	         <View style={styles.container}>
	         	<Image  source={image} style={{ width:'100%' , height:200 }} />
	         	<View>
	         		<Text  style={styles.title}>{title}</Text>
	         		<Text numberOfLines={3} style={styles.body}>{body}</Text>
	         	</View>
	         </View>
			);
	}
}
const {width} = Dimensions.get('window');
const gutter = 30;
const styles = StyleSheet.create({
	container:{
		 flex:.5,
		 margin:5,
	},
	title:{
		padding:10,
		fontFamily:'IRANSansMobile_Bold',
		textAlign:'right',
	},
	body:{
		padding:10,
		fontFamily:'IRANSansMobile_Medium',
		textAlign:'right',
	},
});

