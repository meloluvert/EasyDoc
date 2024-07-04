import { StyleSheet } from "react-native";
import {colors} from "../../styles/colors"

export const btnAuthStyle = StyleSheet.create({
    btnprimary:{
        backgroundColor: colors.primary,
        borderRadius:5,
        padding: 15,
        width:300
    },
    btnsecondary:{
        backgroundColor: colors.secondary,
        borderRadius:5,
        padding: 15,
        width:300
    },
    text:{
        textAlign:'center',
        color:colors.white
    }

})