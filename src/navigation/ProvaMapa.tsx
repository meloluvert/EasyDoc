import React from 'react';
import { Entrada } from '../screens/Entrada';
import { colors } from '../styles/const';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Mapa } from '../screens/Mapa';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export type MapTabParam = {
    "Entrada": undefined
    "Mapas": coords
}
export interface coords {
    origem: {
        latitude: number,
        longitude: number,
    },
    destino:
    {
        latitude: number,
        longitude: number,
    }
}
type MapScreenNavigationProp = BottomTabNavigationProp<MapTabParam, 'Entrada'>
export type MapTypes = {
    navigation: MapScreenNavigationProp
    route: any
}
export function MapNavigation() {
    const Tab = createBottomTabNavigator<MapTabParam>()
    return (
        <Tab.Navigator screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: colors.primary,
            tabBarStyle: {
                position: 'absolute',
                height: 70,
                backgroundColor: colors.primary
            },
            headerStyle:{
                backgroundColor: colors.primary,
            },
            headerTitleStyle:{
                color:'#fff'
            },
            tabBarActiveBackgroundColor:colors.secondary,
            tabBarLabelStyle:{
                color:'white'
            }
        }}>
            <Tab.Screen name='Entrada' component={Entrada} options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name='search-location' color="white" size={50}/>
                    )
                }}   />


            <Tab.Screen name="Mapas" component={Mapa}options={{
                    tabBarIcon: () => (
                        <Entypo name='location-pin' color="white" size={50}/>
                    )
                }}   />

        </Tab.Navigator>
    )
}