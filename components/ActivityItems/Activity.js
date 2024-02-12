import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import SVG_HOSPITAL from '../../assets/images/svg/images.svg'
import { FakeActivity } from '../../fakeData/FakeActivity.js'
import stylesActivity from './stylesActivity'
const Activity = ({ item }) => {
    return (
        <TouchableOpacity style={stylesActivity.scrollableListItem}>
            <SVG_HOSPITAL width={60} height={60} />
            <Text style={stylesActivity.mainText}>{item.mainText}</Text>
            <Text style={stylesActivity.subText}>{item.subText}</Text>
        </TouchableOpacity>
    )
}

export default Activity