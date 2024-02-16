import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { fakeCoversation } from '../../fakeData/fakeConversation'
import ChatThread from '../../components/MessageConversation/ChatThread'
import ChatInput from '../../components/MessageInput/ChatInput'

const MessageDetailles = ({ route, navigation }) => {

    const { item } = route.params

    useEffect(() => {
        navigation.setOptions({ title: item.fullName })
    })
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={fakeCoversation}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <ChatThread item={item} />
                }}
            />
            <ChatInput />


        </View>
    )
}

export default MessageDetailles