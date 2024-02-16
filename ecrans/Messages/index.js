import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { FakeChat } from '../../fakeData/FakeChat'
import MessagesListe from '../../components/MessagesItems/MessagesListe'
import stylesMessage from './styleMessage'

const Messages = ({ navigation }) => {
    return (
        <FlatList
            data={FakeChat}
            keyExtractor={(item) => item.id}
            style={stylesMessage.root}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <MessagesListe item={item} navigation={navigation} />
            }}
        />

    )
}

export default Messages