import { pagesArray } from "../../screens/InitialPages/pagesArray";
import { stylesInitial } from '../../styles/InitialPages'
import { View, Image } from "react-native"
import { useState } from "react";
import {Buttons} from "../ArrowButton"
import React from "react";

export function ImageText({page} : {page:number}) {
    const icon = require('../../assets/icon.png')
    const CurrentPageComponent = pagesArray[page]; 
    //usei um vetor, caso eu aumente o número de páginas

    return (
                <View style={stylesInitial.iconText}>
                    <Image source={icon} style={stylesInitial.iconApp} />
                    <View>
                        <CurrentPageComponent />
                    </View>
                </View>
    )
}
