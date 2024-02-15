import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import stylesSyptomes from './stylesSymptomes'



const Symptomes = ({ item }) => {
    return (
        <TouchableOpacity >
            <View style={stylesSyptomes.item} >
                <Image
                    style={stylesSyptomes.imageItem}
                    source={require('../../assets/images/images.jpeg')} />
                <Text>{item.libelle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Symptomes;