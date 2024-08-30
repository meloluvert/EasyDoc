import {colors} from '../../styles/const'
import { consts } from '../../styles/const'
import { StyleSheet } from 'react-native'
export const formStyles = StyleSheet.create({
    container:{
        //flex:1,
        //alignItems:'center',
        //justifyContent:'center',
        //backgroundColor:colors.white,
        //overflow:'scroll',
        marginBottom:20,
    },
    content:{
        alignItems:'center',
        paddingBottom:50
    },
    label:{
        fontWeight:'bold',
    }
    ,

    formInput:{
        // width:consts.widthForm,
        flex:1,
        backgroundColor:colors.white,
        borderRadius:5,
        padding:5,
        alignItems:'baseline',
        justifyContent:'center'
        
    },
    TextInp:{
        borderColor:colors.primary,
        borderWidth:1,
        width:consts.widthForm-10,
        borderRadius:3,
        padding:3
    },
    iconInput:{
    },
    btn:{
        backgroundColor: colors.primary,
        borderRadius:5,
        padding: 15,
        width:consts.widthForm,
        marginVertical:5
    }
        
})
export const profile = StyleSheet.create({
    layout:{
        flexDirection:'column'
    }
})