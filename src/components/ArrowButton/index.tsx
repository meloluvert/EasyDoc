import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import { stylesInitial } from "../../styles/InitialPages";
import { pagesArray } from "../../screens/InitialPages/pagesArray";
import { stylesButtons } from "./styles";
import { Dispatch, SetStateAction } from "react";
import { colors } from "../../styles/colors";
import { StyleSheet } from "react-native";

interface ButtonsProps {
  page: number;
  altera: Dispatch<SetStateAction<number>>;
}

export function Buttons({ page, altera }: ButtonsProps) {
  const renderText = (page: number): JSX.Element => {
    if (page === 1) {
      return <Text style={stylesBtn.ok}>OK</Text>;
    } else {
      return <Text style={stylesButtons.Arrow}>&rarr;</Text>;
    }
  };

  return (
    //dois botões
    <View style={stylesButtons.SwitchButtonContainer}>
      <TouchableHighlight
        style={[
          stylesButtons.SwitchButton,
          page === pagesArray.length - 1
            ? stylesButtons.SwitchButtonActived
            : stylesButtons.SwitchButtonDisabled,
        ]}
        onPress={() => {
          if (page !== 0) {
            //para não vazar o vetor
            altera(page - 1);
          }
        }}
      >
        <Text style={stylesButtons.Arrow}>&larr;</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          stylesButtons.SwitchButton,
          page === 0
            ? stylesButtons.SwitchButtonActived
            : stylesButtons.SwitchButtonDisabled,
        ]}
        onPress={() => {
          if (page !== pagesArray.length ) {
            //para não vazar o vetor
            altera(page + 1);
          }
        }}
      >
        {renderText(page)}
      </TouchableHighlight>
    </View>
  );
}

const stylesBtn = StyleSheet.create({
    ok:{
        color:colors.white
    }

})