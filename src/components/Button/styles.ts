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
	},
	pressed: {
		backgroundColor: colors.primary,
		opacity: 0.7,
	},
	unpressed: {
		backgroundColor: colors.primary,
		opacity: 0.8,
	},
	button: {
		color: "white",
	},
	text: {
		textAlign: "center",
		color: "#fff",
	},
});
