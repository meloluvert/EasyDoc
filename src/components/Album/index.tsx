import { useEffect, useState } from "react";
import * as MediaLibrary from 'expo-media-library';
import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from './styles';
interface IAlbum {
    album: MediaLibrary.Album
}

export function Album({ album }: IAlbum) {
    const [assets, setAssets] = useState<MediaLibrary.Asset[]>([]);
    useEffect(() => {
        async function getAlbumAssets() {

            const albumAssets =  await MediaLibrary.getAssetsAsync({album});
            if(album.title == "EasyDoc"){
                console.log(albumAssets)
            }
    setAssets(albumAssets.assets);
}
getAlbumAssets();
}, [album]);
return (
    <View key={album.id} style={styles.albumContainer} >
<Text>
{album.title} - {album.assetCount ?? 'no'} assets
</Text>
<View style={styles.albumAssetsContainer} >
    {assets && assets.map((asset) => (
        <Image source={{ uri: asset.uri }} width={50} height = {50} />
    ))}
</View >
</View >
)
}