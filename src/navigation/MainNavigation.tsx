import * as React from "react"
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Docs } from "../screens/Docs";
import { Profile } from "../screens/Profile";
import { Chat } from "../screens/Chat";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../styles/const";
import { LoginTypes } from "./AuthNavigation";
import Entypo from '@expo/vector-icons/Entypo';
import { MessageNavigation } from "./messageNavigation";
import { ProfileNavigation } from "./profileNavigation";

{/* o que devo passar para as telas, no caso, nenhuma informação*/ }
type MenuTabParam = {
    Docs: undefined
    Perfil: undefined
    Chat: undefined
}

type MenuScreenNavigator = BottomTabNavigationProp<MenuTabParam, "Docs">; {/* Docs é a primeira página*/ }
export type MenuTabTypes = {
    navigation: MenuScreenNavigator
}

export function MenuTabs() {
    /*não sei se devo retirar ou deixar esse parâmetro */
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarActiveTintColor: colors.white,
                tabBarStyle: { position: 'absolute', height: 70, backgroundColor: colors.primary }
            }}
        >

            <Tab.Screen name="Docs" component={Docs}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="document-text" size={50} color="white" />
                    )
                }


                } />
            <Tab.Screen name="Perfil" component={ProfileNavigation}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={50} color="white" />
                    )
                }
                } />
            <Tab.Screen name="Chat" component={MessageNavigation}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="chat" size={50} color="white" />)
                }
                } />



        </Tab.Navigator>
    )
}