import React from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

export interface ICard {
    item: {
        name: string,
        template: string
    },
    generatePdf: (template: string) => Promise<string>
}

export function CardResume({ item, generatePdf }: ICard) {
    const handlePress = async () => {
        const html = await generatePdf(item.template);
        const file = await printToFileAsync({
            html: html,
            base64: false
        });
        await shareAsync(file.uri);
    };

    return (
        <View>
            <TouchableOpacity onPress={handlePress}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        </View>
    );
}
