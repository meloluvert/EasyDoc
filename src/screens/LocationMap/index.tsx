import { useEffect, useState } from "react";
import * as Location from "expo-location"
import MapView, { Marker, Polyline, Region } from "react-native-maps"
import { styles } from "./styles";
import React from "react";
import { colors } from "../../styles/const";
import { Text, View } from "react-native";
export function LocationMap() {
    const [location, setLocation] = useState<null | Location.LocationObject>(null);
    const [region, setRegion] = useState<Region>();
    const [marker, setMarker] = useState<Region[]>()
    const [erroMsg, setErrorMsg] = useState<null | string>(null)
    useEffect(() => {
        const handleLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status != 'granted') {
                setErrorMsg("Permissão para acessar localização negada")
                return;
            }

            let location = await Location.getCurrentPositionAsync()
            if (location) {
                setLocation(location)
                setRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004
                })
                setMarker([
                    {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004
                    }
                ])
            }
        }

        handleLocation();
    }, [])
    let text = "Esperando"
    if (erroMsg) {
        text = erroMsg;
    } else if (location) {
        text = JSON.stringify(location)
    }
    return (
        <View style={styles.container}>
            {!region && <Text style={styles.paragrafo}>{text}</Text>}
            {region && (
                <MapView style={styles.map} region={region} showsUserLocation={true}>
                    {marker &&
                        marker.map((item) => (
                            <Marker key={item.latitude} coordinate={item} />
                        ))
                    }
                    <Polyline
                        coordinates={[
                            { latitude: -21.5512848, longitude:-45.4452465 },
                            { latitude: -22.770671, longitude: -43.374206 }
                        ]}
                        strokeColor={colors.primary}
                        strokeWidth={2}
                    />
                </MapView>

            )}
        </View>
    )
}
