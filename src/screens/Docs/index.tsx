import * as React from "react";
import { View, FlatList } from "react-native";
import { useProfileData } from "../../services/data/Resume";
import { CardResume } from "../../components/CardResume";
import { renderMinimal } from "../../resumes/Minimal/minimalGray";
import { renderOrangeWhite } from "../../resumes/OrangeWhite/orangeWhite";


export function Docs() {

    const { getData } = useProfileData();

    const generatePdf = async (template: string) => {

        const dados = await getData();
        console.log("getData:", dados[0])
        switch (template) {
            case 'MinimalGray':
                
                return renderMinimal(dados[0]);
            case 'OrangeWhite':
                return renderOrangeWhite(dados[0]);
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
            img: require('../../assets/Resumes/OrangeWhite.jpeg'),
        },
        {
            id: '2',
            name: 'Gray',
            colorBg: '#ccc',
            template: 'MinimalGray',
            img: require('../../assets/Resumes/MinimalGray.jpeg'),
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
