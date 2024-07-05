import {colors} from './../../styles/colors'
import { StyleSheet } from 'react-native'
export const formStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white

    },
    formInput:{
        flexDirection:'row',
        width:300,
        backgroundColor:colors.white,
        borderColor:colors.primary,
        borderWidth:5,
        borderRadius:5,
        padding:15,
        alignItems:'center',
        marginVertical:5
    },
    TextInp:{
        flex:1,
        borderBottomColor:colors.primary,
        borderBottomWidth:3
    },
    iconInput:{
    }
        
})