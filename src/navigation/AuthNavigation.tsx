import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Login } from "./../screens/Login"
import { Register } from "./../screens/Register"
import React from 'react';
import { MenuTabs } from './MainNavigation';
type LoginStackParamList = {
    Login: undefined
    Register: undefined
    Tabs: undefined
}

type LoginScreenNavigatorProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
    navigation: LoginScreenNavigatorProp
}
export function LoginNavigation() {
    const Stack = createStackNavigator<LoginStackParamList>()
    return (
        <Stack.Navigator >
            <Stack.Screen name='Login' component={Login}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen name='Register' component={Register}
                options={{
                    headerShown:false
                }}
            />
            {/*não sei se devo retirar ou deixar esse parâmetro */}
            <Stack.Screen name='Tabs' component={MenuTabs}
                options={{
                    headerStyle: {
                        height: 0
                    }
                }}
            />
            
        </Stack.Navigator>
    )
}