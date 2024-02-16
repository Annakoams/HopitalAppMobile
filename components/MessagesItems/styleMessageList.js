import { PADDING } from "../../outils/constantes";

const { StyleSheet } = require("react-native");

const stylesMessageList = StyleSheet.create({
    messageConteiner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5,
        marginBottom: 5,
        marginTop: 15,
        paddingVertical: PADDING.vertical,
        paddingHorizontal: PADDING.horizontal,

    },
    messageImg: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        marginRight: 15,

    },
    messageInfo: {
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: PADDING.horizontal,
    },
    date_name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        marginRight: 5,

    }
})
export default stylesMessageList