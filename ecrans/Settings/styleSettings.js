import { PADDING } from "../../outils/constantes";

const { StyleSheet } = require("react-native");

const stylesSettings = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
        padding: 10,


    },
    image: {
        width: 80,
        height: 80,

        borderRadius: 80 / 2

    },
    userInfo: {
        marginLeft: 15,
    },
    userName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userEmail: {
        marginBottom: 1,
    },
})
export default stylesSettings;