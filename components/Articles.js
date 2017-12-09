import React , {Component} from 'react';
import Article from './Article';
import {View,Text,ScrollView,StyleSheet,FlatList,StatusBar ,SectionList} from 'react-native';
import Header from './items/FlatListHeader';

export default class Articles extends Component{
//ScrollView ##########################################	
	// _articleReturnScrollView(articles){
 //        return articles.map( (article , index) =>  <Article key={index} image={article.imageUrl} body={article.body} title={article.title} /> );
	// }
	// render(){
	// 	const {articles} = this.props;
	// 	return(
	// 		<ScrollView contentContainerStyle={styles.container}>
	// 		{this._articleReturn(articles)}
	// 		</ScrollView>
	// 		);
	// }
//FlatList #############################################
// 	_articleReturnFlatList(item , index){
// 		console.log(index);
//         return <Article key={index} image={item.imageUrl} body={item.body} title={item.title} />;
// 	}
// 	render(){
// 		const {articles} = this.props;
// 		return(
// 			 <View>
// 			 	<StatusBar
// 			      hidden
// 			   />
// 			<FlatList 
//               data={articles}
//               renderItem={ ({item,index}) => this._articleReturnFlatList(item,index) }
//               keyExtractor={ (item , index) => index }
// 			  ListHeaderComponent={()=> <Header /> }
// 			  numColumns={3}
//               columnWrapperStyle={{ flexDirection:'row-reverse' }}
// 			/>
// 			 </View>
// 			);
// 	}
// }

	render(){
		const data =[
		  {data: ['محسن' , 'مریم' , 'مژگان'], key:'م'},
	   	  {data: ['ندا' ,'نادر' , 'نسیم'],key:'ن'},
	      {data: ['رضا','روزبه','روشنک'],key:'ر'},
		];
		return(
		        <SectionList 
	                 sections={data}
	                 renderItem={ ({item}) => <Text>{item}</Text>}
	                 renderSectionHeader={ ({section}) => <Text style={{ color:'red' }} >{section.key}</Text> }
		             keyExtractor={ (item , index) => index }
		        />
			);
	}
}
const styles =StyleSheet.create({
	container:{
		flexWrap:'wrap',
		flexDirection:'row',
		justifyContent:'space-between',
		margin:30,
	}
});