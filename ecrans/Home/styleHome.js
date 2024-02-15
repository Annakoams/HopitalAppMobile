import { StyleSheet } from 'react-native'
import { COLORS, PADDING } from '../../outils/constantes'

const DashboardStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',
        marginBottom: 15,
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    userName: {
        fontSize: 16,
    },
    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },

    title: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,

    },
    titleBold: {
        fontWeight: 'bold',
    },
    title_space_between: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    link: {
        color: COLORS.main
    },
    doctorsContainer: {
        marginTop: 10,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    },
    doctorCart: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 5,
        padding: 10,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginBottom: 20,
        borderRadius: 5,

    },
    doctorImg: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginRight: 15,

    },
    doctorInfo: {
        flexDirection: 'column',
    },
    doctorName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 15
    },
    doctorSpec: {
        backgroundColor: COLORS.main,
        padding: 5,
        paddingHorizontal: PADDING.horizontal,
        borderRadius: 15,
        fontSize: 14,
        color: 'white'

    }


})

export default DashboardStyles