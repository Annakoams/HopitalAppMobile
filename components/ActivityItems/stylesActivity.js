// stylise  la flatlist
import { StyleSheet } from "react-native"
import { PADDING } from "../../outils/constantes"
export const stylesActivity = StyleSheet.create({

    scrollableListItem: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginRight: 15,
        backgroundColor: 'white',
        elevation: 1,
    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    subText: {
        marginTop: 5,
        fontSize: 12,
    }

})
export default stylesActivity