import { View, Text } from "react-native";
import { ButtonInterface } from "../../components/ButtonAuth";
import React from "react";

export function Login() {
    return (
        <View>
            <ButtonInterface type="primary" title={"Entrar"} />
            <ButtonInterface type="secondary" title={"Cadastre-se"} />
            <Text>a</Text>
        </View>
    )
}