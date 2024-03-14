import { View, TouchableHighlight, Text } from "react-native";
import {stylesInitial} from "../../styles/InitialPages"
import { pagesArray } from "../../screens/InitialPages/pagesArray"
import {stylesButtons} from './styles'
import { Dispatch, SetStateAction } from "react";
interface ButtonsProps {
    page: number;
    altera: Dispatch<SetStateAction<number>>
}
export function Buttons({page, altera} :ButtonsProps) {
    return(
        //dois botões
    <View style={stylesButtons.SwitchButtonContainer}>
        <TouchableHighlight
            style={[stylesButtons.SwitchButton, page === pagesArray.length - 1 ? stylesButtons.SwitchButtonActived : stylesButtons.SwitchButtonDisabled]}
            onPress={() => {
                if (page !== 0) { //para não vazar o vetor
                    altera(page - 1);
                }
            }}
        >
            <Text style={stylesButtons.Arrow}>&larr;</Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={[stylesButtons.SwitchButton, page === 0 ? stylesButtons.SwitchButtonActived : stylesButtons.SwitchButtonDisabled]}
            onPress={() => {
                if (page !== pagesArray.length - 1) {//para não vazar o vetor
                    altera(page + 1);
                }
            }}
        >

            <Text style={stylesButtons.Arrow}>&rarr;</Text>
        </TouchableHighlight>
    </View>
    )
}
