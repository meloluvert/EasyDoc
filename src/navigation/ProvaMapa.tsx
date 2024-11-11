import React from 'react';
import { Entrada } from '../screens/Entrada';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Mapa } from '../screens/Mapa';
export type MapStackParamList = {
    "Entrada": undefined
    "Mapas":coords
}
export interface coords {
    origem:{
        latitude: number,
        longitude: number,
    },
    destino:
    {
        latitude: number,
        longitude:number,
    }
}
type MapScreenNavigationProp = StackNavigationProp<MapStackParamList, 'Entrada'>
export type MapTypes = {
    navigation: MapScreenNavigationProp
    route: any
}
export function MapNavigation() {
    const Stack = createStackNavigator<MapStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Entrada' component={Entrada} />
            <Stack.Screen name="Mapas" component={Mapa}/>

        </Stack.Navigator>
    )
}