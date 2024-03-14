
import { Text } from "react-native";
import { InitialPage } from "./src/screens/InitialPages";
//https://github.com/expo/google-fonts/tree/master/font-packages/open-sans
//veio daqui
import { OpenSans_800ExtraBold, useFonts } from "@expo-google-fonts/open-sans/";
export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_800ExtraBold

  })
  if(!fontsLoaded){
    return null
  }
  return (
    //fiz a Inicial Page como um grande component, pois 
     <InitialPage/>
  );
}
