import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { apiMessage } from "../../services/data";
import { IMessage, IResponseChat } from "../../services/data/Chat";
import { useAuth } from "../../hook/auth";
import { MessageTypes } from "../../navigation/messageNavigation";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../styles/const";
export function Chat({navigation}:MessageTypes) {
    const [message, setMessage] = useState<IResponseChat[]>([])
    const { setLoading } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadMessage() {
            const response = await apiMessage.index()
            setMessage(response.data)
        }
        setLoading(false)
        loadMessage()
        navigation.addListener("focus", ()=> loadMessage())
    }, [])
    interface itemMessage {
        item: IResponseChat
    }

    const renderItem = (({ item }: itemMessage) => {
        return (
            <View style={styles.item} >
                <Text style={styles.itemText}> Nome:{item.user.name}</Text>
                <Text style={styles.itemText}> Título: {item.title} </Text>
                < Text style={styles.itemText} > Mensagem: {item.message} </Text>
            </View>
        )
    })
    
    return (
        <View style={styles.container} >
            {
                message.length > 0 && (
                    <FlatList
                        data={message}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item.id)}
                            />
        )
            }
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("CadMessage")}>
            <AntDesign name="pluscircle" size={40} color={colors.white}></AntDesign>
            </TouchableOpacity>

        </View>
    )
}