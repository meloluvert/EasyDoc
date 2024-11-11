import { useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import *  as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles'
import { Album } from '../../components/Album';
import { ButtonInterface } from '../../components/ButtonAuth';
import React from 'react';
import { ProfileTypes } from '../../navigation/profileNavigation';
export function Imagens({navigation}:ProfileTypes) {
   // Declara o estado "albums" que será utilizado para armazenar uma lista de álbuns da Media Library.
const [albums, setAlbums] = useState<MediaLibrary.Album[] | null>(null);

// Declara o estado "permissionResponse" para controlar a resposta de permissão do usuário e "requestPermission" para solicitar permissões.
const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

// Declara o estado "image" para armazenar o URI da imagem selecionada.
const [image, setImage] = useState<string | null>(null);

// Função assíncrona para obter os álbuns da Media Library.
async function getAlbums() {
    // Verifica se a permissão foi concedida. Se não foi, solicita permissão ao usuário.
    if (permissionResponse && permissionResponse.status !== 'granted' && permissionResponse.accessPrivileges !== 'all') {
        await requestPermission(); // Solicita permissões ao usuário.
    }
    // Busca os álbuns, incluindo os "smart albums" (álbuns gerados automaticamente pelo dispositivo).
    const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
        includeSmartAlbums: true,
    });
    // Atualiza o estado "albums" com a lista de álbuns obtida.
    setAlbums(fetchedAlbums);
}

    const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
// Função assíncrona para selecionar uma imagem da biblioteca de fotos.
async function pickImage() {
    // Abre a galeria de imagens e permite selecionar qualquer tipo de mídia, com a opção de editar.
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All, // Permite qualquer tipo de mídia.
        allowsEditing: true, // Permite ao usuário editar a imagem antes de escolher.
        aspect: [1, 1], // Define a proporção 1:1 para a edição.
        quality: 1, // Define a qualidade máxima para a imagem selecionada.
    });
    
    console.log("foto:",result); // Exibe o resultado da seleção da imagem no console.
    
    // Se o usuário não cancelou a seleção, atualiza o estado "image" com o URI da imagem escolhida.
    if (!result.canceled) {
        setImage(result.assets[0].uri); // Salva o URI da imagem no estado.
        // Navega para a tela 'Profile' passando o URI da imagem como parâmetro.

        if (permissionMedia!.status !== 'granted') {
            await requestPermissionMedia();
        }
        // Cria um "asset" na Media Library com a URI da foto capturada.
        const asset = await MediaLibrary.createAssetAsync(result.assets[0].uri);

        // Cria um álbum chamado "EasyDoc" na galeria e salva o asset lá.
        MediaLibrary.createAlbumAsync("EasyDoc", asset, false);
        //criando o endereço compelto da imagem salva
        const endImg:string = "file:///storage/emulated/0/Pictures/EasyDoc/" + asset.filename
        console.log("uri imagem salva:", endImg)
        navigation.navigate('Profile', { imgUrl: endImg, location: null})

    }
}

    
    return (
        <>
            <ButtonInterface onPressI={pickImage} title='Abrir Imagem' type='secondary' />
            <ButtonInterface title='Camera' onPressI={()=> navigation.navigate("Câmera")} type='primary'/>
            
            <View style={styles.containerImage} >
                {image && <Image source={{ uri: image }} style={styles.image} />}
                
            </View >
             <ButtonInterface onPressI={getAlbums} title='Buscar Albuns' type='primary' /> 
            <ScrollView>
                {albums && albums.map((album) => <Album album={album} />)}

            </ScrollView > 
        </>
    );
}