import * as React from "react";
import { View, Text, FlatList } from "react-native";
import { useProfileData } from "../../services/data/Resume";
import { CardResume } from "../../components/CardResume";
import { renderMinimal } from "../../resumes/Minimal/minimalGray";
import { orangeWhite } from "../../resumes/index";
import { renderOrangeWhite } from "../../resumes/OrangeWhite/orangeWhite";

import { useAuth } from "../../hook/auth";
export function Docs() {

    
    const { data: dados, getData } = useProfileData();
    const generatePdf = async (template: string) => {
        await getData(); // Ensure data is fetched
        switch (template) {
            case 'MinimalGray':
                console.log(dados)
                return renderMinimal(dados);
                break;
            case 'OrangeWhite':
                return  renderOrangeWhite(dados);
            default:
                break;
        }
    };

    const datas = [
        {
            id: '1',
            name: 'Orange',
            colorBg: '#b69349',
            template: 'OrangeWhite',
            img: require('../../assets/Resumes/OrangeWhite.jpeg')
        },
        {
            id: '2',
            name: 'Gray',
            colorBg:'#ccc',
            template: 'MinimalGray',
            img: require('../../assets/Resumes/MinimalGray.jpeg')
        }
    ];

    return (
        <View>
            <FlatList
                data={datas}
                renderItem={({ item }) => <CardResume item={item} generatePdf={generatePdf} />}
                keyExtractor={(item) => String(item.id)}
                horizontal={true}
            />
        </View>
    );
}
