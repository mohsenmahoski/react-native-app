import React , {Component} from 'react';
import {Image,View, Text ,StyleSheet,ScrollView} from 'react-native';
import styles from '../../css/styles';


export default class Article extends Component{
    static navigationOptions=({navigation})=>({
        	headerTitle:<Text style={styles.headerTitle}>{navigation.state.params.article.title}</Text>,
            headerStyle:{
            	backgroundColor:'red',
            }
        })
	render(){
		const {title,body,image}=this.props.navigation.state.params.article;
		return(
	         <ScrollView>
	         	<Image  source={image} style={{ width:'100%' , height:200 }} />
	         	<View>
	         		<Text  style={INlineStyles.title}>{title}</Text>
	         		<Text numberOfLines={3} style={INlineStyles.body}>{body}</Text>
	         	</View>
	         </ScrollView>
			);
	}
}


const INlineStyles = StyleSheet.create({
	title:{
		padding:10,
		fontFamily:'IRANSansMobile_Bold',
	},
	body:{
		padding:10,
		fontFamily:'IRANSansMobile_Medium',
	},
});

