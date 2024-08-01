
import React from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
export interface ICard{
    item:{name: string
        html: string}
    
}
export function CardResume({item}:ICard){
    let generatePdf = async () => {
        const file = await printToFileAsync({
            html: item.html,
            base64: false
        });
        await shareAsync(file.uri)
    }
    return(
        <View>

            
            <TouchableOpacity onPress={generatePdf}> 
                <Text>{item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}