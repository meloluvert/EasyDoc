import { StyleSheet } from 'react-native'
import { colors } from '../../styles/const';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    headerCamera: {
        flex: 1,
        alignItems: 'center'
    },
    footerCamera: {
        flexDirection: 'row',
        marginBottom: 50,
        justifyContent: 'center'
    },
    ball: {
        width: 70,
        height: 70,
        backgroundColor: colors.primary,
        borderRadius: 35
    }
    ,
    headerSave: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});