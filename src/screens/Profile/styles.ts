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
    addImg:{
        backgroundColor:'#ccc',
        width:consts.widthPhoto,
        height:consts.widthPhoto,
        borderRadius:0.5*consts.widthPhoto,
        marginVertical:10
    }
    ,
    img:{
        flex:1,
        borderRadius:0.5*consts.widthPhoto,
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
        flex:1,
        width:"90%",
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
        padding:3,
        flexGrow:10

    },
    iconInput:{
    },
    btn:{
        backgroundColor: colors.primary,
        borderRadius:5,
        padding: 15,
        width:consts.widthForm,
        marginVertical:5,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
        
    }
        
})
export const profile = StyleSheet.create({
    layout:{
        flexDirection:'column'
    }
})