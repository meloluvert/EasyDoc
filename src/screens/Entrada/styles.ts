import { StyleSheet } from "react-native";
import { colors } from "../../styles/const";
export const styles = StyleSheet.create({
    input:{
        borderColor:colors.primary,
        padding:3,
        borderRadius:10,
        marginVertical:5,
        borderWidth:3,
        width:'100%'


        
    },
    titleLabel:{
        fontSize:20
    },
    containerInside:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'red',
        borderWidth:1,
    },
    container:{
        margin: 3,
        height:500,
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    }
})