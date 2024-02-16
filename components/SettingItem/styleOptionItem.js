import { PADDING } from "../../outils/constantes";

const { StyleSheet } = require("react-native");

const stylesOptionItem = StyleSheet.create({
    container: {
        marginTop: 15,
        backgroundColor: 'white',
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,

    }

})
export default stylesOptionItem