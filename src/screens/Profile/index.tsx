import * as React from "react";
import { View, Text, TextInput, Button, SafeAreaView, ImageBackground } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

import { useState, useEffect } from "react";
import { useAuth } from "../../hook/auth";
import { formStyles } from "./styles";
import { StyleSheet } from "react-native";
import { ButtonInterface } from "../../components/ButtonAuth";
import { ScrollView } from "react-native";
import { ProfileTypes } from "../../navigation/profileNavigation";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native";
import { colors } from "../../styles/const";
import { consts } from "../../styles/const";
import { ProfileStackParamList } from "../../navigation/profileNavigation";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Image } from "react-native";
import { Alert } from "react-native";
import * as SQLite from 'expo-sqlite';
import { IResume } from "../../services/data/Resume";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type ProfileRouteProp = RouteProp<ProfileStackParamList, 'Profile'>;
export function Profile({ navigation, route }: ProfileTypes) {
    const [data, setData] = useState<IResume>({ name: '', email: '', dtNasc: '', telefone: '', desc: '' }); // Inicializa com um objeto vazio ou com dados padrão
    const { user, signOut } = useAuth();

    const { imgUrl, location } = route.params || {}; // Recebe o parâmetro imgUrl
    // console.log('o que foi passado:', imgUrl)
    useEffect(() => {
        const getData = async () => {
            try {
                const db = await SQLite.openDatabaseAsync('EasyDoc');
                const result: IResume[] = await db.getAllAsync('SELECT * FROM user')
                setData(result[0])


            } catch (e) {
                console.error('Erro ao obter dados do AsyncStorage:', e);
            }
        };

    }, []);

    const storeData = async () => {
        try {
            const db = await SQLite.openDatabaseAsync('EasyDoc');
            await db.execAsync(`
            CREATE TABLE IF NOT EXISTS user(
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                name TEXT,
                email TEXT,
                dtNasc TEXT,
                telefone TEXT,
                desc TEXT,
                photoAdress TEXT
            );
        `);

            let contador: number = 0
            await db.withTransactionAsync(async () => {
                const result: any = await db.getFirstAsync('SELECT COUNT(*) FROM user');
                contador = result['COUNT(*)']
                console.log("quantidade:", contador)
            });

            if (contador != 0) {
                await db.runAsync(`
            UPDATE user 
            SET name = "${data.name}",
                email = "${data.email}",
                dtNasc = "${data.dtNasc}",
                telefone = "${data.telefone}",
                desc = "${data.desc}",
                photoAdress = "${imgUrl}"
            WHERE id = 1;
        `);
            } else {
                await db.execAsync(`
            INSERT INTO user (name, email, dtNasc, telefone, desc, photoAdress)
            VALUES ("${data.name}", "${data.email}", "${data.dtNasc}", "${data.telefone}", "${data.desc}", "${imgUrl ? imgUrl : ' '}");
        `);
            }

            console.log(await db.getAllAsync('SELECT * FROM user'))
            Alert.alert('Dados salvos com sucesso')

        } catch (e) {
            console.error('Erro ao salvar dados:', e);
        }
    };

    const removeData = async () => {
        try {

            const db = await SQLite.openDatabaseAsync('EasyDoc');
            await db.execAsync(`
            DROP TABLE IF EXISTS user;`);
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
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={formStyles.container} contentContainerStyle={formStyles.content}>
                <Text style={formStyles.formInput}>Os seus dados ficarão armazenados localmente, ou seja, se logar em outro celular com a mesma contra, seus dados NÃO serão recuperados</Text>
                <View style={formStyles.addImg}>
                    {imgUrl ? <Image source={{ uri: imgUrl }} style={formStyles.img} /> : <View style={formStyles.img} />}

                    <TouchableOpacity style={[formStyles.btn, {
                        width: 50, position: 'absolute',
                        top: consts.widthPhoto - 60,
                        right: 0
                    }]} onPress={() => navigation.navigate('Adicionar Foto')}>
                        <MaterialIcons name="add-photo-alternate" size={20} color={colors.white} />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={[formStyles.btn, {
                    position: 'absolute',
                    top: 60,
                    left: 10,
                    width: 50
                }]} onPress={() => navigation.navigate("QrCode", { whatsAppNumber: data.telefone })}>
                    <MaterialCommunityIcons name="qrcode-scan" size={20} color="white" />
                </TouchableOpacity>
                <View style={[formStyles.formInput]}>
                    <Text style={formStyles.label}>Nome</Text>
                    <TextInput
                        placeholder=' João Silva'
                        style={formStyles.TextInp}
                        value={data.name}
                        onChangeText={(text) => handleChange({ name: text })}
                    />
                </View>
                <TouchableOpacity style={formStyles.btn} onPress={() => navigation.navigate("Video")}>
                   <FontAwesome name="video-camera" />
                </TouchableOpacity>
                <View style={formStyles.formInput}>
                    <Text style={formStyles.label}>Email</Text>
                    <TextInput
                        placeholder=' joaosilva@mail.com'
                        style={formStyles.TextInp}
                        value={data.email}
                        onChangeText={(text) => handleChange({ email: text })}
                    />
                </View>
                <View style={formStyles.formInput}>
                    <Text style={formStyles.label}>Data de Nascimento</Text>
                    <TextInput
                        placeholder=' 21/07/1994'
                        style={formStyles.TextInp}
                        value={data.dtNasc}
                        onChangeText={(text) => handleChange({ dtNasc: text })}
                    />
                </View>
                <View style={formStyles.formInput}>
                    <Text style={formStyles.label}>Telefone</Text>
                    <TextInput
                        placeholder=' (35) 99899-6987'
                        style={formStyles.TextInp}
                        value={data.telefone}
                        onChangeText={(text) => handleChange({ telefone: text })}
                    />
                </View>
                <View style={formStyles.formInput}>
                    <Text style={formStyles.label}>Endereço</Text>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <TextInput
                            placeholder='Varginha-MG'
                            style={[formStyles.TextInp, {
                                flex:1,
                                flexGrow:10
                            }]}
                            value={ location || data.telefone}
                            onChangeText={(text) => handleChange({ endereco: text })}
                        />
                        <TouchableOpacity style={[formStyles.btn, {
                            width: 50,
                            flexGrow: 0.5
                         }]} onPress={() => navigation.navigate('Notificação') }>
                         {/*navigation.navigate('Endereco')}*/}
                            {/* <FontAwesome name="map-marker" size={24} color="white" /> */}
                            < AntDesign name="notification" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={formStyles.formInput}>
                    <Text style={formStyles.label}>Descrição</Text>
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

                <ButtonInterface title="Sair" type="primary" onPressI={signOut} style={formStyles.btn} />
                <ButtonInterface title="Salvar" type="primary" onPressI={storeData} style={formStyles.btn} />
                <ButtonInterface title="Excluir" type="primary" onPressI={removeData} style={formStyles.btn} />
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //   paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});