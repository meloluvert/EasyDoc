import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { ButtonInterface } from "../../components/ButtonAuth";
import { LoginTypes } from "../../navigation/AuthNavigation";
import { MaterialIcons } from '@expo/vector-icons';
import { formStyles } from './styles'
import { Image } from 'react-native';
import { stylesInitial } from '../../styles/InitialPages';

import { useAuth } from '../../hook/auth';
import { AxiosError } from 'axios';
export interface IAuth {
    email?: string;
    password?: string;
}
export function Login({ navigation }: LoginTypes) {
    const [data, setData] = useState<IAuth>()
    const { signIn, setLoading } = useAuth()
    const icon = require('./../../assets/icon.png')
    function voltar() {
        navigation.navigate('Register')
    }
    async function handleSigIn() {
        if (data?.email && data.password) {
            setLoading(true)
            try {
                await signIn(data)
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)

        } else {
            Alert.alert('Preencha tudo')
        }
    }
    function handleChange(item: IAuth) {
        setData({ ...data, ...item })
    }
    return (
        <View style={formStyles.container}>
            <Image source={icon} style={stylesInitial.iconApp} />
            <View style={formStyles.formInput}>
                <Entypo name="email" size={30} color="black" style={formStyles.iconInput}
                />
                <TextInput
                    placeholder='usuario@server.com'
                    style={formStyles.TextInp}
                    onChangeText={(i) => handleChange({ email: i })}
                />
            </View>
            <View style={formStyles.formInput}>

                <MaterialIcons name="password" size={30} color="black" style={formStyles.iconInput} />
                <TextInput
                    placeholder='************'
                    secureTextEntry={true}
                    style={formStyles.TextInp}
                    onChangeText={(i) => handleChange({ password: i })}
                />
            </View>
            <ButtonInterface type="primary" title={"Entrar"} onPressI={handleSigIn} />
            <ButtonInterface type="secondary" title={"Cadastre-se"} onPressI={voltar} />
        </View>
    )
}

