
import { Text } from "react-native";
import { InitialPage } from "./src/screens/InitialPages";
import Navigator from "./src/navigation";
import { useState } from "react";
//https://github.com/expo/google-fonts/tree/master/font-packages/open-sans
//veio daqui
import { OpenSans_800ExtraBold, useFonts } from "@expo-google-fonts/open-sans/";


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
    return (<Navigator />);
  }

}
