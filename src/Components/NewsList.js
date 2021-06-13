import React,{Component} from 'react';
import {ListStyles} from '../Styles/ListStyles';
import {View,Text,FlatList,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';


class NewsList extends Component{
    constructor(props){
        super(props);
        this.state={
            newsData:this.props.ListReducer.data.articles,
           
        }
    }
    render(){
        
        return(
            <View style={ListStyles.mainContainer}>
                <View style={{width:wp('100%'),height:hp('5%'),backgroundColor:'tomato'}}/>
                <Text
                onStartShouldSetResponder={()=>Actions.home()}
                style={{position:'absolute',color:'white',fontSize:wp('3.5%'),marginTop:hp('1%'),marginLeft:wp('3%'),fontWeight:'bold'}}>
                    {'<< HOME'}</Text>
                    
                <FlatList 
                data={this.state.newsData}  
               keyExtractor={(item) => item.id}
               horizontal={false}
               renderItem={({item}) => 
               <View style={{width:wp('96%'),marginLeft:wp('2%'),marginTop:hp('2%'),backgroundColor:'whitesmoke'}}>
                   {item.urlToImage!=null?
                <Image source={{uri:item.urlToImage}} style={{width:wp('96%'),height:hp('40%')}}/>:
                   <View style={{width:wp('96%'),height:hp('40%'),justifyContent:'center',alignItems:'center',backgroundColor:'lightgrey'}}>
                       <Text>Image not found</Text></View>
                   }
                   <Text style={{color:'tomato',fontSize:wp('4%'),marginTop:hp('3%'),fontWeight:'bold'}}>{item.title}</Text>
                   <Text style={{marginTop:hp('2%'),fons:wp('3%')}}>{item.description}</Text>
                </View>
                }
              />

            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    ListReducer: state.ListReducer || {},
  });
  
  
        
        export default connect( 
          mapStateToProps,
          null
        )(NewsList);