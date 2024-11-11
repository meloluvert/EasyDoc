import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { MenuTabs } from "../navigation/MainNavigation"
import { LoginNavigation } from "./AuthNavigation"
import { Loading } from "../components/Loading"
import { useAuth } from "../hook/auth"

export default function Navigaton() {

    const { user, loading } = useAuth()
    if (loading) {
        return <Loading />
    }
    return (
        <NavigationContainer>

            {user?.token ? <MenuTabs /> : <LoginNavigation />}

        </NavigationContainer>
    )
}