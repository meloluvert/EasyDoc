import * as React from "react"
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Docs } from "../screens/Docs";
import { Profile } from "../screens/Profile";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../styles/colors";
import { LoginTypes } from "./AuthNavigation";

{/* o que devo passar para as telas, no caso, nenhuma informação*/ }
type MenuTabParam = {
    Docs: undefined
    Profile: undefined
}

type MenuScreenNavigator = BottomTabNavigationProp<MenuTabParam, "Docs">; {/* Docs é a primeira página*/ }
export type MenuTabTypes = {
    navigation: MenuScreenNavigator
}

export function MenuTabs({navigation}:LoginTypes) {
    /*não sei se devo retirar ou deixar esse parâmetro */
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator
        
        screenOptions={{
            tabBarActiveTintColor: colors.white,
            tabBarStyle: { position: 'absolute', height:70, backgroundColor:colors.primary }
          }}
        >
           
                <Tab.Screen name="Docs" component={Docs}
                options={{
                    tabBarIcon:() =>(
                        <Ionicons name="document-text" size={50} color="white" />
                    )
                  }


                } />
                 <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon:() =>(
                        <Ionicons name="person" size={50} color="white" />
                    )
                  }


                } />



        </Tab.Navigator>
    )
}