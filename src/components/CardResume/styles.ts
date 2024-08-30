import { StyleSheet } from "react-native"
const borderRadiusPadrao = 10
export const styles = StyleSheet.create({
    title:{
        color:'white',
        textAlign:'center',
        position:'relative'
        
    },
    card:{
        width:100,
        height:100,
        flexDirection:'column',
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:borderRadiusPadrao
    },
    back:{
        width:100,
        height:80,
        alignItems:'center',
        justifyContent:'flex-end',
        borderTopRightRadius:borderRadiusPadrao,
        borderTopLeftRadius:borderRadiusPadrao
    }
})
