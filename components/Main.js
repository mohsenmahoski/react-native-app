import React from 'react';
import { StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import  Home from './pages/Home';
import  Article from './pages/Article';
import{I18nManager,Image,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';
import Camera from './pages/Camera';
import Follow from './pages/Follow';
import ProfileStackNavigator from './pages/Profile';
import Search from './pages/Search';
import UserHome from './pages/UserHome';


I18nManager.forceRTL(true);

Main = StackNavigator({
	Home : { screen:Home },
	Article : { screen:Article },
});
export default Main = TabNavigator({
	Profile:{
       screen:ProfileStackNavigator,
       navigationOptions:{
       	tabBarIcon:({tintColor}) => <Image source={require('../assets/images/profile.jpg')} style={{ width:30 , height:30 ,borderRadius:15,borderColor:tintColor,borderWidth:3, }} />
       }
	},
	Camera:{
       screen:Camera,
       navigationOptions:{
       	tabBarLabel:<Text>label</Text>,
       	tabBarIcon:({tintColor})=> <Icon name="md-add-circle" size={30} color={tintColor} />
       }
	},
	Follow:{
      screen:Follow,
      navigationOptions:{
       	tabBarIcon:({tintColor})=> <Icon name="md-heart" size={30} color={tintColor} />
       }
	},
	Search:{
       screen:Search,
       navigationOptions:{
       	tabBarIcon:({tintColor})=> <Icon name="md-search" size={30} color={tintColor} />
       }
	},
	UserHome:{
        screen:UserHome,
        navigationOptions:{
       	tabBarIcon:({tintColor})=> <Icon name="md-home" size={30} color={tintColor} />
       }
	},
},{
	tabBarOptions:{
		activeTintColor: '#34495e',
		inactiveTintColor:'#95a5a6',
		showLabel:false,
	},
	tabBarComponent:TabBarBottom,
	tabBarPosition: 'bottom',
});