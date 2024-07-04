import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {Login} from "./../screens/Login"
import {Register} from "./../screens/Register"
import React from 'react';
type LoginStackParamList = {
    Login: undefined
    Register: undefined
}

type LoginScreenNavigatorProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
    navigation: LoginScreenNavigatorProp
}
export function LoginNavigation() {
    const Stack = createStackNavigator<LoginStackParamList>()
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}
            options={{headerStyle:{
                height:0
            }}}
            />
            <Stack.Screen name='Register' component={Register}
             options={{headerStyle:{
                height:0
            }}}
            />
        </Stack.Navigator>
    )
}