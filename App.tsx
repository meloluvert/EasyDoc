
import { Text, SafeAreaView } from "react-native";
import { InitialPage } from "./src/screens/InitialPages";
import Navigator from "./src/navigation";
import { useState } from "react";
import { StyleSheet } from "react-native";
import 'react-native-get-random-values'
//https://github.com/expo/google-fonts/tree/master/font-packages/open-sans
//veio daqui
import React from "react";
import { OpenSans_800ExtraBold, useFonts } from "@expo-google-fonts/open-sans/";
import { Login } from './src/screens/Login'
import { LoginNavigation } from "./src/navigation/AuthNavigation";
import { AuthProvider } from "./src/context/auth";
import Navigaton from "./src/navigation";

export default function App() {
  const [page, setPage] = useState(2)
  let [fontsLoaded] = useFonts({
    OpenSans_800ExtraBold

  })
  if (!fontsLoaded) {
    return null
  }
{/* Podemos controlar isso com async storage em uma atualização futura */}
  if (page == 0 || page == 1) {
    return (
      <InitialPage page={page} setPage={setPage} />
    );
  } else {
    return (



      <>
         <AuthProvider>
          <Navigaton /> 

        </AuthProvider> 

      </>

    );
  }

}

const stylesArea = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  }
});
