import React ,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import styles from '../../../css/styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProfileTabs from './ProfileTabs';

export default class Profile extends Component{
	static navigationOptions=({navigation})=>({
       headerRight: <View style={styles.headerRight}>
                  <Icon name="md-filing" size={30} color="#95a5a6" onPress={()=> navigation.navigate('Archive')} />
                  <Icon name="md-person-add" size={30} color="#95a5a6" onPress={()=> navigation.navigate('ProfilePlus')} />
                  <Icon name="md-more" size={30} color="#95a5a6" onPress={()=> navigation.navigate('Settings')} />
                 
                  
       </View> ,
       headerLeft: <Text style={styles.headerTitle} >محسن ماهوسکی</Text>
	})
	render(){
		return(
             <View style={inlineStyle.main}>
                <View style={{ height:150,flexDirection:'row' }}>
                   <View style={{ flex:.3,height:150,justifyContent:'center',alignItems:'center'}}>
	                     <Image source={require('../../../assets/images/profile.jpg')} style={{ width:70 , height:70 ,borderRadius:35,borderWidth:3,borderColor:'#bdc3c7',borderWidth:2, }} />
	                     <Icon style={{ bottom:25,marginLeft:45, }} name="md-add-circle" size={25} color="#3498db" onPress={()=> navigation.navigate('')} />
                   </View>
                   <View style={{ flex:.7,height:150 }}>
                     <View style={{ flex:.5 ,flexDirection:'row' }}>
                     	  <View style={{ flex:.333,justifyContent:'center',alignItems:'center' }}>
                     	     <Text style={{ fontFamily:'IRANSansMobile_Bold' }} >129</Text>
                     	  	 <Text style={{ fontFamily:'IRANSansMobile_Bold' }} >پست ها</Text>
                     	  </View>
                     	  <View style={{ flex:.333,justifyContent:'center',alignItems:'center' }}>
                     	     <Text style={{ fontFamily:'IRANSansMobile_Bold' }} >129</Text>
                     	  	 <Text style={{ fontFamily:'IRANSansMobile_Bold' }} >دنبال کننده ها</Text>
                     	  </View>
                     	  <View style={{ flex:.333,justifyContent:'center',alignItems:'center' }}>
                     	     <Text style={{ fontFamily:'IRANSansMobile_Bold' }} >129</Text>
                     	  	 <Text style={{ fontFamily:'IRANSansMobile_Bold' }} >دنبال شونده ها</Text>
                     	  </View>
                     </View>
                     <View style={{ flex:.5 , alignItems:'center', justifyContent:'center' }}>
                     	  <TouchableOpacity style={inlineStyle.button} onPress={()=>{this.props.navigation.navigate('Settings')}}>
                     	  	 <Text>ویرایش پروفایل</Text>
                     	  </TouchableOpacity>
                     </View>
                   </View>
                </View>
                <View style={{ flex:1 }} >
                	 <ProfileTabs />
                </View>
             </View>
			);
	}
}


const inlineStyle = StyleSheet.create({
	 main:{
	 	flex:1,
	 	backgroundColor:'#FFF',
	 },
	 button:{
	 	borderColor:'#bdc3c7',
	 	borderWidth:2,
	 	width:250,
	 	borderRadius:10,
	 	alignItems:'center',
	 	paddingTop:5,
	 	paddingBottom:5,
	 	paddingRight:10,
	 	paddingLeft:10,
	 }
});