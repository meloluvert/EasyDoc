import { View, Text } from "react-native";
import { ButtonInterface } from "../../components/ButtonAuth";
import React from "react";

export function Register() {
    return (
        <View>
            <ButtonInterface type="primary" title={"Cadastre-se"} />
            <ButtonInterface type="secondary" title={"Voltar"} />
            <Text>a</Text>
        </View>
    )
}