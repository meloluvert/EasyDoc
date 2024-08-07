import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface IResume {
    name?: string;
    email?: string;
    dtNasc?: string;
    telefone?: string;
    desc?: string;
}

export function useProfileData() {
    const [data, setData] = useState<IResume>({ name: '', email: '', dtNasc: '', telefone: '', desc: '' });

    const getData = async () => {
        try {
            const nome = await AsyncStorage.getItem('nome');
            const email = await AsyncStorage.getItem('email');
            const dtNasc = await AsyncStorage.getItem('dtNasc');
            const telefone = await AsyncStorage.getItem('telefone');
            const desc = await AsyncStorage.getItem('desc');

                setData({ name: nome, email: email,dtNasc:dtNasc, telefone: telefone, desc:desc });
        } catch (error) {
            console.error('Erro ao obter dados do AsyncStorage:', error);
        }
    };

    // Chama a função para obter os dados ao montar o componente
    useEffect(() => {
        getData();
    }, []);
    //console.log('data:', data)
    return { data, getData };
}
