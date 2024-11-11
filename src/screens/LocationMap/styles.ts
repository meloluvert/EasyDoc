import { StyleSheet } from "react-native";
import { colors } from "../../styles/const";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: '100%',
        height: '100%'
    },
    paragrafo: {
        fontSize: 18,
        textAlign: 'center'
    },
    searchContainerOrigin: {
        position: 'absolute',
        zIndex: 1,
        width: '95%',
        top: 10
    },
    searchContainerDestination: {
        position: 'absolute',
        zIndex: 1,
        width: '95%',
        top: 70
    },
    searchInput: {
        height: 56,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: colors.primary
    },
    locationBtn:{
        position: 'absolute',
        bottom: 100,
        right: 10,
        zIndex:85,
        width:400
    }

}
)