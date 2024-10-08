import {StyleSheet} from 'react-native'
import { colors } from './const'
export const stylesInitial = StyleSheet.create({
    //para as duas páginas
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
    title:{
        fontSize: 40,
        fontFamily:'OpenSans_800ExtraBold',
        color: colors.white
    },
    paragrafo:{
        fontSize: 20,
        textAlign:'justify',
        color: colors.white
    },

    iconApp:{
        width: 150,
        height:150,
        marginBottom:20,
        borderRadius:75
    },
    iconText:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:50,
        fontFamily:'OpenSans_800ExtraBold'
    }
})