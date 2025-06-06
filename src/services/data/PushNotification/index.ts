import { Alert, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from "expo-notifications";
import Constants from 'expo-constants';
import { apiUser } from '..';
export async function registerForPushNotificationsAsync() {
    let token;
    if (Platform.OS == "android") {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'A channel is needed for the permissions prompt to appear', importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }
    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus != 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            let finalStatus = status
                ;
        }
        if (finalStatus !== 'granted') {
            Alert.alert('Failed to get push taken for push notification!'); return;
        }
        try {
            const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
            if (!projectId) {
                throw new Error('Project ID not found');
            }
            token = (
                await Notifications.getExpoPushTokenAsync({
                    projectId,
                })
            ).data;
            await apiUser.updateToken(token)
            console.log(token);
        } catch (e) {
            token = `${e}`;
        }
    }
    else {
        alert('Must use physical device for Push Notifications');

    }
    return token;
}
