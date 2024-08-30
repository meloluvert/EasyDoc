import React, { useEffect, useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { ImageBackground, ImageSourcePropType, TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export interface ICard {
    item: {
        name: string,
        template: string,
        colorBg: string,
        img: ImageSourcePropType
    },
    generatePdf: (template: string) => Promise<string | void >
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
       
            <TouchableOpacity style={[{backgroundColor:item.colorBg}, styles.card]} onPress={handlePress}>
                <Image style={styles.back} source={item.img}/>
                <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
        
       
    );
}

