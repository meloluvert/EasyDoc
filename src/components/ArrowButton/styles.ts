import {StyleSheet} from 'react-native'
import { colors } from '../../styles/colors'
export const stylesButtons = StyleSheet.create({
        //botões
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
            color:colors.white,
        },
        SwitchButtonActived:{
    
            backgroundColor: 'rgba(0, 0, 0, 0.39)',
            
        },
         SwitchButtonDisabled:{
            backgroundColor: '#838181',
        }
})