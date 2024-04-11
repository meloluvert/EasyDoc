import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {MenuTabs} from "../navigation/MainNavigation"
export default function Navigator(){
    return (
        <NavigationContainer>

<MenuTabs/>
        </NavigationContainer>
    )
}