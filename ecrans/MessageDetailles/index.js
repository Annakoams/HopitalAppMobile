import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { fakeCoversation } from '../../fakeData/fakeConversation'

const MessageDetailles = ({ route, navigation }) => {

    const { item } = route.params

    useEffect(() => {
        navigation.setOptions({ title: item.fullName })
    })
    return (
        <View>
            <FlatList data={fakeCoversation} keyExtractor={item => item.id} renderItem={({ item }) => {
                return <Text>{item.id}</Text>
            }} />


        </View>
    )
}

export default MessageDetailles