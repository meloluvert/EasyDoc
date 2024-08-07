import React, { useState } from 'react'
import { View, Text, TextInput, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { ButtonInterface } from "../../components/ButtonAuth";
import { LoginTypes } from "../../navigation/AuthNavigation";
import { MaterialIcons } from '@expo/vector-icons';
import { formStyles } from './../Login/styles'
import { Image } from 'react-native';
import { stylesInitial } from '../../styles/InitialPages';

import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';
import { useAuth } from '../../hook/auth';
export interface IRegister {
    email?: string;
    name?: string
    password?: string;
}
export function Register({ navigation }: LoginTypes) {
    const icon = require('./../../assets/icon.png')
    const [data, setData] = useState<IRegister>()
    const { setLoading } = useAuth()
    function voltar() {
        navigation.navigate("Login")
    }
    function handleChange(item: IRegister) {
        setData({ ...data, ...item })
    }
    async function handleRegister() {
        if (data?.email && data.password) {
            setLoading(true)
            try {
                const response = await apiUser.register(data)
                Alert.alert(`${response.data.name} cadastrado!!!`)
                navigation.navigate("Login")
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert('uggu')
            }
            setLoading(false)

        } else {
            Alert.alert('Preencha tudo')
        }
    }
    return (
        <View style={formStyles.container}>
            <Image source={icon} style={stylesInitial.iconApp} />
            <View style={formStyles.formInput}>
                <Ionicons name="person-circle-outline" size={30} color="black" style={formStyles.iconInput}
                />
                <TextInput
                    placeholder='João'
                    style={formStyles.TextInp}
                    onChangeText={(i) => handleChange({ name: i })}
                />
            </View>
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
                    placeholder='********'
                    style={formStyles.TextInp}
                    secureTextEntry={true}
                    onChangeText={(i) => handleChange({ password: i })}
                />
            </View>
            <ButtonInterface type="primary" title={"Cadastre-se"} onPressI={handleRegister} />
            <ButtonInterface type="secondary" title={"Voltar"} onPressI={voltar} />
        </View>

    )
}