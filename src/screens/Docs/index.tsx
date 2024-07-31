import * as React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { printToFileAsync } from "expo-print"
import { shareAsync } from "expo-sharing"
import {minimalGray, orangeWhite} from "../../resumes/index"
export function Docs() {

    const html = minimalGray;

    let generatePdf = async () => {
        const file = await printToFileAsync({
            html: html,
            base64: false
        });
        await shareAsync(file.uri)
    }
    return (
        <View>
            <Text>Docs</Text>
            <TouchableOpacity onPress={generatePdf}> 
            
            <Text>Oi</Text>
            </TouchableOpacity>
        </View>
    )
}