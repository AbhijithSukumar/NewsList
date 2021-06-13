import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image,FlatList, ActivityIndicator,Alert,BackHandler} from 'react-native';
import {HomeStyles} from '../Styles/HomeStyles';
import {ListStyles} from '../Styles/ListStyles';
import {connect} from 'react-redux';
import {GetList} from '../Redux/Actions/NewsListApiAction';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux';

class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
          homeData:'',
          isLoading:false,
          listData:null,
          
        }
      }
      componentDidMount() {
       this.newsListCall();
       this.onBackPress = this.onBackPress.bind(this);
       BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
      }
      newsListCall=()=>{
          //alert('hi');
        this.setState({isLoading:true});
        const {onSubmit} = this.props;
        onSubmit()
         .then((res) => {
            //alert('hi');
           this.setState({isLoading:false});
           console.log('Array list:', res);
           console.log('reducer: ', this.props.ListReducer.data.articles);
           this.setState({listData:this.props.ListReducer.data.articles})
           
         })
         .catch((error) => {
           console.log('error',error);
           alert('Check your internet connection and try again');
         });
         
             }
             listId=(Lid)=>{
                 console.log('Lid',Lid)
                Actions.newslist({newsid:Lid}); 
             }
             onBackPress = () => {
              if( Actions.currentScene=='home')
              {
                Alert.alert(
                  ' Exit From App ',
                  ' Do you want to exit From App ?',
                  [
                    { text: 'Yes', onPress: () => BackHandler.exitApp() },
                    { text: 'No', onPress: () => console.log('NO Pressed') }
                  ],
                  { cancelable: false },
                );
                return true;
              }
              
            }
    
    render(){
        return(
            <View style={HomeStyles.mainContainer}>
                <Text style={HomeStyles.mainHeader}>US Top Headlines</Text>
                <View style={HomeStyles.line}/>

                <View style={ListStyles.mainBlock}>
                  {this.state.isLoading?<ActivityIndicator animating={this.state.isLoading} color={'#164280'} style={{marginTop:hp('2%')}} size={'large'}/>
                  :
                 <FlatList 
                
              data={this.state.listData}  
             keyExtractor={(item) => item.id}
             horizontal={false}
             renderItem={({item}) => 
             <TouchableOpacity onPress={()=>this.listId(item.source.id)}>
             <View style={ListStyles.listBlock}>
                 {item.urlToImage!=null?
                 <Image style={{width:wp('26%'),height:hp('12%')}} source={{uri:item.urlToImage}}/>
                 :
                 <View style={{width:wp('26%'),height:hp('12%'),backgroundColor:'lightgrey',justifyContent:'center',alignItems:'center'}}><Text>Not found</Text></View>
             }
                 {/*<View style={{width:hp('0.1%'),height:hp('15%'),backgroundColor:'#164280',marginLeft:wp('0.3%')}}/>*/}
                 <Text style={{width:wp('62.5%'),height:hp('12%'),marginLeft:wp('3.5%'),fontWeight:'bold'}} >{item.title}</Text>
             </View>
             <View style={{height:hp('0.1%'),backgroundColor:'#164280'}}/>
             </TouchableOpacity>
            }
           
            />}
            </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    ListReducer: state.ListReducer || {},
  });
  
  const mapDispatchToProps = {
    onSubmit: GetList,
  };
        
        export default connect( 
          mapStateToProps,
          mapDispatchToProps
        )(Home);