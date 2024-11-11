import React, { useEffect, useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { ImageBackground, ImageSourcePropType, TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { useAuth } from "../../hook/auth";
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

    {/* para usar o laoding antigo, achei mais fácil */}
    const { signIn, setLoading } = useAuth()
    
    const handlePress = async () => {
        setLoading(true)
        
        const html = await generatePdf(item.template);
        const file = await printToFileAsync({
            html: html,
            base64: false
        });

        await shareAsync(file.uri);
        setLoading(false)
    };

    
    return (
       
            <TouchableOpacity style={[{backgroundColor:item.colorBg}, styles.card]} onPress={handlePress}>
                <Image style={styles.back} source={item.img}/>
                <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
        
       
    );
}

