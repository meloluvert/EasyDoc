import { useEffect, useState, useRef } from "react";
import * as Location from "expo-location"
import MapView, { Marker, Polyline, Region } from "react-native-maps"
import { styles } from "./styles";
import React from "react";
import { LatLng } from "react-native-maps";
import { Alert } from "react-native";
import { colors } from "../../styles/const";
import { apiLocation } from "../../services/data";
import { Text, View } from "react-native";
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProfileTypes } from "../../navigation/profileNavigation";
import { ButtonInterface } from "../../components/ButtonAuth";
import { AxiosError } from "axios";
export function LocationMap({ navigation }: ProfileTypes) {
    const [location, setLocation] = useState<null | Location.LocationObject>(null);
    const [region, setRegion] = useState<Region>();
    const [marker, setMarker] = useState<Region[]>()
    const [erroMsg, setErrorMsg] = useState<null | string>(null)
    const [destination, setDestination] = useState<Region | null>(null)
    const [origin, setOrigin] = useState<Region | null>(null)
    const placesRef = useRef<GooglePlacesAutocompleteRef>(null)
    const [reverse, setReverse] = useState<string>()
    // Keyapi está aqui
    const apiKey = 'AIzaSyDdDU8GLhWRZjrmp55NTqrR1GUL9BOA9pA'

    const mapRef = useRef<MapView>(null)
    useEffect(() => {
        const handleLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status != 'granted') {
                setErrorMsg("Permissão para acessar localização negada")
                return;
            }

            let location = await Location.getCurrentPositionAsync()
            if (location) {
                try {
                    await apiLocation.store({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude
                    })
                } catch (error) {
                    const err = error as AxiosError
                    console.log(err.response?.data)
                }
                setLocation(location)
                const reverseGeo = await Location.reverseGeocodeAsync(
                    { latitude: location.coords.latitude, longitude: location.coords.longitude }
                )
                if (reverseGeo && reverseGeo[0].formattedAddress !== null) {
                    setReverse(reverseGeo[0].formattedAddress)
                    placesRef.current?.setAddressText(reverseGeo[0].formattedAddress)
                } else
                    console.log('error')
                setOrigin({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004
                })
            }
            const localiza = await apiLocation.index()
            if (localiza.data.length > 0) {
                for (const element of localiza.data) {
                    if (marker) {
                        setMarker([...marker, {
                            latitude: element.latitude as unknown as number,
                            longitude: element.longitude as unknown as number,
                            latitudeDelta: 0.004,
                            longitudeDelta: 0.004
                        }])
                    }
                    else {
                        setMarker([{
                            latitude: element.latitude as unknown as number,
                            longitude: element.longitude as unknown as number,
                            latitudeDelta: 0.004,
                            longitudeDelta: 0.004
                        }])
                    }

                }
            }
        }
        handleLocation();
    }, [])

    async function handleOrigin(data: GooglePlaceData, details: GooglePlaceDetail | null) {
        if (details && data) {
            setOrigin({
                latitude: details?.geometry.location.lat,
                longitude: details?.geometry.location.lng,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004
            })
            if (marker) {
                setMarker([...marker, {
                    latitude: details?.geometry.location.lat,
                    longitude: details?.geometry.location.lng,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004
                }])
            }
        }
    }
    async function handleDestination(data: GooglePlaceData, details: GooglePlaceDetail | null) {
        if (details) {
            // console.log(data["terms"].slice(-3).map(item => item.value).join(' / '))
            Alert.alert('Confirme', 'Esse é o endereço a ser passado?', [
                {
                    text: 'Adicionar Marcador',
                    onPress: function () {
                        setDestination({
                            latitude: details?.geometry.location.lat,
                            longitude: details?.geometry.location.lng,
                            latitudeDelta: 0.004,
                            longitudeDelta: 0.004
                        })
                        if (marker) {
                            setMarker([...marker, {
                                latitude: details?.geometry.location.lat,
                                longitude: details?.geometry.location.lng,
                                latitudeDelta: 0.004,
                                longitudeDelta: 0.004
                            }])
                        }
                    }
                },
                {
                    text: 'Não',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Sim', onPress: function () {
                        navigation.navigate('Profile', { imgUrl: null, location: data.description })
                    }
                },
            ])




        }
    }
    function handleClickMarker(e: LatLng) {
        if (marker) {
            setMarker([...marker, {
                latitude: e.latitude,
                longitude: e.longitude,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004
            }])
        } else {
            setMarker([{
                latitude: e.latitude,
                longitude: e.longitude,
                latitudeDelta: 0.004,
                longitudeDelta: 0.004
            }])
        }
    }
    let text = "Esperando"
    if (erroMsg) {
        text = erroMsg;
    } else if (location) {
        text = JSON.stringify(location)
    }

    return (
        <View style={styles.container}>
            {/* {!region && <Text style={styles.paragrafo}>{text}</Text>} */}
            {reverse && (
                <GooglePlacesAutocomplete

                    styles={{
                        container: styles.searchContainerOrigin,
                        textInput: styles.searchInput
                    }}
                    placeholder="Onde?"
                    fetchDetails={true}
                    GooglePlacesDetailsQuery={{ fields: 'geometry' }}
                    enablePoweredByContainer={true}
                    query={
                        {
                            key: apiKey,
                            language: 'pt-BR'
                        }
                    }
                    onFail={setErrorMsg}
                    onPress={handleOrigin}
                />
            )}
            <GooglePlacesAutocomplete

                styles={{
                    container: styles.searchContainerDestination,
                    textInput: styles.searchInput
                }}
                placeholder="Destino"
                fetchDetails={true}
                GooglePlacesDetailsQuery={{ fields: 'geometry' }}
                enablePoweredByContainer={true}
                query={
                    {
                        key: apiKey,
                        language: 'pt-BR'
                    }
                }
                onFail={setErrorMsg}
                onPress={handleDestination}
            />
            {!origin && !reverse && <Text style={styles.paragrafo}>{text}</Text>}
            {origin && reverse && (

                <MapView style={styles.map} region={region} showsUserLocation={true} ref={mapRef} onPress={(e) => handleClickMarker(e.nativeEvent.coordinate)}>
                    {marker &&
                        marker.map((item) => (
                            <Marker key={item.latitude} coordinate={item} />
                        ))
                    }
                    {destination && (
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={apiKey}
                            strokeWidth={3}
                            strokeColor={colors.primary}
                            lineDashPattern={[0, 0, 0, 0, 0]}
                            onReady={(result) => {
                                mapRef.current?.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        top: 24,
                                        bottom: 24,
                                        left: 24,
                                        right: 24
                                    }
                                })
                            }}
                        />
                    )}

                    {/* <Polyline
                            coordinates={[
                                { latitude: -21.5512848, longitude: -45.4452465 },
                                { latitude: -22.770671, longitude: -43.374206 }
                            ]}
                            strokeColor={colors.primary}
                            strokeWidth={2}
                        /> */}
                    {/* 
formato "data"
                     {"description": "Nave Espacial de Varginha - Praça Getúlio Vargas - Centro, Varginha - MG, Brasil",
                      "matched_substrings": [{"length": 7, "offset": 0}],
                       "place_id": "ChIJNZ-Qjo-SypQRV3lXyfF0Jo8",
                        "reference": "ChIJNZ-Qjo-SypQRV3lXyfF0Jo8", 
                        "structured_formatting": {
                            "main_text": "Nave Espacial de Varginha",
                             "main_text_matched_substrings": [[Object]],
                              "secondary_text": "Praça Getúlio Vargas - Centro, Varginha - MG, Brasil"},
                        "terms": [
                            {"offset": 0, "value": "Nave Espacial de Varginha"},
                            {"offset": 28, "value": "Praça Getúlio Vargas"},
                             {"offset": 51, "value": "Centro"},
                              {"offset": 59, "value": "Varginha"},
                               {"offset": 70, "value": "MG"},
                                {"offset": 74, "value": "Brasil"}],
                             "types": ["establishment", "tourist_attraction", "point_of_interest"]} */}




                </MapView>
            )}
    
        </View >
    );
}
