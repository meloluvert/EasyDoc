import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { Profile } from '../screens/Profile';
import { Camera } from '../screens/Camera';
type ProfileStackParamList = {
    Profile: undefined
    Camera: undefined
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
            <Stack.Screen name='Camera' component={Camera} />
        </Stack.Navigator>
    )
}