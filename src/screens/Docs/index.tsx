import * as React from "react";
import { View, FlatList } from "react-native";
import { useProfileData } from "../../services/data/Resume";
import { CardResume } from "../../components/CardResume";
import { renderMinimal } from "../../resumes/Minimal/minimalGray";
import { renderOrangeWhite } from "../../resumes/OrangeWhite/orangeWhite";
import { ButtonInterface } from "../../components/ButtonAuth";
import * as SQLite from 'expo-sqlite';

export function Docs() {

    //testando sqlite
    async function getSqlData() {

        const db = await SQLite.openDatabaseAsync('databaseName');
        await db.execAsync(`
DROP TABLE IF EXISTS test;`)
        await db.execAsync(`
PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
INSERT INTO test (value, intValue) VALUES ('test1', 123);
INSERT INTO test (value, intValue) VALUES ('test2', 456);
INSERT INTO test (value, intValue) VALUES ('test3', 789);
`);

        // `runAsync()` is useful when you want to execute some write operations.
        const results = await db.getAllAsync('SELECT * FROM test');
        console.log(results);
    }
    const { getData } = useProfileData();

    const generatePdf = async (template: string) => {
        const dados = await getData(); // Aguarda a obtenção dos dados atualizados

        switch (template) {
            case 'MinimalGray':
                return renderMinimal(dados);
            case 'OrangeWhite':
                return renderOrangeWhite(dados);
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
            <ButtonInterface onPressI={getSqlData} title='hello'/>
        </View>
    );
}
