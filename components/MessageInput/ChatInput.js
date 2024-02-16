import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styleChatInput from './styleChatInput'
import IconSend from 'react-native-vector-icons/Feather';

const ChatInput = () => {
    return (
        <View style={styleChatInput.container}>
            <TextInput style={styleChatInput.input} placeholder='Message ici ...' />
            <TouchableOpacity>
                <IconSend name='send' style={styleChatInput.send} size={24} />
            </TouchableOpacity>
        </View>
    )
}

export default ChatInput