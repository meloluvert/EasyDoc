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

export function Camera({navigation}: ProfileTypes) {
    const [facing, setFacing] = useState<CameraType>("back");
    const [permission, requestPermission] = useCameraPermissions();
    const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
    const ref = useRef<CameraView>(null)
    const [photo, setPhoto] = useState<CameraCapturedPicture>();
    if (!permission) {
        return <Loading />
    }
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}> Você precisa dar permissão para acesso à Câmera </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }
    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
    async function takePicture() {
        if (ref.current) {
            const picture = await ref.current.takePictureAsync({ imageType: 'jpg', quality: 0 })
            setPhoto(picture)
        }
    }
    async function savePhoto() {
        if (permissionMedia!.status !== 'granted') {
            await requestPermissionMedia();
        }
        const asset = await MediaLibrary.createAssetAsync(photo!.uri)
        MediaLibrary.createAlbumAsync("Images", asset, false)
        Alert.alert("Imagem salva com sucesso!")

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
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <AntDesign name="back" size={70} color={colors.primary}/>
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
