import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export const HomeStyles=StyleSheet.create({
    mainContainer:{
        backgroundColor:'tomato'
    },
    mainHeader:{
        textAlign:'center',
        fontSize:wp('5%'),
        marginTop:hp('5%'),
        justifyContent:'center',
        alignItems:'center',
        color:'white'
    },
    line:{
        height:hp('0.5%'),
        backgroundColor:'white',
        marginTop:hp('3%'),
        marginBottom:hp('1%'),
    }
});