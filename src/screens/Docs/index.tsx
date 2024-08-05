import * as React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { printToFileAsync } from "expo-print"
import { FlatList } from "react-native"
import { shareAsync } from "expo-sharing"
import { orangeWhite } from "../../resumes/index"
import { CardResume } from "../../components/CardResume"
import { renderMinimal } from "../../resumes/Minimal/minimal"
import { useEffect } from "react"
   
export function Docs() {
     const minimalGray = renderMinimal()
    

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