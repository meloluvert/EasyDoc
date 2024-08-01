import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { Chat } from '../screens/Chat';
import { NewChat } from '../screens/NewChat';
type MessageStackParamList = {
    Message: undefined
    CadMessage: undefined
}
type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'Message'>
export type MessageTypes = {
    navigation: MessageScreenNavigationProp
}
export function MessageNavigation() {
    const Stack = createStackNavigator<MessageStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Message' component={Chat} />
            <Stack.Screen name='CadMessage' component={NewChat} />
        </Stack.Navigator>
    )
}