import { View, TouchableHighlight, Text } from "react-native";
import {stylesInitial} from "../../styles/InitialPages"
import { pagesArray } from "../../screens/InitialPages/pagesArray"
import { Dispatch, SetStateAction } from "react";
interface ButtonsProps {
    page: number;
    altera: Dispatch<SetStateAction<number>>
}
export function Buttons({page, altera} :ButtonsProps) {
    return(
        //dois botões
    <View style={stylesInitial.SwitchButtonContainer}>
        <TouchableHighlight
            style={[stylesInitial.SwitchButton, page === pagesArray.length - 1 ? stylesInitial.SwitchButtonActived : stylesInitial.SwitchButtonDisabled]}
            onPress={() => {
                if (page !== 0) { //para não vazar o vetor
                    altera(page - 1);
                }
            }}
        >
            <Text style={stylesInitial.Arrow}>&larr;</Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={[stylesInitial.SwitchButton, page === 0 ? stylesInitial.SwitchButtonActived : stylesInitial.SwitchButtonDisabled]}
            onPress={() => {
                if (page !== pagesArray.length - 1) {//para não vazar o vetor
                    altera(page + 1);
                }
            }}
        >

            <Text style={stylesInitial.Arrow}>&rarr;</Text>
        </TouchableHighlight>
    </View>
    )
}
