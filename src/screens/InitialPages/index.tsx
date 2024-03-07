import { pagesArray } from "./pagesArray";
import { stylesInitial } from '../../styles/InitialPages'
import { View, Text, ImageBackground, Image, TouchableHighlight, TouchableOpacity } from "react-native"
import { useState, Dispatch, SetStateAction } from "react";
import { Buttons } from "../../components/InitialPages/Buttons"
import { ImageText } from '../../components/InitialPages/ImageText'
export function InitialPage() {
    const background1 = require('../../assets/Initial/1.png')
    const background2 = require('../../assets/Initial/2.png')
    const arrayBackground = [background1, background2]
    const icon = require('../../assets/icon.png')
    const [page, setPage] = useState(0)
    return (
        <ImageBackground style={stylesInitial.container} source={arrayBackground[page]} >
            <View style={stylesInitial.background}>
                <ImageText page={page} />
                <Buttons page={page} altera={setPage} /> 
                
            </View>
        </ImageBackground>
    )
}
