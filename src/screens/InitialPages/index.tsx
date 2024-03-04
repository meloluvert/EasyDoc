import { pagesArray } from "./pagesArray";
import { stylesInitial } from '../../styles/InitialPages'
import { View, Text, ImageBackground, Image, TouchableHighlight } from "react-native"
import { useState } from "react";

export function InitialPage() {
    const background1 = require('../../assets/Initial/1.png')
    const background2 = require('../../assets/Initial/2.png')
    const arrayBackground = [background1,background2]
    const icon = require('../../assets/icon.png')
    const [page, setPage] = useState(0)
    const CurrentPageComponent = pagesArray[page]; //usei um vetor, caso eu aumente o número de páginas

    return (
        <ImageBackground style={stylesInitial.container} source={arrayBackground[page]}>
            <View style={stylesInitial.background}>
                <View style={stylesInitial.iconText}>
                    <Image source={icon} style={stylesInitial.iconApp} />
                    <View>
                        <CurrentPageComponent />
                    </View>
                </View>
                <View style={stylesInitial.SwitchButtonContainer}>
                    <TouchableHighlight
                        style={[stylesInitial.SwitchButton, page === pagesArray.length - 1 ? stylesInitial.SwitchButtonActived : stylesInitial.SwitchButtonDisabled]}
                        onPress={() =>{ 
                            if (page !== 0) { //para não vazar o vetor
                            setPage(page - 1);
                        }
                        }}
                    >
                        <Text style={stylesInitial.Arrow}>&larr;</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[stylesInitial.SwitchButton, page === 0 ? stylesInitial.SwitchButtonActived : stylesInitial.SwitchButtonDisabled]}
                        onPress={() => {
                            if (page !== pagesArray.length - 1) {//para não vazar o vetor
                                setPage(page + 1);
                            }
                        }}
                    >

                        <Text style={stylesInitial.Arrow}>&rarr;</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground>
    )
}
