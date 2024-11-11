import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { colors } from "../../styles/const";
import { coords as Coords, MapTypes } from "../../navigation/ProvaMapa";

export function Entrada({navigation}: MapTypes) {
  const [coords, setCoords] = useState<Coords>({
    origem: { latitude: 0, longitude: 0 },
    destino: { latitude: 0, longitude: 0 },
  });

  // Função para atualizar o valor de origem ou destino
  function handleChange(key: "origem" | "destino", field: "latitude" | "longitude", value: string) {
    const parsedValue = parseFloat(value);

    setCoords((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        [field]: value,
      },
    }));
  }

  return (
    <View>
      <Text>Origem</Text>
      <TextInput
        placeholder="Latitude"
        placeholderTextColor={colors.secondary}
        value={coords.origem.latitude.toString()}
        onChangeText={(text) => handleChange("origem", "latitude", text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Longitude"
        placeholderTextColor={colors.secondary}
        value={coords.origem.longitude.toString()}
        onChangeText={(text) => handleChange("origem", "longitude", text)}
        keyboardType="numeric"
      />

      <Text>Destino</Text>
      <TextInput
        placeholder="Latitude"
        placeholderTextColor={colors.secondary}
        value={coords.destino.latitude.toString()}
        onChangeText={(text) => handleChange("destino", "latitude", text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Longitude"
        placeholderTextColor={colors.secondary}
        value={coords.destino.longitude.toString()}
        onChangeText={(text) => handleChange("destino", "longitude", text)}
        keyboardType="numeric"
      />

      <Button title="Enviar" onPress={() =>  navigation.navigate('Mapas', { cordenadas:coords })} />
    </View>
  );
}
