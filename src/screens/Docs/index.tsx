import * as React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { printToFileAsync } from "expo-print"
import { FlatList } from "react-native"
import { shareAsync } from "expo-sharing"
import { minimalGray, orangeWhite } from "../../resumes/index"
import { CardResume } from "../../components/CardResume"
export function Docs() {

    const html = minimalGray;

    const data = [
        {
            id: '1',
            name: 'Orange',
            html: orangeWhite
        },
        {
            id: '2',
            name: 'Gray',
            html: minimalGray
        }
    ]
    return (
        <View>
            <Text>Docs</Text>
            <FlatList
                data={data}
                renderItem={CardResume}
                keyExtractor={(item) => String(item.id)}
            />
        </View>
    )
}