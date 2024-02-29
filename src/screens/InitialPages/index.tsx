import { InitialPage1 } from "./1";
import { InitialPage2 } from "./2";
import {styles} from '../../styles/InitialPages'
import { View, Text, ImageBackground,Image, Button } from "react-native"
export function InitialPage() {
    const background = require('../../assets/Initial/1.png')
    const icon = require('../../assets/icon.png')
    return (
        
        <ImageBackground style={styles.container} source={background}>
        <View style={styles.background}>
            <Image source ={icon} style={styles.iconApp}/>

            <View >
                <InitialPage1 />
            </View>

            <View style={styles.SwitchButton}>
                <Button title="" style ={styles.SwitchButton.actived}/>
                <Button title=""/>
            </View>
        </View>
        </ImageBackground>
    )
}