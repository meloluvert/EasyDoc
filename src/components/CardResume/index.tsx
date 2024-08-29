import React, { useEffect, useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { ImageBackground, TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export interface ICard {
    item: {
        name: string,
        template: string,
        colorBg: string
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
    const [adressImage, setAdress] = useState("")
useEffect(()=>
    {
        setAdress(`../../assets/Resumes/${item.template}.jpeg`)
    },[]
)
    

    return (
       <ImageBackground style={styles.card} source={require(adressImage)}>
            <TouchableOpacity style={[{backgroundColor:item.colorBg}, styles.btn]} onPress={handlePress}>
                <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
        </ImageBackground>
       
    );
}

