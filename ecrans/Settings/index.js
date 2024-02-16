import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import stylesSettings from './styleSettings'
import { fakeSettings } from '../../fakeData/fakeSettings'
import OptionItem from '../../components/SettingItem/OptionItem'


const Settings = () => {
    return (
        <View style={stylesSettings.container}>
            {/* header */}
            <View style={stylesSettings.header}>
                <Image source={require('../../assets/photo_profile.jpeg')} style={stylesSettings.image} />
                <View style={stylesSettings.userInfo}>
                    <Text style={stylesSettings.userName}>Sarah Doe</Text>
                    <Text style={stylesSettings.userEmail}>Sarah.doe@gmail.com</Text>
                    <Text >07 83 92 58 49 </Text>
                </View>
            </View>
            <FlatList
                data={fakeSettings}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <OptionItem item={item} />
                }}
            />
        </View>
    )
}

export default Settings