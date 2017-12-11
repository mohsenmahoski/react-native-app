import React , {Component} from 'react';
import {Image,View, Text ,StyleSheet,Dimensions,TouchableWithoutFeedback} from 'react-native';



export default class Article extends Component{
    
	render(){
		const {title,body,image}=this.props;
		const {navigate} = this.props.navigation;
		return(
			 <TouchableWithoutFeedback 
			   onPress={() => navigate('Article',{
                     article:{
                     	title,body,image
                     }
			      } 
			   )}
			 >
		         <View style={styles.container}>
		         	<Image  source={image} style={{ width:'100%' , height:200 }} />
		         	<View>
		         		<Text  style={styles.title}>{title}</Text>
		         		<Text numberOfLines={3} style={styles.body}>{body}</Text>
		         	</View>
		         </View>
	         </TouchableWithoutFeedback>
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
	},
	body:{
		padding:10,
		fontFamily:'IRANSansMobile_Medium',
	},
});

