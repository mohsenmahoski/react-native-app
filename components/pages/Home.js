import React , {Component} from 'react';
import {AppRegistry , Text , View , Image ,StyleSheet ,ScrollView} from 'react-native';
import Articles from '../Articles';
import styles from '../../css/styles';

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state={
			articles:[],
		}
	}
static navigationOptions ={
	title: 'صفحه اصلی',
}
componentWillMount(){
		this.setState({
			articles:[
				{
				    title:'آموزش React Native' , 
					imageUrl:{uri:'https://roocket.ir/public/image/2017/11/15/cleancode.jpg'},
					body:'شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...'
			    },
			    {
				    title:'آموزش Nodejs' , 
					imageUrl:{uri:'https://roocket.ir/public/image/2017/11/23/electron.png'},
					body:'شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...'
			    },
			    {
				    title:'آموزش Laravel' , 
					imageUrl:{uri:'https://roocket.ir/public/image/2017/11/15/cleancode.jpg'},
					body:'شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...'
			    },
			    {
				    title:'آموزش ES6' , 
					imageUrl:{uri:'https://roocket.ir/public/image/2017/11/15/cleancode.jpg'},
					body:'شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...شیوه نمایش درست به اندازه محتوایی که آن را نمایش می دهید روی کیفیت تاثیر می گذارد. به گمانم بتوانیم این سخن را در برنامه نویسی کامپیوتر نیز به کار ببر...'
			    },

			]
		});
}
render(){
		return(
			<View>
			    <Articles navigation={this.props.navigation} articles={this.state.articles} />
			</View>
			);
	}
} 