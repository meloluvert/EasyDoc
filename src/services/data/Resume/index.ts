import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SQLite from 'expo-sqlite';
export interface IResume {
    name?: string;
    email?: string;
    dtNasc?: string;
    telefone?: string;
    desc?: string;
    photoAdress?: string
    endereco?:string
}

export function useProfileData() {

    const getData = async () => {
        try {
            const db = await SQLite.openDatabaseAsync('EasyDoc');
            const results = await db.getAllAsync('SELECT * FROM user')
            return results; // Retorna os dados para uso imediato
        } catch (error) {
            console.error('Erro ao obter dados do AsyncStorage:', error);
        }
    };

    return {getData};
}

        
