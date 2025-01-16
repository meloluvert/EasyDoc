import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, TextInput, Alert } from 'react-native';

import * as Notifications from 'expo-notifications';
import { SelectList } from 'react-native-dropdown-select-list'
import { styles } from './styles';
import { registerForPushNotificationsAsync } from '../../services/data/PushNotification';
import { apiPush, apiUser } from '../../services/data';
import { ButtonInterface } from '../../components/ButtonAuth';
import { Loading } from '../../components/Loading';
import { ISendMessage } from '../../services/data/Push';
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});
interface ISelected {
    key?: string
    value?: string
}

export default function Notification() {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [channels, setChannels] = useState<Notifications.NotificationChannel[]>([]);
    const [notification, setNotification] = useState<Notifications.Notification | undefined>(
        undefined
    );
    const notificationListener = useRef<Notifications.EventSubscription>();
    const responseListener = useRef<Notifications.EventSubscription>();

    const [users, setUsers] = useState<ISelected[] | undefined>()
    const [data, setData] = useState<ISendMessage>()
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token));

        if (Platform.OS === 'android') {
            Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
        }
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });
        async function requestUserToken() {
            const response = await apiUser.index()
            setUsers(response.data.map((i) => ({
                key: i.token,
                value: i.name
            })))
        }
        requestUserToken()
        return () => {
            notificationListener.current &&
                Notifications.removeNotificationSubscription(notificationListener.current);
            responseListener.current &&
                Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);
    function dataChange(item: ISendMessage) {
        setData({ ...data, ...item });
    }
    async function sendPushNotification() {
        if (data?.body && data.title && data.to) {
            const response = await apiPush.send(data)
            console.log(response)
            Alert.alert(response.data.data.status)
        } else {
            Alert.alert('Preencha todos os campos!!!')
        }
    } if (!users) {
        return <Loading />
    }
    return (
        <View>
            <View>
                {users && (
                    <>
                        <SelectList setSelected={(i: string) => dataChange({ to: i })}
                            data={users}
                            save="key"
                            placeholder="Nomes"
                            searchPlaceholder="Buscar"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Título"
                            onChangeText={(i) => dataChange({ title: i })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Mensagem"
                            multiline={true}
                            onChangeText={(i) => dataChange({ body: i })} /> <ButtonInterface onPressI={sendPushNotification} title='Enviar' type='primary' />
                    </>
                )}
            </View>
            <Text>Mensagem Recebida: </Text>
            <Text>Title: {notification && notification.request.content.title}</Text> <Text>Body: {notification && notification.request.content.body}</Text> <Text>Your expo push token: {expoPushToken}</Text>
            <Text>{`Channels: ${JSON.stringify(
                channels.map(c => c.id),
                null,
                2)}`}
            </Text>
        </View>
    );
}
