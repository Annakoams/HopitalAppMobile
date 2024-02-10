import { StyleSheet } from 'react-native'
import { PADDING } from '../../outils/constantes'

const dashbordStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white'
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    userName: {
        fontSize: 16,
    },
    // stylise  la flatlist
    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,

    },
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

export default dashbordStyles