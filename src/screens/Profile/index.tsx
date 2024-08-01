import * as React from "react"
import { View, Text } from "react-native"
import { useAuth } from "../../hook/auth"
import { ButtonInterface } from "../../components/ButtonAuth"
export function Profile(){
    const {user, signOut} = useAuth()
    return(
    <View>
        <Text>Perfil</Text>
        <ButtonInterface title="Sair" type="primary" onPressI={async () => await signOut()}/>
    </View>
    )
}