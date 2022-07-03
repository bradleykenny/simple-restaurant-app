import { StyleSheet } from "react-native";
import { colors } from "../../themes";

export const styles = StyleSheet.create({
	menuItemCard: {
		flexDirection: "row",
		backgroundColor: colors.gray[100],
		borderRadius: 12,
		padding: 10,
		width: "100%",
		height: 100,
		marginBottom: 10,
	},
	image: {
		height: 80,
		width: 80,
		borderRadius: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	price: {},
	textGroup: {
		flex: 1,
		paddingLeft: 20,
	},
});
