import { ColorPropType, StyleSheet } from "react-native";
import { colors } from "../../themes";

export const styles = StyleSheet.create({
	menuItemCard: {
		flexDirection: "row",
		backgroundColor: colors.gray[200],
		borderRadius: 12,
		padding: 10,
		width: "100%",
		height: 100,
		marginBottom: 10,
	},
	image: {
		height: 80,
		width: 80,
		borderRadius: 8,
	},
	title: {
		fontSize: 14,
		fontWeight: "bold",
		marginVertical: 3,
	},
	description: {
		fontSize: 12,
		marginVertical: 1,
		color: colors.gray[700],
	},
	price: {
		fontSize: 12,
		marginBottom: 3,
	},
	textGroup: {
		flex: 1,
		marginLeft: 15,
	},
});
