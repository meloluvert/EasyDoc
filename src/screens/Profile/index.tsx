import * as React from "react";
import { View, Text, TextInput, Button} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { useAuth } from "../../hook/auth";
import { formStyles } from "./styles";
import { profile } from "./styles";
import { ButtonInterface } from "../../components/ButtonAuth";
import { ScrollView } from "react-native";
export interface IResume {
    name?: string;
    email?: string;
    dtNasc?: string;
    telefone?: string;
    desc?: string;
}

export function Profile() {
    const [data, setData] = useState<IResume>({ name: '', email: '', dtNasc: '', telefone: '', desc: '' }); // Inicializa com um objeto vazio ou com dados padrão
    const { user, signOut } = useAuth();
    useEffect(() => {
        // Função assíncrona para buscar dados do AsyncStorage ao carregar a tela
        const getData = async () => {
            try {
                const nome = await AsyncStorage.getItem('nome');
                const email = await AsyncStorage.getItem('email')
                const dtNasc = await AsyncStorage.getItem('dtNasc')
                const telefone = await AsyncStorage.getItem('telefone')
                const desc = await AsyncStorage.getItem('desc')



                if (nome !== null) {
                    setData(prevData => ({ ...prevData, name: nome })); // Atualiza apenas o campo 'name'
                }
                if (email !== null) {
                    setData(prevData => ({ ...prevData, email: email })); // Atualiza apenas o campo 'name'
                }
                if (dtNasc !== null) {
                    setData(prevData => ({ ...prevData, dtNasc: dtNasc })); // Atualiza apenas o campo 'name'
                }
                if (telefone !== null) {
                    setData(prevData => ({ ...prevData, telefone: telefone })); // Atualiza apenas o campo 'name'
                } if (desc !== null) {
                    setData(prevData => ({ ...prevData, desc: desc })); // Atualiza apenas o campo 'name'
                }



            } catch (e) {
                console.error('Erro ao obter dados do AsyncStorage:', e);
            }
        };

        getData(); // Chama a função ao carregar a tela
    }, []); // Dependência vazia para executar apenas uma vez ao montar o componente

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('nome', data.name || ''); // Salva o nome no AsyncStorage
            await AsyncStorage.setItem('email', data.email || '');
            await AsyncStorage.setItem('dtNasc', data.dtNasc || '');
            await AsyncStorage.setItem('telefone', data.telefone || '');
            await AsyncStorage.setItem('desc', data.desc || '');
            console.log(data)
            console.log('Dados salvos com sucesso!');
        } catch (e) {
            console.error('Erro ao salvar dados:', e);
        }
    };

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('nome'); // Remove o nome do AsyncStorage
            await AsyncStorage.removeItem('email');
            await AsyncStorage.removeItem('dtNasc');
            await AsyncStorage.removeItem('telefone');
            await AsyncStorage.removeItem('desc');

            setData({ ...data, name: '', email: '', dtNasc: '', telefone: '', desc: '' }); // Limpa o campo 'name' no estado local
            console.log('Dados removidos com sucesso!');
        } catch (e) {
            console.error('Erro ao remover dados:', e);
        }
    };

    const handleChange = (item: Partial<IResume>) => {
        setData(prevData => ({ ...prevData, ...item })); // Atualiza o estado local conforme o usuário digita
    };

    return (
        <ScrollView style={formStyles.container}>
            <Text style={formStyles.formInput}>Os seus dados ficaram armazenados localmente, ou seja, se logar em outro celular com a mesma contra, seus dados NÃO serão recuperados</Text>
            <View style={formStyles.formInput}>
                <Text>Nome</Text>
                <TextInput
                    placeholder=' João Silva'
                    style={formStyles.TextInp}
                    value={data.name}
                    onChangeText={(text) => handleChange({ name: text })}
                />
            </View>
            <View style={formStyles.formInput}>
                <Text>Email</Text>
                <TextInput
                    placeholder=' joaosilva@mail.com'
                    style={formStyles.TextInp}
                    value={data.email}
                    onChangeText={(text) => handleChange({ email: text })}
                />
            </View>
            <View style={formStyles.formInput}>
                <Text>Data de Nascimento</Text>
                <TextInput
                    placeholder=' 21/07/1994'
                    style={formStyles.TextInp}
                    value={data.dtNasc}
                    onChangeText={(text) => handleChange({ dtNasc: text })}
                />
            </View>
            <View style={formStyles.formInput}>
                <Text>Telefone</Text>
                <TextInput
                    placeholder=' (35) 99899-6987'
                    style={formStyles.TextInp}
                    value={data.telefone}
                    onChangeText={(text) => handleChange({ telefone: text })}
                />
            </View>
            <View style={formStyles.formInput}>
                <Text>Descrição</Text>
                <TextInput
                    placeholder=' 
                    Recém-formado em Direito pela Fundação Getúlio Vargas. Passei o último semestre como estagiário de direito criminal no escritório Leis Aplicadas, onde recebi uma avaliação perfeita de todos os sócios. Busco combinar o que aprendi nesta experiência com os meus estudos para reforçar o setor criminal do seu escritório.
                    '
                    style={formStyles.TextInp}
                    multiline={true}
                    numberOfLines={10}
                    value={data.desc}
                    onChangeText={(text) => handleChange({ desc: text })}
                />
            </View>

            <ButtonInterface title="Sair" type="primary" onPressI={signOut} />
            <ButtonInterface title="Salvar" type="primary" onPressI={storeData} />
            <ButtonInterface title="Excluir" type="primary" onPressI={removeData} />
        </ScrollView>
    );
}
