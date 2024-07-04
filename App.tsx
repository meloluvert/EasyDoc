
import { Text, SafeAreaView } from "react-native";
import { InitialPage } from "./src/screens/InitialPages";
import Navigator from "./src/navigation";
import { useState } from "react";
import { StyleSheet } from "react-native";
//https://github.com/expo/google-fonts/tree/master/font-packages/open-sans
//veio daqui
import React from "react";
import { OpenSans_800ExtraBold, useFonts } from "@expo-google-fonts/open-sans/";
import { Login } from './src/screens/Login'
import { LoginNavigation } from "./src/navigation/AuthNavigation";
import Navigaton from "./src/navigation";

export default function App() {
  const [page, setPage] = useState(0)
  let [fontsLoaded] = useFonts({
    OpenSans_800ExtraBold

  })
  if (!fontsLoaded) {
    return null
  }

  if (page == 0 || page == 1) {
    return (
      <InitialPage page={page} setPage={setPage} />
    );
  } else {
    return (


      <SafeAreaView style={stylesArea.container} >
        <Navigaton />
      </SafeAreaView>

    );
  }

}

const stylesArea = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50
  }
});
