import { StyleSheet } from "react-native";
import color from "../../../assets/theme/color";

export default StyleSheet.create({
    label: {
        // position: 'absolute',
        // backgroundColor: 'transparent',
        // zIndex: 1
    },
    wrapper: {
        height: 42,
        borderColor: color.gray,
         borderWidth: 1,
         borderRadius: 4,
         paddingHorizontal: 5,
    },
    textInput:{
        flex: 1,
        // width: '100% '
    },
    inputContainer:{
        paddingVertical: 12
    },
    errorText:{
        color: color.danger,
        paddingTop: 4,
        fontSize: 12,
    }
})