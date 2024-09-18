import { BarcodeScanningResult, CameraView, useCameraPermissions } from "expo-camera";
import { useAuth } from "../../hook/auth";
import React from "react";
import { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'
import { ButtonInterface } from "../../components/ButtonAuth";
import { Loading } from "../../components/Loading";
import { ProfileTypes } from "../../navigation/profileNavigation";
import * as Linking from 'expo-linking';

export function QrCode({ navigation, route }: ProfileTypes) {
    const { user } = useAuth()
    const [scanned, setScanned] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    if (!permission) {
        return <Loading />
    }
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message} >Você precisa dar permissão para acesso à Câmeras </Text> 
                <ButtonInterface onPressI={requestPermission} type="primary" title="Solicitar Permissao"></ButtonInterface>
            </View>
        );
    }
    function handleBarcodeScanner({ data }: BarcodeScanningResult) {
        Linking.openURL(data);
        setScanned(true)
    }
     
    const { whatsAppNumber } = route.params || {} ;
    console.log('Número do whats', whatsAppNumber)
    let link:string = "https://wa.me/" + whatsAppNumber
     console.log("link",link)
    return (
        <>
            {user && user.user.name && (
                <>
                <Image source={{ uri: `https://image-charts.com/chart?chs=500x500&cht=qr&chl=${link}&choe=UTF-8` }} style={styles.qrcode} />
                <Text>Compartilhe seu telefone</Text>
                </>
            )}
            {!scanned ? (
                <CameraView
                    style={styles.qrcode}
                    barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
                    onBarcodeScanned={handleBarcodeScanner} />
            ) : (
                <ButtonInterface onPressI={() => setScanned(false)} title="Scanear Novamente" type="primary" />
            )}
        </>

    )
}
