import React ,{Component} from 'react';
import { StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import{I18nManager,Image,Text} from 'react-native';




class ProfileStackNavigator extends Component{
      render(){
            return(
               <Text>ProfileStackNavigator</Text>
                  );
      }
}

class Tab1 extends Component{
      render(){
            return(
               <Text>Tab1</Text>
                  );
      }
}
class Tab2 extends Component{
      render(){
            return(
               <Text>Tab2</Text>
                  );
      }
}
class Tab3 extends Component{
      render(){
            return(
               <Text>Tab3</Text>
                  );
      }
}





export default ProfileTabs = TabNavigator({
	Profile:{
       screen:ProfileStackNavigator,
       navigationOptions:{
       	tabBarIcon:({tintColor})=><Icon name="ios-albums-outline" size={30} color={tintColor} />
       }
	},
	Tab1:{
       screen:Tab1,
       navigationOptions:{
       	tabBarLabel:<Text>label</Text>,
       	tabBarIcon:({tintColor})=><Icon name="ios-images-outline" size={30} color={tintColor} />
       }
	},
	Tab2:{
      screen:Tab2,
      navigationOptions:{
       	tabBarIcon:({tintColor})=><Icon name="ios-cart-outline" size={30} color={tintColor} />
       }
	},
	Tab3:{
       screen:Tab3,
       navigationOptions:{
       	tabBarIcon:({tintColor})=><Icon name="ios-chatboxes-outline" size={30} color={tintColor} />
       }
	},
},{
      tabBarOptions:{
            activeTintColor: '#34495e',
            inactiveTintColor:'#95a5a6',
            showLabel:false,
      },
      tabBarComponent:TabBarBottom,
      swipeEnabled:false,
      animationEnabled:false,
});