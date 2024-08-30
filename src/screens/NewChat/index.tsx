import { useState } from "react";
import React from "react";
import { Alert, KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { colors } from "../../styles/const";
import { ButtonInterface } from "../../components/ButtonAuth";
import { IMessage } from "../../services/data/Chat";
import { useAuth } from "../../hook/auth";
import { AxiosError } from "axios";
import { apiMessage } from "../../services/data";
import { styles } from "./styles";
import { MessageTypes } from "../../navigation/messageNavigation";

export function NewChat({ navigation }: MessageTypes) {
    const [data, setData] = useState<IMessage>()
    const { setLoading } = useAuth()
    function handleChange(item: IMessage) {
        setData({ ...data, ...item });
    }
    async function handleCadMessage() {
        if (data?.title && data.message) {
            setLoading(true)
            try {
                console.log(data.title)
                await apiMessage.store(data)
                Alert.alert("Mensagem cadastrada!!!")
                navigation.navigate("Message")
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!!!")
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}> Cadastrar Mensagem</Text>
                <View style={styles.formRow}>
                    <TextInput
                        placeholderTextColor={colors.secondary}
                        style={styles.input}
                        placeholder="Titulo"
                        onChangeText={(i) => handleChange({ title: i })}/>
                </View>
                <View style={styles.formRow}>
                    <TextInput
                        placeholderTextColor={colors.secondary}
                        style={styles.input}
                        placeholder="Mensagem"
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(i)=> handleChange({message: i })} />
                </View>
                <ButtonInterface title='Enviar' type='primary' onPressI={handleCadMessage} />
                <ButtonInterface title='Voltar' type='secondary' onPressI={() => navigation.navigate("Message")} />
            </KeyboardAvoidingView >
        </View >
    )
}