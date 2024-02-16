import { View, Text } from 'react-native'
import React from 'react';
import styleChatThread from './styleChatThread';
// convertion de date
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import { COLORS } from '../../outils/constantes';

dayjs.extend(relativeTime)

const ChatThread = ({ item }) => {

    const isMine = () => {
        return item.user.id === 1;
    }

    return (
        <View style={[
            styleChatThread.container,
            {
                backgroundColor: isMine() ? COLORS.main : 'white',
                alignSelf: isMine() ? 'flex-end' : 'flex-start',

            },
        ]}>
            <Text style={{
                color: isMine() ? 'white' : null,
                alignSelf: isMine() ? 'flex-end' : 'flex-start',

            }}>{item.message}</Text>
            <Text style={{
                color: isMine() ? 'white' : null,
                alignSelf: isMine() ? 'flex-end' : 'flex-start',

            }}>{dayjs(item.craetedAT).fromNow(true)}</Text>
        </View>
    )
}

export default ChatThread