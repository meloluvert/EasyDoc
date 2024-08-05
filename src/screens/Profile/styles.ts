import {colors} from './../../styles/colors'
import { StyleSheet } from 'react-native'
export const formStyles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center',
        backgroundColor:colors.white,
        overflow:'scroll',

    },
    formInput:{
        flexDirection:'column',
        width:300,
        backgroundColor:colors.white,
        borderRadius:5,
        padding:5,
        alignItems:'baseline',
        marginVertical:5,
        justifyContent:'center'
        
    },
    TextInp:{
        borderColor:colors.primary,
        borderWidth:3,
        width:300,
        borderRadius:3,
        padding:3
    },
    iconInput:{
    }
        
})
export const profile = StyleSheet.create({
    layout:{
        flexDirection:'column'
    }
})