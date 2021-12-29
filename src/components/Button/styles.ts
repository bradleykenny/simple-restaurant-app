import { StyleSheet } from "react-native";

import { colors } from "../../themes";

export const styles = StyleSheet.create({
	mainView: {
		width: "100%",
		paddingVertical: 10,
		alignContent: "center",
		backgroundColor: colors.primary[100],
		borderRadius: 5,
		borderColor: colors.primary[100],
		borderWidth: 1,
	},
	button: {
		color: "white",
	},
	text: {
		textAlign: "center",
		color: "#fff",
	},
	disabled: {
		backgroundColor: colors.inactive,
		borderColor: "black",
	},
});
