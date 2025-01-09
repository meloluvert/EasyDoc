import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { QrCode } from '../screens/QrCode';
import { Profile } from '../screens/Profile';
import { Camera } from '../screens/Camera';
import { Imagens } from '../screens/Images';
import { LocationMap } from '../screens/LocationMap';
import { MapNavigation } from './ProvaMapa';
import { Acelerometro } from '../screens/Acelerometro';
import { Video } from '../screens/Video';
export type ProfileStackParamList = {
    Profile: {imgUrl: string | null, location: string | null}
    "Adicionar Foto": undefined
    "Câmera": undefined
    "QrCode": {whatsAppNumber: string | null}
    // "Endereco": undefined
    "Acelerometro": undefined
    "Video": undefined
}
type ProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'Profile'>
export type ProfileTypes = {
    navigation: ProfileScreenNavigationProp
    route: any
}
export function ProfileNavigation() {
    const Stack = createStackNavigator<ProfileStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Adicionar Foto' component={Imagens} />
            <Stack.Screen name='Câmera' component={Camera} />
            <Stack.Screen name='QrCode' component={QrCode} />
            <Stack.Screen name='Video' component={Video}/>
             {/* <Stack.Screen name='Endereco' component={LocationMap} />  */}
             <Stack.Screen name='Acelerometro' component={Acelerometro} /> 
            {/* <Stack.Screen name='Endereco' component={MapNavigation} /> */}

        </Stack.Navigator>
    )
}