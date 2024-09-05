import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { QrCode } from '../screens/QrCode';
import { Profile } from '../screens/Profile';
import { Camera } from '../screens/Camera';
import { Imagens } from '../screens/Images';
export type ProfileStackParamList = {
    Profile: {imgUrl: string | null}
    "Adicionar Foto": undefined
    "Câmera": undefined
    "QrCode": undefined
}
type ProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList, 'Profile'>
export type ProfileTypes = {
    navigation: ProfileScreenNavigationProp
}
export function ProfileNavigation() {
    const Stack = createStackNavigator<ProfileStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Adicionar Foto' component={Imagens} />
            <Stack.Screen name='Câmera' component={Camera} />
            <Stack.Screen name='QrCode' component={QrCode} />
        </Stack.Navigator>
    )
}