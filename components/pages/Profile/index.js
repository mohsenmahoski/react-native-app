
import {StackNavigator} from'react-navigation';
import Profile from './Profile';
import ProfilePlus from './ProfilePlus';
import Settings from './Settings';
import Archive from './Archive';


export default ProfileStackNavigator = StackNavigator({
	
	Profile:{
       screen:Profile,
	},
	ProfilePlus:{
		screen:ProfilePlus,
	},
	Settings:{
       screen:Settings,
	},
	Archive:{
		screen:Archive,
	},

});