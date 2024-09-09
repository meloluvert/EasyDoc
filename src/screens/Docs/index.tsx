import * as React from "react";
import { View, FlatList } from "react-native";
import { useProfileData } from "../../services/data/Resume";
import { CardResume } from "../../components/CardResume";
import { renderMinimal } from "../../resumes/Minimal/minimalGray";
import { renderOrangeWhite } from "../../resumes/OrangeWhite/orangeWhite";
import { ButtonInterface } from "../../components/ButtonAuth";
import * as SQLite from 'expo-sqlite';
import { IResume } from "../Profile";

export function Docs() {

    //testando sqlite
    async function getSqlData() {
        const dados = await getData();
        // Abre o banco de dados SQLite
        const db = await SQLite.openDatabaseAsync('EasyDoc');

        // Executa o comando para remover a tabela, caso ela exista
        await db.execAsync(`DROP TABLE IF EXISTS user;`);

        // Configura o modo de journal do banco de dados e cria a tabela, se não existir
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS user(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                name TEXT,
                email TEXT,
                dtNasc TEXT,
                telefone TEXT,
                desc TEXT
            );
        `);

        // Insere dados na tabela user, utilizando os valores fornecidos pela interface IResume
        await db.execAsync(`
            INSERT INTO user (name, email, dtNasc, telefone, desc)
            VALUES ('${dados.name}', '${dados.email}', '${dados.dtNasc}', '${dados.telefone}', '${dados.desc}');
        `);


        // `runAsync()` is useful when you want to execute some write operations.
        const results = await db.getAllAsync('SELECT * FROM user');
        console.log(results)
    }
    const { getData } = useProfileData();

    const generatePdf = async (template: string) => {

        // const dados = await getData(); // Aguarda a obtenção dos dados atualizados
        const db = await SQLite.openDatabaseAsync('EasyDoc');
        const dados = await db.getAllAsync('SELECT * FROM user');
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
            <ButtonInterface type="primary" onPressI={() => getSqlData()} title='teste SQLite' /> 
        </View>
    );
}
