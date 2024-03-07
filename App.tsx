
import { Text } from "react-native";
import { InitialPage } from "./src/screens/InitialPages";
import { OpenSans_800ExtraBold_Italic, useFonts, } from "@expo-google-fonts/open-sans";
import { styles } from "./src/styles/GlobalStyle";
export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_800ExtraBold_Italic

  })
  if(!fontsLoaded){
    return null
  }
  return (
     <InitialPage/>
  );
}
