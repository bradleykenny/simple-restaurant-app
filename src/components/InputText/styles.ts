import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export const styles = StyleSheet.create({
	mainView: {
		width: "100%",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: colors.gray[300],
		backgroundColor: colors.gray[200],
		marginVertical: 5,
	},
	textInput: {
		paddingHorizontal: 15,
		width: "100%",
		backgroundColor: colors.transparent,
		fontSize: 16,
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
