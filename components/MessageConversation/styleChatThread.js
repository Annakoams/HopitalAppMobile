import { PADDING } from "../../outils/constantes";

const { StyleSheet } = require("react-native");

const styleChatThread = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 5,
        padding: 5,
        borderRadius: 10,
        maxWidth: '90%',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
    }

})
export default styleChatThread