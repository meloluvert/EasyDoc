import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { MenuTabs } from "../navigation/MainNavigation"
import { LoginNavigation } from "./AuthNavigation"
export default function Navigaton() {
    return (
        <NavigationContainer>


            <LoginNavigation />
            {/*MenuTabs */}
        </NavigationContainer>
    )
}