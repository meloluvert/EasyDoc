import * as React from "react";
import { View, Text, FlatList } from "react-native";
import { useProfileData } from "../../services/data/Resume";
import { CardResume } from "../../components/CardResume";
import { renderMinimal } from "../../resumes/Minimal/minimal";
import { orangeWhite } from "../../resumes/index";

export function Docs() {
    const { data: dados, getData } = useProfileData();
    
    const generatePdf = async (template) => {
        await getData(); // Ensure data is fetched
        const minimalGray = renderMinimal(dados);
        return template === 'Gray' ? minimalGray : orangeWhite;
    };

    const datas = [
        {
            id: '1',
            name: 'Orange',
            template: 'Orange'
        },
        {
            id: '2',
            name: 'Gray',
            template: 'Gray'
        }
    ];

    return (
        <View>
            <Text>Docs</Text>
            <FlatList
                data={datas}
                renderItem={({ item }) => <CardResume item={item} generatePdf={generatePdf} />}
                keyExtractor={(item) => String(item.id)}
            />
        </View>
    );
}
