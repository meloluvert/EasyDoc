import { StyleSheet } from "react-native";
import {colors} from "../../styles/const"

export const btnAuthStyle = StyleSheet.create({
    btnprimary:{
        backgroundColor: colors.primary,
        borderRadius:5,
        padding: 15,
        width:300,
        marginVertical:5
    },
    btnsecondary:{
        backgroundColor: colors.secondary,
        borderRadius:5,
        padding: 15,
        width:300,
        marginVertical:5
    },
    text:{
        textAlign:'center',
        color:colors.white
    }

})