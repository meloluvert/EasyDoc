import {StyleSheet} from 'react-native'
import { OpenSans_800ExtraBold_Italic } from '@expo-google-fonts/open-sans'
export const stylesInitial = StyleSheet.create({
    container: {
        flex:1

    },
    background:{
        flex:1,
        backgroundColor:'rgba(63, 61, 163, 0.89)',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column',
        padding:25
        
    },
    iconApp:{
        width: 150,
        height:150,
        marginBottom:20,
        borderRadius:75
    },
    title:{
        fontSize: 40
    },
    paragrafo:{
        fontSize: 20,
        textAlign:'justify'
    },
    iconText:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:50,
        fontFamily:'OpenSans_800ExtraBold_Italic'
    },
    SwitchButtonContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width:250,
        height:70,
        position:'absolute',
        bottom:50


    },
    SwitchButton:{
        textAlign:'center',
        padding:1,
        display:'flex',
        width:70,
        height:70,
        borderRadius:35,
        alignItems:'center',
        justifyContent:'center',
        opacity:1,
        
    },
    Arrow:{
        fontSize:40,
        display:'flex',
        textAlign:'center',
        padding:0,
        margin:0,
        marginBottom:20,
    },
    SwitchButtonActived:{

        backgroundColor: 'rgba(0, 0, 0, 0.39)',
        
    },
     SwitchButtonDisabled:{
        backgroundColor: '#838181',
    },
    iconsWordPdfContainer:{
        width:150,
        height:70,
        flexDirection:'row',
        alignSelf:'flex-end'
        
    },
    iconWordPdf:{}
})