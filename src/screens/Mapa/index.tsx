import MapView, { Marker, Polyline, Region } from "react-native-maps";
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/const";
import { View } from "react-native";
import { styles } from "../LocationMap/styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MapTypes } from "../../navigation/ProvaMapa";

export function Mapa({ navigation, route }: MapTypes) {
  const [origin, setOrigin] = useState<Region | null>(null);
  // Desestruturando as coordenadas da rota com valores padrão para evitar undefined
  const { cordenadas } = route.params || {};
const origem = cordenadas?.origem || { latitude: 0, longitude: 0 };
      const destino = cordenadas?.destino || { latitude: 0, longitude: 0 };

      console.log(cordenadas)
      {/*
  useEffect(() => {
    // Aqui você pode adicionar qualquer lógica adicional com as coordenadas, se necessário
    // Por exemplo, poderia configurar a origem no estado:
/* setOrigin({
      latitude: origem.latitude,
      longitude: origem.longitude,
      latitudeDelta: 0.0922, // Definindo o zoom inicial
      longitudeDelta: 0.0421, // Definindo o zoom inicial
    });
  }, []);
*/}
  return (
    <View style={styles.container}>
      <MapView region={{

        longitude: Number(( Number(origem.longitude)   +   Number(origem.longitude))/2),
        latitude: Number((Number(origem.latitude)+   Number(destino.latitude))/2),
        latitudeDelta:  1.5,
        longitudeDelta: 1.5,
      }} showsUserLocation={true} style={styles.map}>
        <Polyline
          coordinates={[
            { latitude: Number(origem.latitude), longitude: Number(origem.longitude) },
            { latitude: Number(destino.latitude), longitude: Number(destino.longitude) },
          ]}
          strokeColor="#000"
          strokeWidth={2}
        />
        <Marker
          key={1}
          coordinate={{
            latitude: Number(origem.latitude),
            longitude: Number(origem.longitude),
          }}
        >
          <MaterialIcons name="location-history" size={24} color="black" />
        </Marker>
        <Marker
          key={2}
          coordinate={{
            latitude: Number(destino.latitude),
            longitude: Number(destino.longitude),
          }}
        >
          <MaterialIcons name="location-history" size={24} color="black" />
        </Marker>
      </MapView>
    </View>
  );
}
