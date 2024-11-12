import { StyleSheet } from "react-native";
import { colors } from "../../styles/const";
export const styles = StyleSheet.create({
    input:{
        borderColor:colors.primary,
        padding:10,
        borderRadius:10,
        marginVertical:5,
        borderWidth:3,
        width:'100%'


        
    },
    titleLabel:{
        fontSize:20,
        textAlign:'left',
        width:'100%'
    },
    containerInside:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    container:{
        margin: 3,
        height:500,
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    },
    btn:{
        width:'100%',
        backgroundColor:colors.primary,
        height:40,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'

    },
    textBtn:{
        textAlign:'center',
        color:'white'
    }
})