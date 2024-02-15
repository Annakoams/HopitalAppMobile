import { StyleSheet } from "react-native"
import { PADDING } from "../../outils/constantes"

const stylesSyptomes = StyleSheet.create({
    item: {
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    imageItem: {
        width: 30, height: 30, marginRight: 5
    }

})
export default stylesSyptomes;