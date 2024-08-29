import * as React from "react";
import { View, Text, FlatList } from "react-native";
import { useProfileData } from "../../services/data/Resume";
import { CardResume } from "../../components/CardResume";
import { renderMinimal } from "../../resumes/Minimal/minimal";
import { orangeWhite } from "../../resumes/index";
import { renderOrange } from "../../resumes/OrangeWhite/orangeWhite";


{/*TROQUE AS CORES DOS CARDS*/}
export function Docs() {
    const { data: dados, getData } = useProfileData();
    
    const generatePdf = async (template: string) => {
        await getData(); // Ensure data is fetched
        switch (template) {
            case 'MinimalGray':
                return renderMinimal(dados);
                break;
            case 'OrangeWhite':
                return  renderOrange(dados);
            default:
                break;
        }
    };

    const datas = [
        {
            id: '1',
            name: 'Orange',
            colorBg: '#b69349',
            template: 'OrangeWhite'
        },
        {
            id: '2',
            name: 'Gray',
            colorBg:'#ccc',
            template: 'MinimalGray'
        }
    ];

    return (
        <View>
            <Text>Docs</Text>
            <FlatList
                data={datas}
                renderItem={({ item }) => <CardResume item={item} generatePdf={generatePdf} />}
                keyExtractor={(item) => String(item.id)}
                horizontal={true}
            />
        </View>
    );
}
