import { StyleSheet } from "react-native";

import { colors } from "../../themes";

export const styles = StyleSheet.create({
	pressable: {
		width: "100%",
		paddingVertical: 10,
		alignContent: "center",
		borderRadius: 5,
		borderColor: colors.primary,
		borderWidth: 1,
		backgroundColor: colors.primary,
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
