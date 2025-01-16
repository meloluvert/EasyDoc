import { StyleSheet } from 'react-native'
import { colors } from '../../styles/const'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        fontSize: 18,
        padding: 10,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
    }
})