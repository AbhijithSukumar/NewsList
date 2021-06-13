import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export const ListStyles=StyleSheet.create({
    mainBlock:{
        backgroundColor:'whitesmoke',
        height:hp('80%'),
    },
    listBlock:{
        flexDirection:'row',
        width:wp('96%'),
        marginLeft:wp('2%'),
        height:hp('15%'),
        backgroundColor:'whitesmoke',
        marginTop:hp('2%')
    },
    mainContainer:{
        width:wp('100%'),
        height:hp('100%')
    }
  
});