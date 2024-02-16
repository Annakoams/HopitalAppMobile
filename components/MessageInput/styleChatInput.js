import { COLORS, PADDING } from "../../outils/constantes";

const { StyleSheet } = require("react-native");

const styleChatInput = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#eee',
        justifyContent: 'space-between',
        alignItems: 'center',



    },
    input: {
        flex: 1,
        backgroundColor: 'white',


    },
    send: {
        backgroundColor: COLORS.main,
        padding: 10,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: 13,
        alignItems: 'center',
        color: 'white',
    },


})
export default styleChatInput