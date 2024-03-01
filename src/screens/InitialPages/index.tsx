import { InitialPage1 } from "./1";
import { InitialPage2 } from "./2";
import { stylesInitial } from '../../styles/InitialPages'
import { View, Text, ImageBackground, Image, TouchableHighlight } from "react-native"
import { useState } from "react";
export function InitialPage() {
    const background1 = require('../../assets/Initial/1.png')
    const background2 = require('../../assets/Initial/2.png')
    const icon = require('../../assets/icon.png')
    const [page, setPage] = useState(1)
    return (

        <ImageBackground style={stylesInitial.container} source={page == 1 ? background1 : background2}>
            <View style={stylesInitial.background}>
                <View style={stylesInitial.iconText}>

                    <Image source={icon} style={stylesInitial.iconApp} />

                    <View >
                        {page == 1 ? <InitialPage1 /> : <InitialPage2 />}
                    </View>
                </View>
                <View style={stylesInitial.SwitchButtonContainer}>
                    <TouchableHighlight style={[stylesInitial.SwitchButton, page == 2 ? stylesInitial.SwitchButtonActived : stylesInitial.SwitchButtonDisabled]} onPress={() => {
                        setPage(1)
                    }
                    } ><Text style={stylesInitial.Arrow}>&larr;</Text></TouchableHighlight>
                    <TouchableHighlight style={[stylesInitial.SwitchButton, page == 1 ? stylesInitial.SwitchButtonActived : stylesInitial.SwitchButtonDisabled]} onPress={() => {
                        setPage(2)
                    }
                    } ><Text style={stylesInitial.Arrow}>&rarr;</Text></TouchableHighlight>
                </View>
            </View>

        </ImageBackground>
    )
}