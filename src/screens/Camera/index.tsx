import { CameraView, CameraType, useCameraPermissions, CameraCapturedPicture } from 'expo-camera'
import { useRef, useState } from 'react';
import { Button, Text, TouchableOpacity, View, Alert, ImageBackground } from 'react-native';
// import {styles} from './styles'
import { colors } from '../../styles/const';
import { AntDesign } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { Loading } from '../../components/Loading';
import { styles } from './style';
import React from 'react';
import { ProfileTypes } from '../../navigation/profileNavigation';

export function Camera({ navigation }: ProfileTypes) {
    // Estado para controlar a câmera (frontal ou traseira).
    const [facing, setFacing] = useState<CameraType>("back");

    // Estado para lidar com as permissões da câmera e função para solicitar permissões.
    const [permission, requestPermission] = useCameraPermissions();

    // Estado e função para lidar com as permissões da Media Library (para salvar fotos).
    const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();

    // Referência para a câmera, usada para acessar métodos da câmera diretamente.
    const ref = useRef<CameraView>(null);

    // Estado para armazenar a foto capturada pela câmera.
    const [photo, setPhoto] = useState<CameraCapturedPicture>();

    // Verifica se o estado das permissões da câmera está disponível.
    if (!permission) {
        // Se o estado das permissões ainda não foi resolvido, exibe uma tela de carregamento.
        return <Loading />
    }

    // Se a permissão para acessar a câmera não foi concedida, exibe uma mensagem solicitando permissão.
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Você precisa dar permissão para acesso à Câmera</Text>
                <Button onPress={requestPermission} title="Conceder permissão" />
            </View>
        );
    }

    // Função para alternar entre a câmera frontal e traseira.
    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    // Função assíncrona para tirar uma foto.
    async function takePicture() {
        // Verifica se a referência da câmera está definida.
        if (ref.current) {
            // Captura a foto com qualidade mínima e formato JPG.
            const picture = await ref.current.takePictureAsync({ imageType: 'jpg', quality: 0 });
            // Atualiza o estado da foto com a imagem capturada.
            setPhoto(picture);
        }
    }

    // Função assíncrona para salvar a foto na galeria.
    async function savePhoto() {
        // Verifica se as permissões da Media Library foram concedidas. Se não, solicita permissão.
        if (permissionMedia!.status !== 'granted') {
            await requestPermissionMedia();
        }
        // Cria um "asset" na Media Library com a URI da foto capturada.
        const asset = await MediaLibrary.createAssetAsync(photo!.uri);

        // Cria um álbum chamado "EasyDoc" na galeria e salva o asset lá.
        MediaLibrary.createAlbumAsync("EasyDoc", asset, false);
        //criando o endereço compelto da imagem salva
        const endImg:string = "file:///storage/emulated/0/Pictures/EasyDoc/" + asset.filename
        console.log("uri imagem salva:", endImg)
        navigation.navigate('Profile', { imgUrl: endImg})
        // Exibe um alerta informando que a imagem foi salva com sucesso.
        Alert.alert("Imagem salva com sucesso!");
    }

    if (photo) {
        return (
            <ImageBackground source={{ uri: photo.uri }} style={styles.camera}>
                <View style={styles.headerSave}>
                    <TouchableOpacity onPress={() => setPhoto(undefined)}>
                        <AntDesign name="back" size={70} color={colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={savePhoto}>
                        <AntDesign name="save" size={70} color={colors.primary} />
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        )
    }
    return (
        <View style={styles.container} >
            <CameraView style={styles.camera} facing={facing} ref={ref}>
                <View style={styles.headerCamera}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile', { imgUrl: null})}>
                        <AntDesign name="back" size={70} color={colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleCameraFacing}>
                        <AntDesign name="retweet" size={70} color={colors.primary} />
                    </TouchableOpacity>
                </View >
                <View style={styles.footerCamera}>
                    <TouchableOpacity onPress={takePicture} style={styles.ball} />
                </View>
            </CameraView >
        </View >
    );
}
