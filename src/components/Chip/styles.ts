import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export const styles = StyleSheet.create({
	chip: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		marginHorizontal: 5,
		marginBottom: 10,
		borderRadius: 5,
		backgroundColor: colors.gray[200],
		alignSelf: "flex-start",
	},
	text: {
		alignSelf: "flex-start",
		justifyContent: "flex-start",
		fontSize: 12,
	},
});
