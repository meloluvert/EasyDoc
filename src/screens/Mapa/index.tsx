
import MapView, { Marker, Polyline, Region } from "react-native-maps"
import React from "react"
import { colors } from "../../styles/const"
import { useState } from "react" 
import { View } from "react-native"
import { styles } from "../LocationMap/styles"
import { MapTypes } from "../../navigation/ProvaMapa"
export function Mapa({navigation, route}:MapTypes) {
    const [origin, setOrigin] = useState<Region | null>(null)
    const { cordenadas } = route.params || {};
    
    return (
        <View>
<MapView region={origin} showsUserLocation = { true} style={styles.map} >
            <Polyline
            coordinates={
        [
             { latitude: Number(cordenadas.origem.latitude), longitude: Number(cordenadas.origem.longitude) },
              { latitude: Number(cordenadas.destino.latitude), longitude: Number(cordenadas.destino.longitude) }
       
        ]
    }
    strokeColor = { colors.primary }
    strokeWidth = { 2}
        />	
        <Marker key={1} coordinate={{ latitude: Number(cordenadas.origem.latitude), longitude: Number(cordenadas.origem.longitude) }} />
        <Marker key={2} coordinate={{ latitude: Number(cordenadas.destino.latitude), longitude: Number(cordenadas.destino.longitude) }} />


</MapView>
        </View>
                        )
}

