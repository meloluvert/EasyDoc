
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10
    },
    fixedRatio: {
        aspectRatio: 1,
        height:200,
        width:200
    }, 
    video:
    {
        alignSelf: 'center',
        width: 176.47,
        height: 164.7
    },
    containerRow:{
        flexDirection:'row',
        flex:1
    }
})