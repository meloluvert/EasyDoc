import { View, Text } from "react-native";
import { ButtonInterface } from "../../components/ButtonAuth";
import React from "react";
import { LoginTypes } from "../../navigation/AuthNavigation";

export function Register({navigation}:LoginTypes) {
    function voltar(){
        navigation.navigate("Login")
    }
    return (
        <View>
            <ButtonInterface type="primary" title={"Cadastre-se"} />
            <ButtonInterface type="secondary" title={"Voltar"} onPressI={voltar} />
            <Text>a</Text>
        </View>
    )
}