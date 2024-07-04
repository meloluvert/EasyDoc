import React, {useState} from 'react'
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { ButtonInterface } from "../../components/ButtonAuth";
import { LoginTypes } from "../../navigation/AuthNavigation";

export function Login({navigation}:LoginTypes) {
    function voltar(){
        navigation.navigate('Register')
    }
    return (
        <View>
            <ButtonInterface type="primary" title={"Entrar"} />
            <ButtonInterface type="secondary" title={"Cadastre-se"} onPressI={voltar}/>
            <Text>a</Text>
        </View>
    )
}