import React from 'react';
import { useState, useEffect } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { styles } from './styles';
import { ProfileTypes } from '../../navigation/profileNavigation';
import { EventSubscription } from 'expo-notifications';
export function Acelerometro({ navigation, route }: ProfileTypes) {
    const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0, });
    const [subscription, setSubscription] = useState<EventSubscription | null>(null);
    const _slow = () => Accelerometer.setUpdateInterval(1000); const _fast = () => Accelerometer.setUpdateInterval(16);

    const _subscribe = () => { setSubscription(Accelerometer.addListener(setData)); };
    const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };
    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    return (
        
            <View style={styles.container}>
                <Image source={require("../../assets/estrada.gif")} style={styles.fundo} />
                <Image source={require("../../assets/carro.png")} style={{
                    width: 70,
                    height: 50,
                    position: 'absolute',
                    left: (Dimensions.get("screen").width / 2.5) - (x * Dimensions.get("screen").width / 3),
                    top: (Dimensions.get("screen").height / 3) - (y*80)
               }} />
                <Text style={styles.text}> Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
                <Text style={styles.text}>d: {(Dimensions.get("screen").width / 2).toFixed(4)}</Text>
                <Text style={styles.text}>x: {x.toFixed(4)}</Text>
                <Text style={styles.text}>y: {y.toFixed(4)}</Text>
            <Text style={styles.text}>z: {z.toFixed(4)}</Text >
                 <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}> <Text> {subscription ? 'On' : 'Off'} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}> 
                    <Text>Slow</Text> 
                    </TouchableOpacity> 
               <TouchableOpacity onPress={_fast} style={styles.button}> 
               <Text>Fast</Text> 
               </TouchableOpacity> 
            </View >
            </View >
            
    );
}
