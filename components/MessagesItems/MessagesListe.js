import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { FakeChat } from '../../fakeData/FakeChat';
import stylesMessageList from './styleMessageList';
// convertion de date
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

dayjs.extend(relativeTime)

const Messages = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            style={stylesMessageList.messageConteiner}
            onPress={() => navigation.navigate('MessageDetailles')}>
            <Image
                source={{ uri: 'https://media.istockphoto.com/id/1425798958/fr/photo/photo-dune-femme-m%C3%A9decin-confiante-%C3%A0-lh%C3%B4pital-regardant-lappareil-photo-avec-le-sourire.jpg?s=612x612&w=is&k=20&c=Ac3eCtXw6t0aZfd-Ygy8qlsT-toO9F8Gi-g-cePc2kc=' }}
                style={stylesMessageList.messageImg}
            />
            <View style={stylesMessageList.messageInfo}>
                <View style={stylesMessageList.date_name}>
                    <Text style={stylesMessageList.name}>{item.fullName}</Text>
                    <Text>{dayjs(item.date).fromNow(true)}</Text>
                </View>
                <Text>{item.last_message}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Messages