import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowRight from 'react-native-vector-icons/FontAwesome6'
import { COLORS } from '../../outils/constantes'
import stylesOptionItem from './styleOptionItem'

const OptionItem = ({ item }) => {
    return (
        <TouchableOpacity style={stylesOptionItem.container}>
            <Text>{item.libelle}</Text>
            <ArrowRight name='arrow-right' size={20} color={COLORS.main} />
        </TouchableOpacity>
    )
}

export default OptionItem