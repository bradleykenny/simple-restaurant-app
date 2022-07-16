import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export const styles = StyleSheet.create({
	mainView: {
		width: "100%",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "rgba(205,205,205,1)",
		backgroundColor: colors.white,
		marginVertical: 5,
	},
	textInput: {
		paddingHorizontal: 15,
		width: "100%",
		backgroundColor: colors.transparent,
	},
	inFocus: {
		borderColor: "blue",
	},
	multiline: {},
	label: {
		marginTop: 10,
		marginBottom: 2,
		marginLeft: 0,
		fontWeight: "bold",
	},
});
