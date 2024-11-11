import { StyleSheet } from 'react-native';
import { colors } from '../../styles/const';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        backgroundColor: colors.primary,
        width: "100%",
        marginTop: 10,
        borderRadius: 10
    },
    itemText: {
        fontSize: 20,
        padding: 10
    },
    botao:{
        position:'absolute',
        bottom:80,
        right:10,
        width:50
    }
})